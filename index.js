$(function () {
  function cssShadow({
    font_size,
    offset_x,
    offset_y,
    blur,
    opacity,
    color,
    rgba,
  }) {
    const cssStyles = `${offset_x}px ${offset_y}px ${blur}px ${rgba}`;
    $("h1").css("text-shadow", cssStyles);
    $("#resultHex").val(
      `background-color: ${color}; opacity: ${opacity}; font-size: ${font_size}px`
    );
    $("#resultRGBA").val(`text-shadow: ${offset_x}px ${offset_y}px
  ${blur}px ${rgba}; font-size: ${font_size}px`);
  }

  cssShadow({
    font_size: 40,
    offset_x: 4,
    offset_y: -1,
    blur: 0,
    opacity: 0,
    color: "#ff0000",
    rgba: "rgba(255, 0, 0, 1)",
  });

  $(document).on("input change, input", function () {
    const font_size = $("#font_size").val();
    const offset_x = $("#offset_x").val();
    const offset_y = $("#offset_y").val();
    const blur = $("#blur").val();
    const opacity = $("#opacity").val();
    const color = $("input[type=color]").val();
    const red16 = `${color[1]}${color[2]}`;
    const green16 = `${color[3]}${color[4]}`;
    const blue16 = `${color[5]}${color[6]}`;
    const red10 = parseInt(red16, 16);

    const green10 = parseInt(green16, 16);
    const blue10 = parseInt(blue16, 16);
    const rgba = `rgba(${red10}, ${green10}, ${blue10}, ${opacity})`;
    $("h1").css("font-size", `${font_size}px`);

    cssShadow({
      font_size: font_size,
      offset_x: offset_x,
      offset_y: offset_y,
      blur: blur,
      opacity: opacity,
      color: color,
      rgba: rgba,
    });
  });
});
