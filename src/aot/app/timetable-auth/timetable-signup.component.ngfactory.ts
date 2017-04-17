import * as import0 from '../../../app/timetable-auth/timetable-signup.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-auth/timetable-auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/forms/src/directives/default_value_accessor';
import * as import21 from '@angular/forms/src/directives/validators';
import * as import22 from '@angular/forms/src/validators';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_model';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/ng_control_status';
import * as import27 from '@angular/router/src/directives/router_link';
import * as import28 from '@angular/forms/src/directives/ng_form';
import * as import29 from '@angular/forms/src/directives/control_container';
import * as import30 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from '@angular/common/src/directives/ng_if';
export class Wrapper_TimetableSignupComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableSignupComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TimetableSignupComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
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
var renderType_TimetableSignupComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableSignupComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableSignupComponent>;
  _TimetableSignupComponent_0_3:Wrapper_TimetableSignupComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableSignupComponent_Host0,renderType_TimetableSignupComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-signup',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableSignupComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableSignupComponent_0_3 = new Wrapper_TimetableSignupComponent(this.injectorGet(import8.TimetableAuthService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._TimetableSignupComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableSignupComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableSignupComponent) && (0 === requestNodeIndex))) { return this._TimetableSignupComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableSignupComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableSignupComponentNgFactory:import7.ComponentFactory<import0.TimetableSignupComponent> = new import7.ComponentFactory<import0.TimetableSignupComponent>('timetable-signup',View_TimetableSignupComponent_Host0,import0.TimetableSignupComponent);
const styles_TimetableSignupComponent:any[] = ['body[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signup[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signup[_ngcontent-%COMP%]   .form-signup-heading[_ngcontent-%COMP%], .form-signup[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.form-signup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n.form-signup[_ngcontent-%COMP%]   input[type="email"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signup[_ngcontent-%COMP%]   input[type="password"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-signup[_ngcontent-%COMP%]   input[type="firstname"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signup[_ngcontent-%COMP%]   input[type="lastname"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}'];
class View_TimetableSignupComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _NgForm_2_3:import10.Wrapper_NgForm;
  _ControlContainer_2_4:any;
  _NgControlStatusGroup_2_5:import11.Wrapper_NgControlStatusGroup;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _DefaultValueAccessor_10_3:import12.Wrapper_DefaultValueAccessor;
  _RequiredValidator_10_4:import13.Wrapper_RequiredValidator;
  _NG_VALIDATORS_10_5:any[];
  _NG_VALUE_ACCESSOR_10_6:any[];
  _NgModel_10_7:import14.Wrapper_NgModel;
  _NgControl_10_8:any;
  _NgControlStatus_10_9:import11.Wrapper_NgControlStatus;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _DefaultValueAccessor_15_3:import12.Wrapper_DefaultValueAccessor;
  _RequiredValidator_15_4:import13.Wrapper_RequiredValidator;
  _NG_VALIDATORS_15_5:any[];
  _NG_VALUE_ACCESSOR_15_6:any[];
  _NgModel_15_7:import14.Wrapper_NgModel;
  _NgControl_15_8:any;
  _NgControlStatus_15_9:import11.Wrapper_NgControlStatus;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _DefaultValueAccessor_20_3:import12.Wrapper_DefaultValueAccessor;
  _RequiredValidator_20_4:import13.Wrapper_RequiredValidator;
  _NG_VALIDATORS_20_5:any[];
  _NG_VALUE_ACCESSOR_20_6:any[];
  _NgModel_20_7:import14.Wrapper_NgModel;
  _NgControl_20_8:any;
  _NgControlStatus_20_9:import11.Wrapper_NgControlStatus;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _DefaultValueAccessor_25_3:import12.Wrapper_DefaultValueAccessor;
  _RequiredValidator_25_4:import13.Wrapper_RequiredValidator;
  _NG_VALIDATORS_25_5:any[];
  _NG_VALUE_ACCESSOR_25_6:any[];
  _NgModel_25_7:import14.Wrapper_NgModel;
  _NgControl_25_8:any;
  _NgControlStatus_25_9:import11.Wrapper_NgControlStatus;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _RouterLinkWithHref_30_3:import15.Wrapper_RouterLinkWithHref;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _arr_66:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_TimetableSignupComponent1,renderType_TimetableSignupComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_66 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'form',new import3.InlineArray2(2,'class','form-signup'),(null as any));
    this._NgForm_2_3 = new import10.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_2_4 = this._NgForm_2_3.context;
    this._NgControlStatusGroup_2_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'h2',new import3.InlineArray2(2,'class','form-signup-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Sign Up!',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'label',new import3.InlineArray4(4,'class','sr-only','for','inputFirstname'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'First Name',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_2,'input',new import3.InlineArray16(16,'autofocus','','class','form-control','id','inputFirstname','name','firstname','ngModel','','placeholder','First Name','required','','type','firstname'),(null as any));
    this._DefaultValueAccessor_10_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_10));
    this._RequiredValidator_10_4 = new import13.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
    this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
    this._NgModel_10_7 = new import14.Wrapper_NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_10_5,(null as any),this._NG_VALUE_ACCESSOR_10_6);
    this._NgControl_10_8 = this._NgModel_10_7.context;
    this._NgControlStatus_10_9 = new import11.Wrapper_NgControlStatus(this._NgControl_10_8);
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_2,'label',new import3.InlineArray4(4,'class','sr-only','for','inputLastname'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Last Name',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_2,'input',new import3.InlineArray16(14,'class','form-control','id','inputLastname','name','lastname','ngModel','','placeholder','Last Name','required','','type','lastname'),(null as any));
    this._DefaultValueAccessor_15_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_15));
    this._RequiredValidator_15_4 = new import13.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_15_5 = [this._RequiredValidator_15_4.context];
    this._NG_VALUE_ACCESSOR_15_6 = [this._DefaultValueAccessor_15_3.context];
    this._NgModel_15_7 = new import14.Wrapper_NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_15_5,(null as any),this._NG_VALUE_ACCESSOR_15_6);
    this._NgControl_15_8 = this._NgModel_15_7.context;
    this._NgControlStatus_15_9 = new import11.Wrapper_NgControlStatus(this._NgControl_15_8);
    this._text_16 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_2,'label',new import3.InlineArray4(4,'class','sr-only','for','inputEmail'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'Email address',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_2,'input',new import3.InlineArray16(14,'class','form-control','id','inputEmail','name','email','ngModel','','placeholder','Email address','required','','type','email'),(null as any));
    this._DefaultValueAccessor_20_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_20));
    this._RequiredValidator_20_4 = new import13.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_20_5 = [this._RequiredValidator_20_4.context];
    this._NG_VALUE_ACCESSOR_20_6 = [this._DefaultValueAccessor_20_3.context];
    this._NgModel_20_7 = new import14.Wrapper_NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_20_5,(null as any),this._NG_VALUE_ACCESSOR_20_6);
    this._NgControl_20_8 = this._NgModel_20_7.context;
    this._NgControlStatus_20_9 = new import11.Wrapper_NgControlStatus(this._NgControl_20_8);
    this._text_21 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_2,'label',new import3.InlineArray4(4,'class','sr-only','for','inputPassword'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Password',(null as any));
    this._text_24 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_2,'input',new import3.InlineArray16(14,'class','form-control','id','inputPassword','name','password','ngModel','','placeholder','Password','required','','type','password'),(null as any));
    this._DefaultValueAccessor_25_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_25));
    this._RequiredValidator_25_4 = new import13.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_25_5 = [this._RequiredValidator_25_4.context];
    this._NG_VALUE_ACCESSOR_25_6 = [this._DefaultValueAccessor_25_3.context];
    this._NgModel_25_7 = new import14.Wrapper_NgModel(this._ControlContainer_2_4,this._NG_VALIDATORS_25_5,(null as any),this._NG_VALUE_ACCESSOR_25_6);
    this._NgControl_25_8 = this._NgModel_25_7.context;
    this._NgControlStatus_25_9 = new import11.Wrapper_NgControlStatus(this._NgControl_25_8);
    this._text_26 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_2,'button',new import3.InlineArray4(4,'class','btn btn-lg btn-primary btn-block','type','submit'),(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'Sign me up!',(null as any));
    this._text_29 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray4(4,'class','btn btn-link','role','button'),(null as any));
    this._RouterLinkWithHref_30_3 = new import15.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router,this.parentIndex),this.parentView.injectorGet(import18.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import19.LocationStrategy,this.parentIndex));
    this._text_31 = this.renderer.createText(this._el_30,'Already Registered?',(null as any));
    this._text_32 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_2));
    this._NgForm_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_10,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_10));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_15));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_20,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_20));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_25,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_25));
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_30,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_30));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.DefaultValueAccessor) && (10 === requestNodeIndex))) { return this._DefaultValueAccessor_10_3.context; }
    if (((token === import21.RequiredValidator) && (10 === requestNodeIndex))) { return this._RequiredValidator_10_4.context; }
    if (((token === import22.NG_VALIDATORS) && (10 === requestNodeIndex))) { return this._NG_VALIDATORS_10_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_10_6; }
    if (((token === import24.NgModel) && (10 === requestNodeIndex))) { return this._NgModel_10_7.context; }
    if (((token === import25.NgControl) && (10 === requestNodeIndex))) { return this._NgControl_10_8; }
    if (((token === import26.NgControlStatus) && (10 === requestNodeIndex))) { return this._NgControlStatus_10_9.context; }
    if (((token === import20.DefaultValueAccessor) && (15 === requestNodeIndex))) { return this._DefaultValueAccessor_15_3.context; }
    if (((token === import21.RequiredValidator) && (15 === requestNodeIndex))) { return this._RequiredValidator_15_4.context; }
    if (((token === import22.NG_VALIDATORS) && (15 === requestNodeIndex))) { return this._NG_VALIDATORS_15_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_15_6; }
    if (((token === import24.NgModel) && (15 === requestNodeIndex))) { return this._NgModel_15_7.context; }
    if (((token === import25.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_8; }
    if (((token === import26.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_9.context; }
    if (((token === import20.DefaultValueAccessor) && (20 === requestNodeIndex))) { return this._DefaultValueAccessor_20_3.context; }
    if (((token === import21.RequiredValidator) && (20 === requestNodeIndex))) { return this._RequiredValidator_20_4.context; }
    if (((token === import22.NG_VALIDATORS) && (20 === requestNodeIndex))) { return this._NG_VALIDATORS_20_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (20 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_20_6; }
    if (((token === import24.NgModel) && (20 === requestNodeIndex))) { return this._NgModel_20_7.context; }
    if (((token === import25.NgControl) && (20 === requestNodeIndex))) { return this._NgControl_20_8; }
    if (((token === import26.NgControlStatus) && (20 === requestNodeIndex))) { return this._NgControlStatus_20_9.context; }
    if (((token === import20.DefaultValueAccessor) && (25 === requestNodeIndex))) { return this._DefaultValueAccessor_25_3.context; }
    if (((token === import21.RequiredValidator) && (25 === requestNodeIndex))) { return this._RequiredValidator_25_4.context; }
    if (((token === import22.NG_VALIDATORS) && (25 === requestNodeIndex))) { return this._NG_VALIDATORS_25_5; }
    if (((token === import23.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_25_6; }
    if (((token === import24.NgModel) && (25 === requestNodeIndex))) { return this._NgModel_25_7.context; }
    if (((token === import25.NgControl) && (25 === requestNodeIndex))) { return this._NgControl_25_8; }
    if (((token === import26.NgControlStatus) && (25 === requestNodeIndex))) { return this._NgControlStatus_25_9.context; }
    if (((token === import27.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._RouterLinkWithHref_30_3.context; }
    if (((token === import28.NgForm) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgForm_2_3.context; }
    if (((token === import29.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._ControlContainer_2_4; }
    if (((token === import26.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgControlStatusGroup_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatusGroup_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._DefaultValueAccessor_10_3.ngDoCheck(this,this._el_10,throwOnChange);
    const currVal_10_1_0:any = '';
    this._RequiredValidator_10_4.check_required(currVal_10_1_0,throwOnChange,false);
    this._RequiredValidator_10_4.ngDoCheck(this,this._el_10,throwOnChange);
    const currVal_10_2_0:any = 'firstname';
    this._NgModel_10_7.check_name(currVal_10_2_0,throwOnChange,false);
    const currVal_10_2_1:any = '';
    this._NgModel_10_7.check_model(currVal_10_2_1,throwOnChange,false);
    this._NgModel_10_7.ngDoCheck(this,this._el_10,throwOnChange);
    this._NgControlStatus_10_9.ngDoCheck(this,this._el_10,throwOnChange);
    this._DefaultValueAccessor_15_3.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_15_1_0:any = '';
    this._RequiredValidator_15_4.check_required(currVal_15_1_0,throwOnChange,false);
    this._RequiredValidator_15_4.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_15_2_0:any = 'lastname';
    this._NgModel_15_7.check_name(currVal_15_2_0,throwOnChange,false);
    const currVal_15_2_1:any = '';
    this._NgModel_15_7.check_model(currVal_15_2_1,throwOnChange,false);
    this._NgModel_15_7.ngDoCheck(this,this._el_15,throwOnChange);
    this._NgControlStatus_15_9.ngDoCheck(this,this._el_15,throwOnChange);
    this._DefaultValueAccessor_20_3.ngDoCheck(this,this._el_20,throwOnChange);
    const currVal_20_1_0:any = '';
    this._RequiredValidator_20_4.check_required(currVal_20_1_0,throwOnChange,false);
    this._RequiredValidator_20_4.ngDoCheck(this,this._el_20,throwOnChange);
    const currVal_20_2_0:any = 'email';
    this._NgModel_20_7.check_name(currVal_20_2_0,throwOnChange,false);
    const currVal_20_2_1:any = '';
    this._NgModel_20_7.check_model(currVal_20_2_1,throwOnChange,false);
    this._NgModel_20_7.ngDoCheck(this,this._el_20,throwOnChange);
    this._NgControlStatus_20_9.ngDoCheck(this,this._el_20,throwOnChange);
    this._DefaultValueAccessor_25_3.ngDoCheck(this,this._el_25,throwOnChange);
    const currVal_25_1_0:any = '';
    this._RequiredValidator_25_4.check_required(currVal_25_1_0,throwOnChange,false);
    this._RequiredValidator_25_4.ngDoCheck(this,this._el_25,throwOnChange);
    const currVal_25_2_0:any = 'password';
    this._NgModel_25_7.check_name(currVal_25_2_0,throwOnChange,false);
    const currVal_25_2_1:any = '';
    this._NgModel_25_7.check_model(currVal_25_2_1,throwOnChange,false);
    this._NgModel_25_7.ngDoCheck(this,this._el_25,throwOnChange);
    this._NgControlStatus_25_9.ngDoCheck(this,this._el_25,throwOnChange);
    const currVal_30_0_0:any = this._arr_66('/auth/signin');
    this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0,throwOnChange,false);
    this._RouterLinkWithHref_30_3.ngDoCheck(this,this._el_30,throwOnChange);
    this._NgControlStatusGroup_2_5.checkHost(this,this,this._el_2,throwOnChange);
    this._RequiredValidator_10_4.checkHost(this,this,this._el_10,throwOnChange);
    this._NgControlStatus_10_9.checkHost(this,this,this._el_10,throwOnChange);
    this._RequiredValidator_15_4.checkHost(this,this,this._el_15,throwOnChange);
    this._NgControlStatus_15_9.checkHost(this,this,this._el_15,throwOnChange);
    this._RequiredValidator_20_4.checkHost(this,this,this._el_20,throwOnChange);
    this._NgControlStatus_20_9.checkHost(this,this,this._el_20,throwOnChange);
    this._RequiredValidator_25_4.checkHost(this,this,this._el_25,throwOnChange);
    this._NgControlStatus_25_9.checkHost(this,this,this._el_25,throwOnChange);
    this._RouterLinkWithHref_30_3.checkHost(this,this,this._el_30,throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_10_7.ngOnDestroy();
    this._NgModel_15_7.ngOnDestroy();
    this._NgModel_20_7.ngOnDestroy();
    this._NgModel_25_7.ngOnDestroy();
    this._RouterLinkWithHref_30_3.ngOnDestroy();
    this._NgForm_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onSubmit(this._NgForm_2_3.context)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_10(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_10_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_15_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_20_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_25(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_25_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_30(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_30_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_TimetableSignupComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TimetableSignupComponent,{});
export class View_TimetableSignupComponent0 extends import1.AppView<import0.TimetableSignupComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import30.Wrapper_NgIf;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableSignupComponent0,renderType_TimetableSignupComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import31.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import30.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import31.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import32.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:boolean = !this.context.isUserLoggedIn;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_TimetableSignupComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}