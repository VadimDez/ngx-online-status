import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { OnlineStatusType } from './online-status-type.enum';

@Injectable()
export class OnlineStatusService implements OnDestroy {
  public status = new EventEmitter<OnlineStatusType>(true);
  static EVENT_TYPE_ONLINE = 'online';
  static EVENT_TYPE_OFFLINE = 'offline';

  constructor() {
    this.bind();

    window.addEventListener(OnlineStatusService.EVENT_TYPE_ONLINE, this.onOnline);
    window.addEventListener(OnlineStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
  }

  ngOnDestroy() {
    window.removeEventListener(OnlineStatusService.EVENT_TYPE_ONLINE, this.onOnline);
    window.removeEventListener(OnlineStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
  }

  /**
   * getStatus - get online status
   * 
   * @returns OnlineStatusType
   */
  public getStatus(): OnlineStatusType {
    if (navigator.onLine) {
      return OnlineStatusType.ONLINE;
    }
    
    return OnlineStatusType.OFFLINE;
  }

  private bind() {
    this.onOnline = this.onOnline.bind(this);
    this.onOffline = this.onOffline.bind(this);
  }

  private onOnline() {
    this.status.emit(OnlineStatusType.ONLINE);
  }

  private onOffline() {
    this.status.emit(OnlineStatusType.OFFLINE);
  }
}
