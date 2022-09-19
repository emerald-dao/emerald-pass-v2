<div class="grid">
  <div>
    <slot name="left"/>
  </div>
  <slot name="right"/>
</div>

<style type="scss">
  @use "../../styles/utils" as *;

  .grid {   
    @include mq(medium) {
			display: grid;
      grid-template-columns: 3fr 5fr;
      gap: 9rem;
      margin-top: 2rem;
      text-align: left;
		}
  }

  .grid > div {
    margin-bottom: 5rem;

    @include mq(medium) {
      height: fit-content;
      position: sticky;
      top: 10rem;
      margin-bottom: 0;
    }
  }

</style>