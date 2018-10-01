# ngx-online-status

> Detect online/offline state

Angular 5+ Module to track online and offline state

<p align="center">
  <img src="https://user-images.githubusercontent.com/3748453/36118473-719a6dd6-103d-11e8-8e36-dbdb910dfc9a.gif">
</p>

### Demo
[https://vadimdez.github.io/ngx-online-status/](https://vadimdez.github.io/ngx-online-status/)

## Install

```
npm install ngx-online-status --save
```

## Usage

* Import `OnlineStatusModule` to your module

```typescript
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    OnlineStatusModule
  ],
  providers: [
    //...
  ]
})
```

* Inject `OnlineStatusService` and use it:

```typescript
import { OnlineStatusService } from 'ngx-online-status';

export class AppComponent {
  status: OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // use status
      this.status = status;
    });
  }
}
``` 

##### OnlineStatusType

```OnlineStatusType.OFFLINE``` equals to `0`

```OnlineStatusType.ONLINE``` equals to `1`

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
