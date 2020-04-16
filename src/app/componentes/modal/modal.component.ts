import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2, ElementRef} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
declare var $ : any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() titulo:string
  @Input() descripcion:string
  @Output() enviarRespuesta : EventEmitter<number>; 
  @ViewChild('modalMurcielago') modalMurcielago: ElementRef;

  formularioMurcielago;
  constructor(private formBuilder: FormBuilder, private reder: Renderer2) {
    this.enviarRespuesta = new EventEmitter();

    this.formularioMurcielago = this.formBuilder.group({
      palabra: new FormControl('', {validators: Validators.required, updateOn: 'blur'})
    }, {updateOn: 'change'});
  }

  ngOnInit(): void {
  }

  enviar(){
    this.enviarRespuesta.emit(this.formularioMurcielago.value.palabra);
    console.log(this.modalMurcielago.nativeElement);
    //this.modalMurcielago.nativeElement
    //this.reder.setProperty(this.modalMurcielago.nativeElement, 'modal', 'hide')
    //this.reder.setProperty
    //this.modalMurcielago.modal('hide');
    $('#exampleModal').modal('hide');
  }

}
