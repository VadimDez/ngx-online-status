# ngx-online-status

> Detect online/offline state

Angular Module to track online and offline state

## Install

```
npm install ngx-online-status --save
```

## Usage

* Import `OnlineStatusModule` to your module

```ts
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    OnlineStatusModule
  ],
  providers: []
})
```

* Inject `OnlineStatusService` and use it:

```ts
//...
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

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
