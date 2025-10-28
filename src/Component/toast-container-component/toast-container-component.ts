import { Component, computed, inject } from '@angular/core';
import { ToastService } from '../../Service/toast-service';
import { NgFor, NgClass } from '@angular/common';
import { Toast } from '../../model/toastModel';

@Component({
  selector: 'app-toast-container-component',
  imports: [NgClass, NgFor],
  templateUrl: './toast-container-component.html',
  styleUrl: './toast-container-component.css',
})
export class ToastContainerComponent {
  private svc = inject(ToastService);
  toasts = computed<Toast[]>(() => this.svc.toasts());
  remove = (id: number) => this.svc.remove(id);

  icon(kind: Toast['kind']) {
    switch (kind) {
      case 'success':
        return '✅';
      case 'error':
        return '⛔';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  }
}
