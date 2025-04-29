import EditorPreview from './components/EditorPreview'
import InGamePreview from './components/InGamePreview'
import LeaderboardEpisodeGridPreview from './components/LeaderboardEpisodeGridPreview'
import LevelsPreview from './components/LevelsPreview'
import MenuPreview from './components/MenuPreview'
import ObjectsPreview from './components/ObjectsPreview'
import UnknownPreview from './components/UnknownPreview'


// i think we'll end up factoring out this component, actually
// LMAO

// TODO: pass through props with rest/spread

interface Props {
  colors: { [index: string]: string[] };
  currentPreview: string; // one of a set, actually
}

export default function Preview({
  colors,
  currentPreview
}: Props) {
  return <>
    {/* make sure switching among these doesnt get messy. lack of keys is concerning. */}
    { currentPreview === 'objects' &&     <ObjectsPreview colors={colors} /> }
    { currentPreview === 'editor' &&      <EditorPreview colors={colors} /> }
    { currentPreview === 'ingame' &&      <InGamePreview colors={colors} /> }
    { currentPreview === 'episodes' &&    <LeaderboardEpisodeGridPreview colors={colors} /> }
    { currentPreview === 'levels' &&      <LevelsPreview colors={colors} /> }
    { currentPreview === 'menus' &&       <MenuPreview colors={colors} /> }
    { currentPreview === 'unknown' &&     <UnknownPreview colors={colors} /> }
  </>
}
