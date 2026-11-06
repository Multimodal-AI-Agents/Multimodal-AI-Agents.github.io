import {videoLinks} from './video-links-20261101.js?v=20261106-video-migration';
// Temporary video from the supplied upload guide; replace en and zh independently.
const example = ''; 
// Input levels are ordered as text, audio, image.
const conditions = [
  ['Agent', 'High / High / High'],
  ['Gemini', 'High / High / High'],
  ['Gemini', 'High / High / Low'],
  ['Gemini', 'High / Low / High'],
  ['Gemini', 'High / Low / Low'],
  ['Gemini', 'Low / High / High'],
  ['Gemini', 'Low / High / Low'],
  ['Gemini', 'Low / Low / High'],
  ['Gemini', 'Low / Low / Low'],
  ['Human', 'Low / Low / Low']
];
// Displayed condition lists the three input levels; the cover follows the Image level of that same row,
// so the photographed stimulus always matches what the label says.
// Studies 1-2 are labelled Group 1-9 in display order, while the YouTube link keys remain 1 and 9-16.
const excitementKeys = [1, 9, 10, 11, 12, 13, 14, 15, 16];
const modalities = ['Text', 'Audio', 'Image'];
const levelText = levels => levels.split(' / ').map((level,i)=>`${level} ${modalities[i]}`).join(' / ');
function groups(count, excitement = false) {
  const dimension = excitement ? 'excitement' : 'ruggedness';
  return conditions.slice(0,count).map(([source,levels],index)=>{
    const key = excitement ? excitementKeys[index] : index + 1;
    const imageLevel = levels.split(' / ')[2];
    const ext = dimension === 'excitement' && imageLevel === 'High' ? 'jpg' : 'png';
    return {
      label:`Group ${index + 1} · ${source} · ${levelText(levels)}`,
      key,
      cover:`./assets/covers/${dimension}-${imageLevel.toLowerCase()}.${ext}?v=20261102-covers`,
      en:example,
      zh:example
    };
  });
}
export const studies = [
  {id:'study-1', title:'3.1 Study 1: Preregistered Online Experiment', description:'Text, audio, and image inputs each have two levels: high and low brand excitement.', groups:groups(9,true)},
  {id:'study-2', title:'3.2 Study 2: Randomized Field Experiment', description:'Text, audio, and image inputs each have two levels: high and low brand excitement. The same condition design as Study 1, with the product price changed from RMB 16.9 to RMB 6.9 per ten-pack.', groups:groups(9,true)},
  {id:'study-3', title:'3.3 Study 3: Generalized Online Experiment', description:'Text, audio, and image inputs each have two levels: high and low brand ruggedness.', groups:groups(10)}
];

for (const study of studies) {
 const id=study.id.split("-")[1];
 for (const group of study.groups) {
  group.en=videoLinks[`${id}-${group.key}-EN`];
  group.zh=videoLinks[`${id}-${group.key}-CN`];
  if (!group.en || !group.zh) throw new Error("Missing study video: "+id+"-"+group.key);
 }
}



