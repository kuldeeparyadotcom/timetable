import * as import0 from '../../../app/timetable-auth/timetable-auth.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-auth/timetable-auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../../app/timetable-auth/timetable-logout.component';
import * as import11 from './timetable-logout.component.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import14 from '@angular/router/src/router_outlet_map';
import * as import15 from '@angular/core/src/linker/component_factory_resolver';
import * as import16 from '@angular/router/src/directives/router_outlet';
export class Wrapper_TimetableAuthComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableAuthComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TimetableAuthComponent(p0,p1);
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
var renderType_TimetableAuthComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableAuthComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableAuthComponent>;
  _TimetableAuthComponent_0_3:Wrapper_TimetableAuthComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableAuthComponent_Host0,renderType_TimetableAuthComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-auth',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableAuthComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableAuthComponent_0_3 = new Wrapper_TimetableAuthComponent(this.injectorGet(import8.TimetableAuthService,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._TimetableAuthComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableAuthComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableAuthComponent) && (0 === requestNodeIndex))) { return this._TimetableAuthComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableAuthComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableAuthComponentNgFactory:import7.ComponentFactory<import0.TimetableAuthComponent> = new import7.ComponentFactory<import0.TimetableAuthComponent>('timetable-auth',View_TimetableAuthComponent_Host0,import0.TimetableAuthComponent);
const styles_TimetableAuthComponent:any[] = ([] as any[]);
var renderType_TimetableAuthComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableAuthComponent,{});
export class View_TimetableAuthComponent0 extends import1.AppView<import0.TimetableAuthComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import10.TimetableLogoutComponent>;
  _TimetableLogoutComponent_2_3:import11.Wrapper_TimetableLogoutComponent;
  _text_3:any;
  _el_4:any;
  /*private*/ _vc_4:import12.ViewContainer;
  _RouterOutlet_4_5:import13.Wrapper_RouterOutlet;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableAuthComponent0,renderType_TimetableAuthComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'timetable-logout',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import11.View_TimetableLogoutComponent0(this.viewUtils,this,2,this._el_2);
    this._TimetableLogoutComponent_2_3 = new import11.Wrapper_TimetableLogoutComponent(this.parentView.injectorGet(import8.TimetableAuthService,this.parentIndex),this.parentView.injectorGet(import9.Router,this.parentIndex));
    this.compView_2.create(this._TimetableLogoutComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_4 = new import12.ViewContainer(4,0,this,this._el_4);
    this._RouterOutlet_4_5 = new import13.Wrapper_RouterOutlet(this.parentView.injectorGet(import14.RouterOutletMap,this.parentIndex),this._vc_4.vcRef,this.parentView.injectorGet(import15.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.TimetableLogoutComponent) && (2 === requestNodeIndex))) { return this._TimetableLogoutComponent_2_3.context; }
    if (((token === import16.RouterOutlet) && (4 === requestNodeIndex))) { return this._RouterOutlet_4_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableLogoutComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterOutlet_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this.compView_2.destroy();
    this._RouterOutlet_4_5.ngOnDestroy();
  }
}