import { Component, inject } from '@angular/core';
import { ToastContainerComponent } from '../toast-container-component/toast-container-component';
import { ToastService } from '../../service/toast-service';

@Component({
  selector: 'app-main',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [ToastContainerComponent],
})
export class AppComponent {
  private toast = inject(ToastService);

  fireSuccess() {
    this.toast.showSuccess('Saved successfully');
  }
  fireError() {
    this.toast.showError('Something went wrong', 4000);
  }
  fireWarn() {
    this.toast.showWarning('Please check your input', 3500);
  }
  fireInfo() {
    this.toast.showInfo('Heads up! This is an info toast', 3000);
  }
}
