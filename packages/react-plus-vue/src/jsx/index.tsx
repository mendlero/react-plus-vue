import { ReactNode, createElement } from 'react';

const vIfFallback = null;

interface AdditionalReactVueComponentProps {
  vIf?: boolean;
  vIfn?: boolean;
}

type ReactVueComponent<T> = (
  props: T & AdditionalReactVueComponentProps,
) => ReactNode;

function ReactVueComponentFactory<T>(
  originalComponent: (props: T) => ReactNode,
): ReactVueComponent<T> {
  return function Component({
    vIf,
    vIfn,
    ...restProps
  }: T & AdditionalReactVueComponentProps) {
    if (vIf === false || vIfn === true) return vIfFallback;

    return originalComponent(restProps as T);
  };
}

function ReactVueComponentFromName<T extends keyof JSX.IntrinsicElements>(
  element: T,
) {
  return ReactVueComponentFactory<JSX.IntrinsicElements[T]>(props => {
    return createElement(element, props);
  });
}

// HTML
export const Va = ReactVueComponentFromName('a');
export const Vabbr = ReactVueComponentFromName('abbr');
export const Vaddress = ReactVueComponentFromName('address');
export const Varea = ReactVueComponentFromName('area');
export const Varticle = ReactVueComponentFromName('article');
export const Vaside = ReactVueComponentFromName('aside');
export const Vaudio = ReactVueComponentFromName('audio');
export const Vb = ReactVueComponentFromName('b');
export const Vbase = ReactVueComponentFromName('base');
export const Vbdi = ReactVueComponentFromName('bdi');
export const Vbdo = ReactVueComponentFromName('bdo');
export const Vbig = ReactVueComponentFromName('big');
export const Vblockquote = ReactVueComponentFromName('blockquote');
export const Vbody = ReactVueComponentFromName('body');
export const Vbr = ReactVueComponentFromName('br');
export const Vbutton = ReactVueComponentFromName('button');
export const Vcanvas = ReactVueComponentFromName('canvas');
export const Vcaption = ReactVueComponentFromName('caption');
export const Vcenter = ReactVueComponentFromName('center');
export const Vcite = ReactVueComponentFromName('cite');
export const Vcode = ReactVueComponentFromName('code');
export const Vcol = ReactVueComponentFromName('col');
export const Vcolgroup = ReactVueComponentFromName('colgroup');
export const Vdata = ReactVueComponentFromName('data');
export const Vdatalist = ReactVueComponentFromName('datalist');
export const Vdd = ReactVueComponentFromName('dd');
export const Vdel = ReactVueComponentFromName('del');
export const Vdetails = ReactVueComponentFromName('details');
export const Vdfn = ReactVueComponentFromName('dfn');
export const Vdialog = ReactVueComponentFromName('dialog');
export const Vdiv = ReactVueComponentFromName('div');
export const Vdl = ReactVueComponentFromName('dl');
export const Vdt = ReactVueComponentFromName('dt');
export const Vem = ReactVueComponentFromName('em');
export const Vembed = ReactVueComponentFromName('embed');
export const Vfieldset = ReactVueComponentFromName('fieldset');
export const Vfigcaption = ReactVueComponentFromName('figcaption');
export const Vfigure = ReactVueComponentFromName('figure');
export const Vfooter = ReactVueComponentFromName('footer');
export const Vform = ReactVueComponentFromName('form');
export const Vh1 = ReactVueComponentFromName('h1');
export const Vh2 = ReactVueComponentFromName('h2');
export const Vh3 = ReactVueComponentFromName('h3');
export const Vh4 = ReactVueComponentFromName('h4');
export const Vh5 = ReactVueComponentFromName('h5');
export const Vh6 = ReactVueComponentFromName('h6');
export const Vhead = ReactVueComponentFromName('head');
export const Vheader = ReactVueComponentFromName('header');
export const Vhgroup = ReactVueComponentFromName('hgroup');
export const Vhr = ReactVueComponentFromName('hr');
export const Vhtml = ReactVueComponentFromName('html');
export const Vi = ReactVueComponentFromName('i');
export const Viframe = ReactVueComponentFromName('iframe');
export const Vimg = ReactVueComponentFromName('img');
export const Vinput = ReactVueComponentFromName('input');
export const Vins = ReactVueComponentFromName('ins');
export const Vkbd = ReactVueComponentFromName('kbd');
export const Vkeygen = ReactVueComponentFromName('keygen');
export const Vlabel = ReactVueComponentFromName('label');
export const Vlegend = ReactVueComponentFromName('legend');
export const Vli = ReactVueComponentFromName('li');
export const Vlink = ReactVueComponentFromName('link');
export const Vmain = ReactVueComponentFromName('main');
export const Vmap = ReactVueComponentFromName('map');
export const Vmark = ReactVueComponentFromName('mark');
export const Vmenu = ReactVueComponentFromName('menu');
export const Vmenuitem = ReactVueComponentFromName('menuitem');
export const Vmeta = ReactVueComponentFromName('meta');
export const Vmeter = ReactVueComponentFromName('meter');
export const Vnav = ReactVueComponentFromName('nav');
export const Vnoindex = ReactVueComponentFromName('noindex');
export const Vnoscript = ReactVueComponentFromName('noscript');
export const Vobject = ReactVueComponentFromName('object');
export const Vol = ReactVueComponentFromName('ol');
export const Voptgroup = ReactVueComponentFromName('optgroup');
export const Voption = ReactVueComponentFromName('option');
export const Voutput = ReactVueComponentFromName('output');
export const Vp = ReactVueComponentFromName('p');
export const Vparam = ReactVueComponentFromName('param');
export const Vpicture = ReactVueComponentFromName('picture');
export const Vpre = ReactVueComponentFromName('pre');
export const Vprogress = ReactVueComponentFromName('progress');
export const Vq = ReactVueComponentFromName('q');
export const Vrp = ReactVueComponentFromName('rp');
export const Vrt = ReactVueComponentFromName('rt');
export const Vruby = ReactVueComponentFromName('ruby');
export const Vs = ReactVueComponentFromName('s');
export const Vsamp = ReactVueComponentFromName('samp');
export const Vsearch = ReactVueComponentFromName('search');
export const Vslot = ReactVueComponentFromName('slot');
export const Vscript = ReactVueComponentFromName('script');
export const Vsection = ReactVueComponentFromName('section');
export const Vselect = ReactVueComponentFromName('select');
export const Vsmall = ReactVueComponentFromName('small');
export const Vsource = ReactVueComponentFromName('source');
export const Vspan = ReactVueComponentFromName('span');
export const Vstrong = ReactVueComponentFromName('strong');
export const Vstyle = ReactVueComponentFromName('style');
export const Vsub = ReactVueComponentFromName('sub');
export const Vsummary = ReactVueComponentFromName('summary');
export const Vsup = ReactVueComponentFromName('sup');
export const Vtable = ReactVueComponentFromName('table');
export const Vtemplate = ReactVueComponentFromName('template');
export const Vtbody = ReactVueComponentFromName('tbody');
export const Vtd = ReactVueComponentFromName('td');
export const Vtextarea = ReactVueComponentFromName('textarea');
export const Vtfoot = ReactVueComponentFromName('tfoot');
export const Vth = ReactVueComponentFromName('th');
export const Vthead = ReactVueComponentFromName('thead');
export const Vtime = ReactVueComponentFromName('time');
export const Vtitle = ReactVueComponentFromName('title');
export const Vtr = ReactVueComponentFromName('tr');
export const Vtrack = ReactVueComponentFromName('track');
export const Vu = ReactVueComponentFromName('u');
export const Vul = ReactVueComponentFromName('ul');
export const Vvar = ReactVueComponentFromName('var');
export const Vvideo = ReactVueComponentFromName('video');
export const Vwbr = ReactVueComponentFromName('wbr');
export const Vwebview = ReactVueComponentFromName('webview');

// SVG
export const Vsvg = ReactVueComponentFromName('svg');

export const Vanimate = ReactVueComponentFromName('animate');
export const VanimateMotion = ReactVueComponentFromName('animateMotion');
export const VanimateTransform = ReactVueComponentFromName('animateTransform');
export const Vcircle = ReactVueComponentFromName('circle');
export const VclipPath = ReactVueComponentFromName('clipPath');
export const Vdefs = ReactVueComponentFromName('defs');
export const Vdesc = ReactVueComponentFromName('desc');
export const Vellipse = ReactVueComponentFromName('ellipse');
export const VfeBlend = ReactVueComponentFromName('feBlend');
export const VfeColorMatrix = ReactVueComponentFromName('feColorMatrix');
export const VfeComponentTransfer = ReactVueComponentFromName(
  'feComponentTransfer',
);
export const VfeComposite = ReactVueComponentFromName('feComposite');
export const VfeConvolveMatrix = ReactVueComponentFromName('feConvolveMatrix');
export const VfeDiffuseLighting =
  ReactVueComponentFromName('feDiffuseLighting');
export const VfeDisplacementMap =
  ReactVueComponentFromName('feDisplacementMap');
export const VfeDistantLight = ReactVueComponentFromName('feDistantLight');
export const VfeDropShadow = ReactVueComponentFromName('feDropShadow');
export const VfeFlood = ReactVueComponentFromName('feFlood');
export const VfeFuncA = ReactVueComponentFromName('feFuncA');
export const VfeFuncB = ReactVueComponentFromName('feFuncB');
export const VfeFuncG = ReactVueComponentFromName('feFuncG');
export const VfeFuncR = ReactVueComponentFromName('feFuncR');
export const VfeGaussianBlur = ReactVueComponentFromName('feGaussianBlur');
export const VfeImage = ReactVueComponentFromName('feImage');
export const VfeMerge = ReactVueComponentFromName('feMerge');
export const VfeMergeNode = ReactVueComponentFromName('feMergeNode');
export const VfeMorphology = ReactVueComponentFromName('feMorphology');
export const VfeOffset = ReactVueComponentFromName('feOffset');
export const VfePointLight = ReactVueComponentFromName('fePointLight');
export const VfeSpecularLighting =
  ReactVueComponentFromName('feSpecularLighting');
export const VfeSpotLight = ReactVueComponentFromName('feSpotLight');
export const VfeTile = ReactVueComponentFromName('feTile');
export const VfeTurbulence = ReactVueComponentFromName('feTurbulence');
export const Vfilter = ReactVueComponentFromName('filter');
export const VforeignObject = ReactVueComponentFromName('foreignObject');
export const Vg = ReactVueComponentFromName('g');
export const Vimage = ReactVueComponentFromName('image');
export const Vline = ReactVueComponentFromName('line');
export const VlinearGradient = ReactVueComponentFromName('linearGradient');
export const Vmarker = ReactVueComponentFromName('marker');
export const Vmask = ReactVueComponentFromName('mask');
export const Vmetadata = ReactVueComponentFromName('metadata');
export const Vmpath = ReactVueComponentFromName('mpath');
export const Vpath = ReactVueComponentFromName('path');
export const Vpattern = ReactVueComponentFromName('pattern');
export const Vpolygon = ReactVueComponentFromName('polygon');
export const Vpolyline = ReactVueComponentFromName('polyline');
export const VradialGradient = ReactVueComponentFromName('radialGradient');
export const Vrect = ReactVueComponentFromName('rect');
export const Vstop = ReactVueComponentFromName('stop');
export const Vswitch = ReactVueComponentFromName('switch');
export const Vsymbol = ReactVueComponentFromName('symbol');
export const Vtext = ReactVueComponentFromName('text');
export const VtextPath = ReactVueComponentFromName('textPath');
export const Vtspan = ReactVueComponentFromName('tspan');
export const Vuse = ReactVueComponentFromName('use');
export const Vview = ReactVueComponentFromName('view');
