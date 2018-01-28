import { TestBed, inject, async } from '@angular/core/testing';

import { OnlineStatusService } from './online-status.service';
import { OnlineStatusType } from './online-status-type.enum';

function fakeEvent(type: string) {
  let $event = new Event(type);
  window.dispatchEvent($event);
}

describe('OnlineStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlineStatusService]
    });
  });

  it('should be created', inject([OnlineStatusService], (service: OnlineStatusService) => {
    expect(service).toBeTruthy();
  }));

  it('should call on online event', async(inject([OnlineStatusService],(service: OnlineStatusService) => {
    let eventSpy = jasmine.createSpy();
    window.addEventListener(OnlineStatusService.EVENT_TYPE_ONLINE, eventSpy);

    let subscription = service.status.subscribe((status: OnlineStatusType) => {
      expect(eventSpy).toHaveBeenCalled();
      expect(status).toEqual(OnlineStatusType.ONLINE);

      subscription.unsubscribe();
    });

    fakeEvent(OnlineStatusService.EVENT_TYPE_ONLINE);
  })));

  it('should call on offline event', async(inject([OnlineStatusService],(service: OnlineStatusService) => {
    let eventSpy = jasmine.createSpy();
    window.addEventListener(OnlineStatusService.EVENT_TYPE_OFFLINE, eventSpy);

    let subscription = service.status.subscribe((status: OnlineStatusType) => {
      expect(eventSpy).toHaveBeenCalled();
      expect(status).toEqual(OnlineStatusType.OFFLINE);

      subscription.unsubscribe();
    });

    fakeEvent(OnlineStatusService.EVENT_TYPE_OFFLINE);
  })));
});
