import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success-tmpl',
  standalone: true,
  imports: [],
  template: `
    <div class="tw-gap-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h2>Congratulation</h2>
      <div class="tw-bg-white tw-flex tw-flex-col tw-gap-2">
          <label class="tw-text-slate-500 tw-text-sm">You have successfully logged in.</label>
      </div>
      <button class="tw-px-4 tw-py-2 tw-rounded-md tw-bg-zinc-600 tw-text-white"
          (click)="onLogout($event)">Logout</button>
  </div>
  `,
  styles: ``
})
export class SuccessTmplComponent {
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  onLogout = ($event: any) => this.logout.emit();
}
