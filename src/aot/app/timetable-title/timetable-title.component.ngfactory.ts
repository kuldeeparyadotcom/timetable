import * as import0 from '../../../app/timetable-title/timetable-title.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/timetable-auth/timetable-auth.service';
import * as import10 from '../../../app/timetable-auth/timetable-logout.component';
import * as import11 from '../timetable-auth/timetable-logout.component.ngfactory';
import * as import12 from '@angular/router/src/router';
export class Wrapper_TimetableTitleComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableTitleComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableTitleComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_isUserLoggedIn(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.isUserLoggedIn = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_TimetableTitleComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableTitleComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TimetableTitleComponent>;
  _TimetableTitleComponent_0_3:Wrapper_TimetableTitleComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTitleComponent_Host0,renderType_TimetableTitleComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-title',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableTitleComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTitleComponent_0_3 = new Wrapper_TimetableTitleComponent(this.injectorGet(import9.TimetableAuthService,this.parentIndex));
    this.compView_0.create(this._TimetableTitleComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TimetableTitleComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableTitleComponent) && (0 === requestNodeIndex))) { return this._TimetableTitleComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableTitleComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableTitleComponentNgFactory:import8.ComponentFactory<import0.TimetableTitleComponent> = new import8.ComponentFactory<import0.TimetableTitleComponent>('timetable-title',View_TimetableTitleComponent_Host0,import0.TimetableTitleComponent);
const styles_TimetableTitleComponent:any[] = ([] as any[]);
var renderType_TimetableTitleComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_TimetableTitleComponent,{});
export class View_TimetableTitleComponent0 extends import2.AppView<import0.TimetableTitleComponent> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  compView_12:import2.AppView<import10.TimetableLogoutComponent>;
  _TimetableLogoutComponent_12_3:import11.Wrapper_TimetableLogoutComponent;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTitleComponent0,renderType_TimetableTitleComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_20 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','row','style','background-color:white;'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-10'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-2'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'timetable-logout',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_12 = new import11.View_TimetableLogoutComponent0(this.viewUtils,this,12,this._el_12);
    this._TimetableLogoutComponent_12_3 = new import11.Wrapper_TimetableLogoutComponent(this.parentView.injectorGet(import9.TimetableAuthService,this.parentIndex),this.parentView.injectorGet(import12.Router,this.parentIndex));
    this.compView_12.create(this._TimetableLogoutComponent_12_3.context);
    this._text_13 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,parentRenderNode,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.TimetableLogoutComponent) && (12 === requestNodeIndex))) { return this._TimetableLogoutComponent_12_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableLogoutComponent_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    const currVal_20:any = import3.inlineInterpolate(1,' \n             ',this.context.timetable_title,'\n         ');
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setText(this._text_7,currVal_20);
      this._expr_20 = currVal_20;
    }
    this.compView_12.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_12.destroy();
  }
}