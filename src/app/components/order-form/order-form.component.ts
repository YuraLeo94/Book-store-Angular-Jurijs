import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CompletedDialogComponent } from '../dialogs/completed-dialog/completed-dialog.component';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less']
})
export class OrderFormComponent implements OnInit {

  public orderForm: FormGroup;
  public emailPrefix = "email:";
  public confirmEmailPrefix = "confirm email:";
  public nameSurnamePrefix = "name / surname:";
  public nameSurnameMax = 35;
  public buttonText = "Order";
  private emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  /**
   * @nameSurnamePattern support validation for next names:
   * Jhon Smith,
   * Jhon D'Largi,
   * Jhon Dou-Smith,
   * Jhon Dou Smit,
   * Gector Jhon-Hauzen,
   * Matias d'Arras,
   * Martin Luther King,
   * Martin Luther King Jr.,
   * Nikolajs II
   */
  private nameSurnamePattern = /^([a-zA-Z]{2,}\s([a-zA-Z]{1,}'?-?[a-zA-Z]{2,}|[a-zA-Z]{1,})((\s[a-zA-Z]{1,})?(\s[a-zA-Z]{1,}\.?))?)$/;

  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.reactiveForm();
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public onOrder(): void {
    if (!this.orderForm.valid) {
      this.validateAllFormFields(this.orderForm);
    } else {
      this.dialog.open(CompletedDialogComponent, { height: '320px' });
    }
  }

  private confirmEmail(control: AbstractControl): ValidationErrors | null {
    if (control.value['email'] === control.value['confirmEmail']) {
      control.get('confirmEmail')?.setErrors(null);
    } else {
      control.get('confirmEmail')?.setErrors({ 'mismatch': true });
    }
    return null;
  }

  private reactiveForm(): void {
    this.orderForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      confirmEmail: ['', [Validators.required]],
      nameSurname: ['', [Validators.required, Validators.maxLength(this.nameSurnameMax), Validators.pattern(this.nameSurnamePattern)]]
    }, { validators: this.confirmEmail });
  }

  public errorHandling = (control: string, error: string) => {
    return this.orderForm.controls[control].hasError(error);
  }

}