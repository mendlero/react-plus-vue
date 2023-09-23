const __vIfFallback = null;

interface __AdditionalReactVueComponentProps {
  vIf?: boolean;
  vIfn?: boolean;
}

type __ReactVueComponent<T> = (
  props: T & __AdditionalReactVueComponentProps
) => React.ReactNode;

function __ReactVueComponentFactory<T>(
  originalComponent: (props: T) => React.ReactNode
): __ReactVueComponent<T> {
  return function Component({
    vIf,
    vIfn,
    ...restProps
  }: T & __AdditionalReactVueComponentProps) {
    if (vIf === false || vIfn === true) return __vIfFallback;

    return originalComponent(restProps as T);
  };
}

function __ReactVueComponentFromName<T extends keyof JSX.IntrinsicElements>(
  element: T
) {
  return __ReactVueComponentFactory<JSX.IntrinsicElements[T]>(props => {
    return React.createElement(element, props);
  });
}

// HTML
const Va = __ReactVueComponentFromName('a');
const Vabbr = __ReactVueComponentFromName('abbr');
const Vaddress = __ReactVueComponentFromName('address');
const Varea = __ReactVueComponentFromName('area');
const Varticle = __ReactVueComponentFromName('article');
const Vaside = __ReactVueComponentFromName('aside');
const Vaudio = __ReactVueComponentFromName('audio');
const Vb = __ReactVueComponentFromName('b');
const Vbase = __ReactVueComponentFromName('base');
const Vbdi = __ReactVueComponentFromName('bdi');
const Vbdo = __ReactVueComponentFromName('bdo');
const Vbig = __ReactVueComponentFromName('big');
const Vblockquote = __ReactVueComponentFromName('blockquote');
const Vbody = __ReactVueComponentFromName('body');
const Vbr = __ReactVueComponentFromName('br');
const Vbutton = __ReactVueComponentFromName('button');
const Vcanvas = __ReactVueComponentFromName('canvas');
const Vcaption = __ReactVueComponentFromName('caption');
const Vcenter = __ReactVueComponentFromName('center');
const Vcite = __ReactVueComponentFromName('cite');
const Vcode = __ReactVueComponentFromName('code');
const Vcol = __ReactVueComponentFromName('col');
const Vcolgroup = __ReactVueComponentFromName('colgroup');
const Vdata = __ReactVueComponentFromName('data');
const Vdatalist = __ReactVueComponentFromName('datalist');
const Vdd = __ReactVueComponentFromName('dd');
const Vdel = __ReactVueComponentFromName('del');
const Vdetails = __ReactVueComponentFromName('details');
const Vdfn = __ReactVueComponentFromName('dfn');
const Vdialog = __ReactVueComponentFromName('dialog');
const Vdiv = __ReactVueComponentFromName('div');
const Vdl = __ReactVueComponentFromName('dl');
const Vdt = __ReactVueComponentFromName('dt');
const Vem = __ReactVueComponentFromName('em');
const Vembed = __ReactVueComponentFromName('embed');
const Vfieldset = __ReactVueComponentFromName('fieldset');
const Vfigcaption = __ReactVueComponentFromName('figcaption');
const Vfigure = __ReactVueComponentFromName('figure');
const Vfooter = __ReactVueComponentFromName('footer');
const Vform = __ReactVueComponentFromName('form');
const Vh1 = __ReactVueComponentFromName('h1');
const Vh2 = __ReactVueComponentFromName('h2');
const Vh3 = __ReactVueComponentFromName('h3');
const Vh4 = __ReactVueComponentFromName('h4');
const Vh5 = __ReactVueComponentFromName('h5');
const Vh6 = __ReactVueComponentFromName('h6');
const Vhead = __ReactVueComponentFromName('head');
const Vheader = __ReactVueComponentFromName('header');
const Vhgroup = __ReactVueComponentFromName('hgroup');
const Vhr = __ReactVueComponentFromName('hr');
const Vhtml = __ReactVueComponentFromName('html');
const Vi = __ReactVueComponentFromName('i');
const Viframe = __ReactVueComponentFromName('iframe');
const Vimg = __ReactVueComponentFromName('img');
const Vinput = __ReactVueComponentFromName('input');
const Vins = __ReactVueComponentFromName('ins');
const Vkbd = __ReactVueComponentFromName('kbd');
const Vkeygen = __ReactVueComponentFromName('keygen');
const Vlabel = __ReactVueComponentFromName('label');
const Vlegend = __ReactVueComponentFromName('legend');
const Vli = __ReactVueComponentFromName('li');
const Vlink = __ReactVueComponentFromName('link');
const Vmain = __ReactVueComponentFromName('main');
const Vmap = __ReactVueComponentFromName('map');
const Vmark = __ReactVueComponentFromName('mark');
const Vmenu = __ReactVueComponentFromName('menu');
const Vmenuitem = __ReactVueComponentFromName('menuitem');
const Vmeta = __ReactVueComponentFromName('meta');
const Vmeter = __ReactVueComponentFromName('meter');
const Vnav = __ReactVueComponentFromName('nav');
const Vnoindex = __ReactVueComponentFromName('noindex');
const Vnoscript = __ReactVueComponentFromName('noscript');
const Vobject = __ReactVueComponentFromName('object');
const Vol = __ReactVueComponentFromName('ol');
const Voptgroup = __ReactVueComponentFromName('optgroup');
const Voption = __ReactVueComponentFromName('option');
const Voutput = __ReactVueComponentFromName('output');
const Vp = __ReactVueComponentFromName('p');
const Vparam = __ReactVueComponentFromName('param');
const Vpicture = __ReactVueComponentFromName('picture');
const Vpre = __ReactVueComponentFromName('pre');
const Vprogress = __ReactVueComponentFromName('progress');
const Vq = __ReactVueComponentFromName('q');
const Vrp = __ReactVueComponentFromName('rp');
const Vrt = __ReactVueComponentFromName('rt');
const Vruby = __ReactVueComponentFromName('ruby');
const Vs = __ReactVueComponentFromName('s');
const Vsamp = __ReactVueComponentFromName('samp');
const Vsearch = __ReactVueComponentFromName('search');
const Vslot = __ReactVueComponentFromName('slot');
const Vscript = __ReactVueComponentFromName('script');
const Vsection = __ReactVueComponentFromName('section');
const Vselect = __ReactVueComponentFromName('select');
const Vsmall = __ReactVueComponentFromName('small');
const Vsource = __ReactVueComponentFromName('source');
const Vspan = __ReactVueComponentFromName('span');
const Vstrong = __ReactVueComponentFromName('strong');
const Vstyle = __ReactVueComponentFromName('style');
const Vsub = __ReactVueComponentFromName('sub');
const Vsummary = __ReactVueComponentFromName('summary');
const Vsup = __ReactVueComponentFromName('sup');
const Vtable = __ReactVueComponentFromName('table');
const Vtemplate = __ReactVueComponentFromName('template');
const Vtbody = __ReactVueComponentFromName('tbody');
const Vtd = __ReactVueComponentFromName('td');
const Vtextarea = __ReactVueComponentFromName('textarea');
const Vtfoot = __ReactVueComponentFromName('tfoot');
const Vth = __ReactVueComponentFromName('th');
const Vthead = __ReactVueComponentFromName('thead');
const Vtime = __ReactVueComponentFromName('time');
const Vtitle = __ReactVueComponentFromName('title');
const Vtr = __ReactVueComponentFromName('tr');
const Vtrack = __ReactVueComponentFromName('track');
const Vu = __ReactVueComponentFromName('u');
const Vul = __ReactVueComponentFromName('ul');
const Vvar = __ReactVueComponentFromName('var');
const Vvideo = __ReactVueComponentFromName('video');
const Vwbr = __ReactVueComponentFromName('wbr');
const Vwebview = __ReactVueComponentFromName('webview');

// SVG
const Vsvg = __ReactVueComponentFromName('svg');

const Vanimate = __ReactVueComponentFromName('animate');
const VanimateMotion = __ReactVueComponentFromName('animateMotion');
const VanimateTransform = __ReactVueComponentFromName('animateTransform');
const Vcircle = __ReactVueComponentFromName('circle');
const VclipPath = __ReactVueComponentFromName('clipPath');
const Vdefs = __ReactVueComponentFromName('defs');
const Vdesc = __ReactVueComponentFromName('desc');
const Vellipse = __ReactVueComponentFromName('ellipse');
const VfeBlend = __ReactVueComponentFromName('feBlend');
const VfeColorMatrix = __ReactVueComponentFromName('feColorMatrix');
const VfeComponentTransfer = __ReactVueComponentFromName('feComponentTransfer');
const VfeComposite = __ReactVueComponentFromName('feComposite');
const VfeConvolveMatrix = __ReactVueComponentFromName('feConvolveMatrix');
const VfeDiffuseLighting = __ReactVueComponentFromName('feDiffuseLighting');
const VfeDisplacementMap = __ReactVueComponentFromName('feDisplacementMap');
const VfeDistantLight = __ReactVueComponentFromName('feDistantLight');
const VfeDropShadow = __ReactVueComponentFromName('feDropShadow');
const VfeFlood = __ReactVueComponentFromName('feFlood');
const VfeFuncA = __ReactVueComponentFromName('feFuncA');
const VfeFuncB = __ReactVueComponentFromName('feFuncB');
const VfeFuncG = __ReactVueComponentFromName('feFuncG');
const VfeFuncR = __ReactVueComponentFromName('feFuncR');
const VfeGaussianBlur = __ReactVueComponentFromName('feGaussianBlur');
const VfeImage = __ReactVueComponentFromName('feImage');
const VfeMerge = __ReactVueComponentFromName('feMerge');
const VfeMergeNode = __ReactVueComponentFromName('feMergeNode');
const VfeMorphology = __ReactVueComponentFromName('feMorphology');
const VfeOffset = __ReactVueComponentFromName('feOffset');
const VfePointLight = __ReactVueComponentFromName('fePointLight');
const VfeSpecularLighting = __ReactVueComponentFromName('feSpecularLighting');
const VfeSpotLight = __ReactVueComponentFromName('feSpotLight');
const VfeTile = __ReactVueComponentFromName('feTile');
const VfeTurbulence = __ReactVueComponentFromName('feTurbulence');
const Vfilter = __ReactVueComponentFromName('filter');
const VforeignObject = __ReactVueComponentFromName('foreignObject');
const Vg = __ReactVueComponentFromName('g');
const Vimage = __ReactVueComponentFromName('image');
const Vline = __ReactVueComponentFromName('line');
const VlinearGradient = __ReactVueComponentFromName('linearGradient');
const Vmarker = __ReactVueComponentFromName('marker');
const Vmask = __ReactVueComponentFromName('mask');
const Vmetadata = __ReactVueComponentFromName('metadata');
const Vmpath = __ReactVueComponentFromName('mpath');
const Vpath = __ReactVueComponentFromName('path');
const Vpattern = __ReactVueComponentFromName('pattern');
const Vpolygon = __ReactVueComponentFromName('polygon');
const Vpolyline = __ReactVueComponentFromName('polyline');
const VradialGradient = __ReactVueComponentFromName('radialGradient');
const Vrect = __ReactVueComponentFromName('rect');
const Vstop = __ReactVueComponentFromName('stop');
const Vswitch = __ReactVueComponentFromName('switch');
const Vsymbol = __ReactVueComponentFromName('symbol');
const Vtext = __ReactVueComponentFromName('text');
const VtextPath = __ReactVueComponentFromName('textPath');
const Vtspan = __ReactVueComponentFromName('tspan');
const Vuse = __ReactVueComponentFromName('use');
const Vview = __ReactVueComponentFromName('view');
