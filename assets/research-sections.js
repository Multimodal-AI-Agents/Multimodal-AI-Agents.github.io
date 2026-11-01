import {studies} from './study-videos.js?v=20261101-final-links';
export function createResearchSections(R) {
  const h = (tag,props,...children)=>R.jsxs(tag,children.length?{...props,children}:{...props});
  function FigureOne(){return h('section',{id:'figure-1',className:'research-section'},
    h('h2',{},'1. Marketing-Aligned Multimodal Orchestration System'),
    h('p',{className:'study-description'},'The framework translates marketing objectives into multimodal inputs, screens their alignment, and generates, inspects, and revises videos before deployment.'),
    h('figure',{className:'architecture'},h('a',{href:'./assets/figure1.png?v=20261101-new-figure',target:'_blank',rel:'noopener', 'aria-label':'Open Figure 1 at full size'},h('img',{src:'./assets/figure1.png?v=20261101-new-figure',alt:'Marketing objective, unimodal inputs, alignment screening, video generation, inspection and correction, downstream tasks, and task objectives.'})),h('figcaption',{},'Figure 1. Marketing-aligned multimodal orchestration architecture. Click to view at full size.')));
  }
  function Player({src,language}){return h('div',{className:'stimulus-player'},h('h4',{},language),src&&src.startsWith('https://www.youtube.com/embed/')?h('iframe',{src,title:language+' experimental stimulus',loading:'lazy',allow:'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',referrerPolicy:'strict-origin-when-cross-origin',allowFullScreen:true}):src?h('video',{controls:true,preload:'none',playsInline:true,src,'aria-label':language+' experimental stimulus'}):h('div',{className:'video-unavailable'},'Video not yet available'))}
  function ExperimentVideos(){return h('section',{id:'experimental-stimuli',className:'research-section'},
    h('h2',{},'3. Experimental Stimuli Videos'),...studies.map(study=>h('section',{id:study.id,key:study.id,className:'study-section'},h('h3',{},study.title),h('p',{className:'study-description'},study.description),
      ...(study.groups.length?study.groups.map((group,i)=>h('article',{key:i,className:'stimulus-group'},h('h4',{className:'group-label'},group.label),h('div',{className:'stimulus-pair'},R.jsx(Player,{src:group.en,language:'English version'}),R.jsx(Player,{src:group.zh,language:'Chinese version'})))):[h('div',{className:'stimulus-pair',key:'pending'},R.jsx(Player,{language:'English version'}),R.jsx(Player,{language:'Chinese version'}))]))));}
  return {FigureOne,ExperimentVideos};
}












