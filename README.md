# ngx-online-status
[![Build Status](https://travis-ci.org/VadimDez/ngx-online-status.svg?branch=master)](https://travis-ci.org/VadimDez/ngx-online-status) ![https://www.paypal.me/vadimdez](https://img.shields.io/badge/paypal-donate-yellow.svg)

> Detect online/offline state

Angular 5+ Module to track online and offline state

<p align="center">
  <img src="https://user-images.githubusercontent.com/3748453/36118473-719a6dd6-103d-11e8-8e36-dbdb910dfc9a.gif">
</p>

### Demo
[https://vadimdez.github.io/ngx-online-status/](https://vadimdez.github.io/ngx-online-status/)

or stackblitz code/demo

[https://stackblitz.com/edit/ngx-online-status](https://stackblitz.com/edit/ngx-online-status)

## Install

```
npm install ngx-online-status --save
```

## Usage

* Import `OnlineStatusModule` to your module

```typescript
import { OnlineStatusModule } from 'ngx-online-status';

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
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

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
