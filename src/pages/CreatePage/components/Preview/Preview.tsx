import EditorPreview from './components/EditorPreview'
import EntityPreview from './components/EntityPreview'
import InGamePreview from './components/InGamePreview'
import LeaderboardEpisodeGridPreview from './components/LeaderboardEpisodeGridPreview'
import LevelsPreview from './components/LevelsPreview'
import MenuPreview from './components/MenuPreview'
import ObjectsPreview from './components/ObjectsPreview'


// i think we'll end up factoring out this component, actually
// LMAO

interface Props {
  // the actual way to do useState functions:
  // setMyVar: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setSectionIdx: (i: number) => void;
  setItemIdx: (i: number) => void;
  colors: { [index: string]: string[] };
  canvasType: string; // one of a set, actually
}

export default function Preview({
  colors,
  setSectionIdx,
  setItemIdx,
  canvasType
}: Props) {
  return <>
    {/* make sure switching among these doesnt get messy. lack of keys is concerning. */}
    { canvasType === 'objects' &&     <ObjectsPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'editor' &&      <EditorPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'ingame' &&      <InGamePreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'leaderboard' && <LeaderboardEpisodeGridPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'levels' &&      <LevelsPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'menu' &&        <MenuPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
    { canvasType === 'entities' &&    <EntityPreview setItemIdx={setItemIdx} setSectionIdx={setSectionIdx} colors={colors} /> }
  </>
}
