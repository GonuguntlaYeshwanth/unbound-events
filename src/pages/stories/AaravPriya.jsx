import StoryPage from "../../components/StoryPage";
import stories from "../../data/stories";

function AaravPriya() {
  const currentIndex = 0;

  const previousStory =
    stories[
      (currentIndex - 1 + stories.length) % stories.length
    ];

  const nextStory =
    stories[
      (currentIndex + 1) % stories.length
    ];

  return (
    <StoryPage
      story={stories[currentIndex]}
      previousStory={previousStory}
      nextStory={nextStory}
    />
  );
}

export default AaravPriya;