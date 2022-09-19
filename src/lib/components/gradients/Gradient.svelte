<script type="ts">
  export let color = "var(--clr-primary-main-t6)";
  export let left = "25%";
  export let top = "45%";
  export let width = "600px"
  export let height = "600px"
  export let blur = "100px"
</script>

<div class="gradient" style={`background-color: ${color}; left: ${left}; top: ${top}; width: ${width}; height: ${height}; filter: blur(${blur});`}/>

<style type="scss">
  div {
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    border-radius: 100%;
  }
</style>