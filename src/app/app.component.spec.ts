import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { OnlineStatusModule } from "./modules/online-status";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [OnlineStatusModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "ngx-online-status"
    );
  });
});
