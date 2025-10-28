import { Injectable, signal } from '@angular/core';
import { Toast, ToastKind } from '../model/toastModel';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  private _toasts = signal<Toast[]>([]);
  private counter = 0;

  toasts = this._toasts.asReadonly();

  show(kind: ToastKind, message: string, duration = 3000) {
    const id = ++this.counter;
    const toast: Toast = { id, kind, message, duration };
    this._toasts.update((list) => [toast, ...list]);

    // auto dismiss
    window.setTimeout(() => this.remove(id), duration);
  }

  // all the methods i have
  showSuccess(msg: string, duration?: number) {
    this.show('success', msg, duration);
  }
  showError(msg: string, duration?: number) {
    this.show('error', msg, duration);
  }
  showWarning(msg: string, duration?: number) {
    this.show('warning', msg, duration);
  }
  showInfo(msg: string, duration?: number) {
    this.show('info', msg, duration);
  }

  remove(id: number) {
    this._toasts.update((list) => list.filter((t) => t.id !== id));
  }

  clear() {
    this._toasts.set([]);
  }
}
