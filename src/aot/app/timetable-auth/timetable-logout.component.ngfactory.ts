import * as import0 from '../../../app/timetable-auth/timetable-logout.component';
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
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/forms/src/directives/ng_form';
import * as import14 from '@angular/forms/src/directives/control_container';
import * as import15 from '@angular/forms/src/directives/ng_control_status';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_if';
export class Wrapper_TimetableLogoutComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableLogoutComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TimetableLogoutComponent(p0,p1);
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
var renderType_TimetableLogoutComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableLogoutComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableLogoutComponent>;
  _TimetableLogoutComponent_0_3:Wrapper_TimetableLogoutComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableLogoutComponent_Host0,renderType_TimetableLogoutComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-logout',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableLogoutComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableLogoutComponent_0_3 = new Wrapper_TimetableLogoutComponent(this.injectorGet(import8.TimetableAuthService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._TimetableLogoutComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableLogoutComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableLogoutComponent) && (0 === requestNodeIndex))) { return this._TimetableLogoutComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableLogoutComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableLogoutComponentNgFactory:import7.ComponentFactory<import0.TimetableLogoutComponent> = new import7.ComponentFactory<import0.TimetableLogoutComponent>('timetable-logout',View_TimetableLogoutComponent_Host0,import0.TimetableLogoutComponent);
const styles_TimetableLogoutComponent:any[] = ['body[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #eee;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n.form-signin[_ngcontent-%COMP%]   input[type="email"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin[_ngcontent-%COMP%]   input[type="password"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}'];
class View_TimetableLogoutComponent1 extends import1.AppView<any> {
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
  _text_7:any;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_TimetableLogoutComponent1,renderType_TimetableLogoutComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'form',new import3.InlineArray2(2,'class','form-logout'),(null as any));
    this._NgForm_2_3 = new import10.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_2_4 = this._NgForm_2_3.context;
    this._NgControlStatusGroup_2_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'button',new import3.InlineArray4(4,'class','btn btn-danger pull-right','type','submit'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Log Out!',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n    \n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_2));
    this._NgForm_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.NgForm) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgForm_2_3.context; }
    if (((token === import14.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._ControlContainer_2_4; }
    if (((token === import15.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgControlStatusGroup_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatusGroup_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatusGroup_2_5.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
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
}
var renderType_TimetableLogoutComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TimetableLogoutComponent,{});
export class View_TimetableLogoutComponent0 extends import1.AppView<import0.TimetableLogoutComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import12.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import16.Wrapper_NgIf;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableLogoutComponent0,renderType_TimetableLogoutComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import12.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import17.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import16.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import18.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.isUserLoggedIn;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_TimetableLogoutComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}