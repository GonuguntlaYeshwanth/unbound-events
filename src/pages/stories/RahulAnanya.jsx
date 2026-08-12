import StoryPage from "../../components/StoryPage";
import stories from "../../data/stories";

function RahulAnanya() {
  const currentIndex = 1;

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

export default RahulAnanya;