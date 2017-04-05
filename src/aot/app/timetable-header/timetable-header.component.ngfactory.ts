import * as import0 from '../../../app/timetable-header/timetable-header.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
import * as import9 from '@angular/core/src/security';
export class Wrapper_TimetableHeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableHeaderComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.TimetableHeaderComponent();
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
var renderType_TimetableHeaderComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableHeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableHeaderComponent>;
  _TimetableHeaderComponent_0_3:Wrapper_TimetableHeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableHeaderComponent_Host0,renderType_TimetableHeaderComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableHeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableHeaderComponent_0_3 = new Wrapper_TimetableHeaderComponent();
    this.compView_0.create(this._TimetableHeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableHeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableHeaderComponent) && (0 === requestNodeIndex))) { return this._TimetableHeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableHeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableHeaderComponentNgFactory:import7.ComponentFactory<import0.TimetableHeaderComponent> = new import7.ComponentFactory<import0.TimetableHeaderComponent>('timetable-header',View_TimetableHeaderComponent_Host0,import0.TimetableHeaderComponent);
const styles_TimetableHeaderComponent:any[] = ([] as any[]);
var renderType_TimetableHeaderComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableHeaderComponent,{});
export class View_TimetableHeaderComponent0 extends import1.AppView<import0.TimetableHeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableHeaderComponent0,renderType_TimetableHeaderComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','page-header'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-sm-12'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'img',new import3.InlineArray8(8,'alt','timetable_header','class','img-rounded','height','150','width','100%'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,' \n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'    \n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8:any = this.context.timetable_header;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import9.SecurityContext.URL,currVal_8));
      this._expr_8 = currVal_8;
    }
  }
}