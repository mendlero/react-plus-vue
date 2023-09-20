const vIfFallback = null;

interface AdditionalReactVueComponentProps {
  vIf?: boolean;
}

type ReactVueComponent<T> = (
  props: T & AdditionalReactVueComponentProps
) => React.ReactNode;

function ReactVueComponentFactory<T>(
  originalComponent: (props: T) => React.ReactNode
): ReactVueComponent<T> {
  return function Component({
    vIf,
    ...restProps
  }: T & AdditionalReactVueComponentProps) {
    if (vIf === false) return vIfFallback;

    return originalComponent(restProps as T);
  };
}

function ReactVueComponentFromName<T extends keyof JSX.IntrinsicElements>(
  element: T
) {
  return ReactVueComponentFactory<React.HTMLProps<JSX.IntrinsicElements[T]>>(
    props => {
      return React.createElement(element, props);
    }
  );
}

// HTML
const Va = ReactVueComponentFromName('a');
const Vabbr = ReactVueComponentFromName('abbr');
const Vaddress = ReactVueComponentFromName('address');
const Varea = ReactVueComponentFromName('area');
const Varticle = ReactVueComponentFromName('article');
const Vaside = ReactVueComponentFromName('aside');
const Vaudio = ReactVueComponentFromName('audio');
const Vb = ReactVueComponentFromName('b');
const Vbase = ReactVueComponentFromName('base');
const Vbdi = ReactVueComponentFromName('bdi');
const Vbdo = ReactVueComponentFromName('bdo');
const Vbig = ReactVueComponentFromName('big');
const Vblockquote = ReactVueComponentFromName('blockquote');
const Vbody = ReactVueComponentFromName('body');
const Vbr = ReactVueComponentFromName('br');
const Vbutton = ReactVueComponentFromName('button');
const Vcanvas = ReactVueComponentFromName('canvas');
const Vcaption = ReactVueComponentFromName('caption');
const Vcenter = ReactVueComponentFromName('center');
const Vcite = ReactVueComponentFromName('cite');
const Vcode = ReactVueComponentFromName('code');
const Vcol = ReactVueComponentFromName('col');
const Vcolgroup = ReactVueComponentFromName('colgroup');
const Vdata = ReactVueComponentFromName('data');
const Vdatalist = ReactVueComponentFromName('datalist');
const Vdd = ReactVueComponentFromName('dd');
const Vdel = ReactVueComponentFromName('del');
const Vdetails = ReactVueComponentFromName('details');
const Vdfn = ReactVueComponentFromName('dfn');
const Vdialog = ReactVueComponentFromName('dialog');
const Vdiv = ReactVueComponentFromName('div');
const Vdl = ReactVueComponentFromName('dl');
const Vdt = ReactVueComponentFromName('dt');
const Vem = ReactVueComponentFromName('em');
const Vembed = ReactVueComponentFromName('embed');
const Vfieldset = ReactVueComponentFromName('fieldset');
const Vfigcaption = ReactVueComponentFromName('figcaption');
const Vfigure = ReactVueComponentFromName('figure');
const Vfooter = ReactVueComponentFromName('footer');
const Vform = ReactVueComponentFromName('form');
const Vh1 = ReactVueComponentFromName('h1');
const Vh2 = ReactVueComponentFromName('h2');
const Vh3 = ReactVueComponentFromName('h3');
const Vh4 = ReactVueComponentFromName('h4');
const Vh5 = ReactVueComponentFromName('h5');
const Vh6 = ReactVueComponentFromName('h6');
const Vhead = ReactVueComponentFromName('head');
const Vheader = ReactVueComponentFromName('header');
const Vhgroup = ReactVueComponentFromName('hgroup');
const Vhr = ReactVueComponentFromName('hr');
const Vhtml = ReactVueComponentFromName('html');
const Vi = ReactVueComponentFromName('i');
const Viframe = ReactVueComponentFromName('iframe');
const Vimg = ReactVueComponentFromName('img');
const Vinput = ReactVueComponentFromName('input');
const Vins = ReactVueComponentFromName('ins');
const Vkbd = ReactVueComponentFromName('kbd');
const Vkeygen = ReactVueComponentFromName('keygen');
const Vlabel = ReactVueComponentFromName('label');
const Vlegend = ReactVueComponentFromName('legend');
const Vli = ReactVueComponentFromName('li');
const Vlink = ReactVueComponentFromName('link');
const Vmain = ReactVueComponentFromName('main');
const Vmap = ReactVueComponentFromName('map');
const Vmark = ReactVueComponentFromName('mark');
const Vmenu = ReactVueComponentFromName('menu');
const Vmenuitem = ReactVueComponentFromName('menuitem');
const Vmeta = ReactVueComponentFromName('meta');
const Vmeter = ReactVueComponentFromName('meter');
const Vnav = ReactVueComponentFromName('nav');
const Vnoindex = ReactVueComponentFromName('noindex');
const Vnoscript = ReactVueComponentFromName('noscript');
const Vobject = ReactVueComponentFromName('object');
const Vol = ReactVueComponentFromName('ol');
const Voptgroup = ReactVueComponentFromName('optgroup');
const Voption = ReactVueComponentFromName('option');
const Voutput = ReactVueComponentFromName('output');
const Vp = ReactVueComponentFromName('p');
const Vparam = ReactVueComponentFromName('param');
const Vpicture = ReactVueComponentFromName('picture');
const Vpre = ReactVueComponentFromName('pre');
const Vprogress = ReactVueComponentFromName('progress');
const Vq = ReactVueComponentFromName('q');
const Vrp = ReactVueComponentFromName('rp');
const Vrt = ReactVueComponentFromName('rt');
const Vruby = ReactVueComponentFromName('ruby');
const Vs = ReactVueComponentFromName('s');
const Vsamp = ReactVueComponentFromName('samp');
const Vsearch = ReactVueComponentFromName('search');
const Vslot = ReactVueComponentFromName('slot');
const Vscript = ReactVueComponentFromName('script');
const Vsection = ReactVueComponentFromName('section');
const Vselect = ReactVueComponentFromName('select');
const Vsmall = ReactVueComponentFromName('small');
const Vsource = ReactVueComponentFromName('source');
const Vspan = ReactVueComponentFromName('span');
const Vstrong = ReactVueComponentFromName('strong');
const Vstyle = ReactVueComponentFromName('style');
const Vsub = ReactVueComponentFromName('sub');
const Vsummary = ReactVueComponentFromName('summary');
const Vsup = ReactVueComponentFromName('sup');
const Vtable = ReactVueComponentFromName('table');
const Vtemplate = ReactVueComponentFromName('template');
const Vtbody = ReactVueComponentFromName('tbody');
const Vtd = ReactVueComponentFromName('td');
const Vtextarea = ReactVueComponentFromName('textarea');
const Vtfoot = ReactVueComponentFromName('tfoot');
const Vth = ReactVueComponentFromName('th');
const Vthead = ReactVueComponentFromName('thead');
const Vtime = ReactVueComponentFromName('time');
const Vtitle = ReactVueComponentFromName('title');
const Vtr = ReactVueComponentFromName('tr');
const Vtrack = ReactVueComponentFromName('track');
const Vu = ReactVueComponentFromName('u');
const Vul = ReactVueComponentFromName('ul');
const Vvar = ReactVueComponentFromName('var');
const Vvideo = ReactVueComponentFromName('video');
const Vwbr = ReactVueComponentFromName('wbr');
const Vwebview = ReactVueComponentFromName('webview');

// SVG
const Vsvg = ReactVueComponentFromName('svg');

const Vanimate = ReactVueComponentFromName('animate');
const VanimateMotion = ReactVueComponentFromName('animateMotion');
const VanimateTransform = ReactVueComponentFromName('animateTransform');
const Vcircle = ReactVueComponentFromName('circle');
const VclipPath = ReactVueComponentFromName('clipPath');
const Vdefs = ReactVueComponentFromName('defs');
const Vdesc = ReactVueComponentFromName('desc');
const Vellipse = ReactVueComponentFromName('ellipse');
const VfeBlend = ReactVueComponentFromName('feBlend');
const VfeColorMatrix = ReactVueComponentFromName('feColorMatrix');
const VfeComponentTransfer = ReactVueComponentFromName('feComponentTransfer');
const VfeComposite = ReactVueComponentFromName('feComposite');
const VfeConvolveMatrix = ReactVueComponentFromName('feConvolveMatrix');
const VfeDiffuseLighting = ReactVueComponentFromName('feDiffuseLighting');
const VfeDisplacementMap = ReactVueComponentFromName('feDisplacementMap');
const VfeDistantLight = ReactVueComponentFromName('feDistantLight');
const VfeDropShadow = ReactVueComponentFromName('feDropShadow');
const VfeFlood = ReactVueComponentFromName('feFlood');
const VfeFuncA = ReactVueComponentFromName('feFuncA');
const VfeFuncB = ReactVueComponentFromName('feFuncB');
const VfeFuncG = ReactVueComponentFromName('feFuncG');
const VfeFuncR = ReactVueComponentFromName('feFuncR');
const VfeGaussianBlur = ReactVueComponentFromName('feGaussianBlur');
const VfeImage = ReactVueComponentFromName('feImage');
const VfeMerge = ReactVueComponentFromName('feMerge');
const VfeMergeNode = ReactVueComponentFromName('feMergeNode');
const VfeMorphology = ReactVueComponentFromName('feMorphology');
const VfeOffset = ReactVueComponentFromName('feOffset');
const VfePointLight = ReactVueComponentFromName('fePointLight');
const VfeSpecularLighting = ReactVueComponentFromName('feSpecularLighting');
const VfeSpotLight = ReactVueComponentFromName('feSpotLight');
const VfeTile = ReactVueComponentFromName('feTile');
const VfeTurbulence = ReactVueComponentFromName('feTurbulence');
const Vfilter = ReactVueComponentFromName('filter');
const VforeignObject = ReactVueComponentFromName('foreignObject');
const Vg = ReactVueComponentFromName('g');
const Vimage = ReactVueComponentFromName('image');
const Vline = ReactVueComponentFromName('line');
const VlinearGradient = ReactVueComponentFromName('linearGradient');
const Vmarker = ReactVueComponentFromName('marker');
const Vmask = ReactVueComponentFromName('mask');
const Vmetadata = ReactVueComponentFromName('metadata');
const Vmpath = ReactVueComponentFromName('mpath');
const Vpath = ReactVueComponentFromName('path');
const Vpattern = ReactVueComponentFromName('pattern');
const Vpolygon = ReactVueComponentFromName('polygon');
const Vpolyline = ReactVueComponentFromName('polyline');
const VradialGradient = ReactVueComponentFromName('radialGradient');
const Vrect = ReactVueComponentFromName('rect');
const Vstop = ReactVueComponentFromName('stop');
const Vswitch = ReactVueComponentFromName('switch');
const Vsymbol = ReactVueComponentFromName('symbol');
const Vtext = ReactVueComponentFromName('text');
const VtextPath = ReactVueComponentFromName('textPath');
const Vtspan = ReactVueComponentFromName('tspan');
const Vuse = ReactVueComponentFromName('use');
const Vview = ReactVueComponentFromName('view');
