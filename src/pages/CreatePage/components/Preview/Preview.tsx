import EditorPreview from './components/EditorPreview'
import EntityPreview from './components/EntityPreview'
import InGamePreview from './components/InGamePreview'
import LeaderboardEpisodeGridPreview from './components/LeaderboardEpisodeGridPreview'
import LevelsPreview from './components/LevelsPreview'
import MenuPreview from './components/MenuPreview'
import ObjectsPreview from './components/ObjectsPreview'


// i think we'll end up factoring out this component, actually
// LMAO

// TODO: pass through props with rest/spread

interface Props {
  colors: { [index: string]: string[] };
  canvasType: string; // one of a set, actually
}

export default function Preview({
  colors,
  canvasType
}: Props) {
  return <>
    {/* make sure switching among these doesnt get messy. lack of keys is concerning. */}
    { canvasType === 'objects' &&     <ObjectsPreview colors={colors} /> }
    { canvasType === 'editor' &&      <EditorPreview colors={colors} /> }
    { canvasType === 'ingame' &&      <InGamePreview colors={colors} /> }
    { canvasType === 'leaderboard' && <LeaderboardEpisodeGridPreview colors={colors} /> }
    { canvasType === 'levels' &&      <LevelsPreview colors={colors} /> }
    { canvasType === 'menu' &&        <MenuPreview colors={colors} /> }
    { canvasType === 'entities' &&    <EntityPreview colors={colors} /> }
  </>
}
