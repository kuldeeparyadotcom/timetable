import * as import0 from '../../../app/timetable-item-input/timetable-item-input.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-item/timetable-item.service';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/validators';
import * as import18 from '@angular/forms/src/validators';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '@angular/forms/src/directives/ng_form';
import * as import24 from '@angular/forms/src/directives/control_container';
export class Wrapper_TimetableItemInputComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableItemInputComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableItemInputComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_TimetableItemInputComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableItemInputComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableItemInputComponent>;
  _TimetableItemInputComponent_0_3:Wrapper_TimetableItemInputComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemInputComponent_Host0,renderType_TimetableItemInputComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-item-input',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableItemInputComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemInputComponent_0_3 = new Wrapper_TimetableItemInputComponent(this.injectorGet(import8.TimetableItemService,this.parentIndex));
    this.compView_0.create(this._TimetableItemInputComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableItemInputComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableItemInputComponent) && (0 === requestNodeIndex))) { return this._TimetableItemInputComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableItemInputComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableItemInputComponentNgFactory:import7.ComponentFactory<import0.TimetableItemInputComponent> = new import7.ComponentFactory<import0.TimetableItemInputComponent>('timetable-item-input',View_TimetableItemInputComponent_Host0,import0.TimetableItemInputComponent);
const styles_TimetableItemInputComponent:any[] = ['input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n      border: 1px solid red;\n    }'];
var renderType_TimetableItemInputComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TimetableItemInputComponent,{});
export class View_TimetableItemInputComponent0 extends import1.AppView<import0.TimetableItemInputComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _NgForm_8_3:import9.Wrapper_NgForm;
  _ControlContainer_8_4:any;
  _NgControlStatusGroup_8_5:import10.Wrapper_NgControlStatusGroup;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _DefaultValueAccessor_13_3:import11.Wrapper_DefaultValueAccessor;
  _RequiredValidator_13_4:import12.Wrapper_RequiredValidator;
  _NG_VALIDATORS_13_5:any[];
  _NG_VALUE_ACCESSOR_13_6:any[];
  _NgModel_13_7:import13.Wrapper_NgModel;
  _NgControl_13_8:any;
  _NgControlStatus_13_9:import10.Wrapper_NgControlStatus;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _DefaultValueAccessor_16_3:import11.Wrapper_DefaultValueAccessor;
  _RequiredValidator_16_4:import12.Wrapper_RequiredValidator;
  _NG_VALIDATORS_16_5:any[];
  _NG_VALUE_ACCESSOR_16_6:any[];
  _NgModel_16_7:import13.Wrapper_NgModel;
  _NgControl_16_8:any;
  _NgControlStatus_16_9:import10.Wrapper_NgControlStatus;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _DefaultValueAccessor_19_3:import11.Wrapper_DefaultValueAccessor;
  _RequiredValidator_19_4:import12.Wrapper_RequiredValidator;
  _NG_VALIDATORS_19_5:any[];
  _NG_VALUE_ACCESSOR_19_6:any[];
  _NgModel_19_7:import13.Wrapper_NgModel;
  _NgControl_19_8:any;
  _NgControlStatus_19_9:import10.Wrapper_NgControlStatus;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_54:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemInputComponent0,renderType_TimetableItemInputComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_54 = import14.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row col-sm-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray4(4,'class','col-sm-7','style','background-color:white;'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'article',new import3.InlineArray2(2,'class','panel panel-default'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'form',new import3.InlineArray2(2,'class','form-inline'),(null as any));
    this._NgForm_8_3 = new import9.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_8_4 = this._NgForm_8_3.context;
    this._NgControlStatusGroup_8_5 = new import10.Wrapper_NgControlStatusGroup(this._ControlContainer_8_4);
    this._text_9 = this.renderer.createText(this._el_8,'\n                    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n                                    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_10,'\n                                    ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_10,'input',new import3.InlineArray16(14,'class','form-control','id','start_time','name','start_time','ngModel','','placeholder','00:00 AM','required','','type','text'),(null as any));
    this._DefaultValueAccessor_13_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_13));
    this._RequiredValidator_13_4 = new import12.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_13_5 = [this._RequiredValidator_13_4.context];
    this._NG_VALUE_ACCESSOR_13_6 = [this._DefaultValueAccessor_13_3.context];
    this._NgModel_13_7 = new import13.Wrapper_NgModel(this._ControlContainer_8_4,this._NG_VALIDATORS_13_5,(null as any),this._NG_VALUE_ACCESSOR_13_6);
    this._NgControl_13_8 = this._NgModel_13_7.context;
    this._NgControlStatus_13_9 = new import10.Wrapper_NgControlStatus(this._NgControl_13_8);
    this._text_14 = this.renderer.createText(this._el_10,'\n\n                                    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_10,'\n                                    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_10,'input',new import3.InlineArray16(14,'class','form-control','id','end_time','name','end_time','ngModel','','placeholder','00:00 AM','required','','type','text'),(null as any));
    this._DefaultValueAccessor_16_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_16));
    this._RequiredValidator_16_4 = new import12.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_16_5 = [this._RequiredValidator_16_4.context];
    this._NG_VALUE_ACCESSOR_16_6 = [this._DefaultValueAccessor_16_3.context];
    this._NgModel_16_7 = new import13.Wrapper_NgModel(this._ControlContainer_8_4,this._NG_VALIDATORS_16_5,(null as any),this._NG_VALUE_ACCESSOR_16_6);
    this._NgControl_16_8 = this._NgModel_16_7.context;
    this._NgControlStatus_16_9 = new import10.Wrapper_NgControlStatus(this._NgControl_16_8);
    this._text_17 = this.renderer.createText(this._el_10,'\n        \n                                    ',(null as any));
    this._text_18 = this.renderer.createText(this._el_10,'\n                                    ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_10,'input',new import3.InlineArray16(14,'class','form-control','id','description','name','description','ngModel','','placeholder','Task Details','required','','type','text'),(null as any));
    this._DefaultValueAccessor_19_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_19));
    this._RequiredValidator_19_4 = new import12.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_19_5 = [this._RequiredValidator_19_4.context];
    this._NG_VALUE_ACCESSOR_19_6 = [this._DefaultValueAccessor_19_3.context];
    this._NgModel_19_7 = new import13.Wrapper_NgModel(this._ControlContainer_8_4,this._NG_VALIDATORS_19_5,(null as any),this._NG_VALUE_ACCESSOR_19_6);
    this._NgControl_19_8 = this._NgModel_19_7.context;
    this._NgControlStatus_19_9 = new import10.Wrapper_NgControlStatus(this._NgControl_19_8);
    this._text_20 = this.renderer.createText(this._el_10,'\n                    ',(null as any));
    this._text_21 = this.renderer.createText(this._el_8,'\n                    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_8,'button',new import3.InlineArray4(4,'class','btn btn-primary pull-right','type','submit'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n                        Save\n                    ',(null as any));
    this._text_24 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._text_25 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._text_26 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_8));
    this._NgForm_8_3.subscribe(this,this.eventHandler(this.handleEvent_8),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_16));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_19,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_19));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.DefaultValueAccessor) && (13 === requestNodeIndex))) { return this._DefaultValueAccessor_13_3.context; }
    if (((token === import17.RequiredValidator) && (13 === requestNodeIndex))) { return this._RequiredValidator_13_4.context; }
    if (((token === import18.NG_VALIDATORS) && (13 === requestNodeIndex))) { return this._NG_VALIDATORS_13_5; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_13_6; }
    if (((token === import20.NgModel) && (13 === requestNodeIndex))) { return this._NgModel_13_7.context; }
    if (((token === import21.NgControl) && (13 === requestNodeIndex))) { return this._NgControl_13_8; }
    if (((token === import22.NgControlStatus) && (13 === requestNodeIndex))) { return this._NgControlStatus_13_9.context; }
    if (((token === import16.DefaultValueAccessor) && (16 === requestNodeIndex))) { return this._DefaultValueAccessor_16_3.context; }
    if (((token === import17.RequiredValidator) && (16 === requestNodeIndex))) { return this._RequiredValidator_16_4.context; }
    if (((token === import18.NG_VALIDATORS) && (16 === requestNodeIndex))) { return this._NG_VALIDATORS_16_5; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (16 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_16_6; }
    if (((token === import20.NgModel) && (16 === requestNodeIndex))) { return this._NgModel_16_7.context; }
    if (((token === import21.NgControl) && (16 === requestNodeIndex))) { return this._NgControl_16_8; }
    if (((token === import22.NgControlStatus) && (16 === requestNodeIndex))) { return this._NgControlStatus_16_9.context; }
    if (((token === import16.DefaultValueAccessor) && (19 === requestNodeIndex))) { return this._DefaultValueAccessor_19_3.context; }
    if (((token === import17.RequiredValidator) && (19 === requestNodeIndex))) { return this._RequiredValidator_19_4.context; }
    if (((token === import18.NG_VALIDATORS) && (19 === requestNodeIndex))) { return this._NG_VALIDATORS_19_5; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (19 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_19_6; }
    if (((token === import20.NgModel) && (19 === requestNodeIndex))) { return this._NgModel_19_7.context; }
    if (((token === import21.NgControl) && (19 === requestNodeIndex))) { return this._NgControl_19_8; }
    if (((token === import22.NgControlStatus) && (19 === requestNodeIndex))) { return this._NgControlStatus_19_9.context; }
    if (((token === import23.NgForm) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._NgForm_8_3.context; }
    if (((token === import24.ControlContainer) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._ControlContainer_8_4; }
    if (((token === import22.NgControlStatusGroup) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._NgControlStatusGroup_8_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    this._NgControlStatusGroup_8_5.ngDoCheck(this,this._el_8,throwOnChange);
    this._DefaultValueAccessor_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_13_1_0:any = '';
    this._RequiredValidator_13_4.check_required(currVal_13_1_0,throwOnChange,false);
    this._RequiredValidator_13_4.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_13_2_0:any = 'start_time';
    this._NgModel_13_7.check_name(currVal_13_2_0,throwOnChange,false);
    const currVal_13_2_1:any = '';
    this._NgModel_13_7.check_model(currVal_13_2_1,throwOnChange,false);
    this._NgModel_13_7.ngDoCheck(this,this._el_13,throwOnChange);
    this._NgControlStatus_13_9.ngDoCheck(this,this._el_13,throwOnChange);
    this._DefaultValueAccessor_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    const currVal_16_1_0:any = '';
    this._RequiredValidator_16_4.check_required(currVal_16_1_0,throwOnChange,false);
    this._RequiredValidator_16_4.ngDoCheck(this,this._el_16,throwOnChange);
    const currVal_16_2_0:any = 'end_time';
    this._NgModel_16_7.check_name(currVal_16_2_0,throwOnChange,false);
    const currVal_16_2_1:any = '';
    this._NgModel_16_7.check_model(currVal_16_2_1,throwOnChange,false);
    this._NgModel_16_7.ngDoCheck(this,this._el_16,throwOnChange);
    this._NgControlStatus_16_9.ngDoCheck(this,this._el_16,throwOnChange);
    this._DefaultValueAccessor_19_3.ngDoCheck(this,this._el_19,throwOnChange);
    const currVal_19_1_0:any = '';
    this._RequiredValidator_19_4.check_required(currVal_19_1_0,throwOnChange,false);
    this._RequiredValidator_19_4.ngDoCheck(this,this._el_19,throwOnChange);
    const currVal_19_2_0:any = 'description';
    this._NgModel_19_7.check_name(currVal_19_2_0,throwOnChange,false);
    const currVal_19_2_1:any = '';
    this._NgModel_19_7.check_model(currVal_19_2_1,throwOnChange,false);
    this._NgModel_19_7.ngDoCheck(this,this._el_19,throwOnChange);
    this._NgControlStatus_19_9.ngDoCheck(this,this._el_19,throwOnChange);
    this._NgControlStatusGroup_8_5.checkHost(this,this,this._el_8,throwOnChange);
    this._RequiredValidator_13_4.checkHost(this,this,this._el_13,throwOnChange);
    this._NgControlStatus_13_9.checkHost(this,this,this._el_13,throwOnChange);
    this._RequiredValidator_16_4.checkHost(this,this,this._el_16,throwOnChange);
    this._NgControlStatus_16_9.checkHost(this,this,this._el_16,throwOnChange);
    this._RequiredValidator_19_4.checkHost(this,this,this._el_19,throwOnChange);
    this._NgControlStatus_19_9.checkHost(this,this,this._el_19,throwOnChange);
    const currVal_54:boolean = !this._NgForm_8_3.context.valid;
    if (import3.checkBinding(throwOnChange,this._expr_54,currVal_54)) {
      this.renderer.setElementProperty(this._el_22,'disabled',currVal_54);
      this._expr_54 = currVal_54;
    }
  }
  destroyInternal():void {
    this._NgModel_13_7.ngOnDestroy();
    this._NgModel_16_7.ngOnDestroy();
    this._NgModel_19_7.ngOnDestroy();
    this._NgForm_8_3.ngOnDestroy();
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_8_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.onSubmit(this._NgForm_8_3.context)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_13_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_19(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_19_3.handleEvent(eventName,$event) && result);
    return result;
  }
}