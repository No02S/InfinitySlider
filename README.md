# InfinitySlider
install with Webpack:
  import infinitySlider from "./InfinitySlider.min";

settings:
{
    slider: "slider",    //Slider
    wrapper: "wrapper", //bar with items
    prev:"prev",       //button previous
    next:"next",      //button next
    activeSlides: 3, //Slides to show
    *delayMs: 'value in ms' //time to swap items
}

constructor:
<Slider>
  <prev>
  <next>
    <wrapper>
      <some item>
        ...
    </wrapper>
</Slider>
