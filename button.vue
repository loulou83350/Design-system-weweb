<template>
    <div class="button" :style="rootStyles">
      <div class="type=tertiary,-small=off,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=off,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Tertiary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=off,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Quaterny,_Small=Off,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=tertiary,-small=on,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Tertiary,_Small=On,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=quaterny,-small=on,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Quaterny,_Small=On,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=default,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=default,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Default,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=disable,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=disable,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=hover,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=hover,-iconbutton=off" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=off,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Primary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=off,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Secondary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=default,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=default,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Default,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=disable,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=disable,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Disable,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=primary,-small=on,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Primary,_Small=On,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=off,-state=hover,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
      <div class="type=secondary,-small=on,-invert=on,-state=hover,-iconbutton=on" :style="styles.Type=Secondary,_Small=On,_Invert=On,_State=Hover,_IconButton=On"><!-- Contenu enfant --></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rootStyles: {
      "border": "1px solid rgba(151, 71, 255, 1)",
      "width": "1118px",
      "height": "1109px",
      "justifyContent": "flex-start",
      "alignItems": "flex-start",
      "borderRadius": "5px"
  },
        styles: {
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "1px solid rgba(226, 231, 240, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "1px solid rgba(226, 231, 240, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=Off,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Tertiary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Tertiary,_Small=On,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Quaterny,_Small=On,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 152, 227, 0.040000001192092904), 0px 0px 10px rgba(0, 152, 227, 0.0625)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 116, 187, 0.014399999356269844), 0px 0px 10px rgba(0, 116, 187, 0.040000001192092904)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "2px solid rgba(1, 112, 163, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "178px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 152, 227, 0.040000001192092904), 0px 0px 10px rgba(0, 152, 227, 0.0625)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Default,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Disable,_IconButton=Off": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 116, 187, 0.014399999356269844), 0px 0px 10px rgba(0, 116, 187, 0.040000001192092904)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "2px solid rgba(1, 112, 163, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Hover,_IconButton=Off": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "147px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 152, 227, 0.040000001192092904), 0px 0px 10px rgba(0, 152, 227, 0.0625)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 116, 187, 0.014399999356269844), 0px 0px 10px rgba(0, 116, 187, 0.040000001192092904)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "2px solid rgba(1, 112, 163, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=Off,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "56px",
      "height": "56px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 152, 227, 0.040000001192092904), 0px 0px 10px rgba(0, 152, 227, 0.0625)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 152, 227, 0.040000001192092904), 0px 0px 10px rgba(0, 152, 227, 0.0625)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Default,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(11, 174, 236, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(53, 197, 251, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Disable,_IconButton=On": {
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "border": "2px solid rgba(255, 255, 255, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px",
      "opacity": 0.5
  },
          "Type=Primary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 116, 187, 0.014399999356269844), 0px 0px 10px rgba(0, 116, 187, 0.040000001192092904)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Primary,_Small=On,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=Off,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(1, 112, 163, 1)",
      "border": "2px solid rgba(1, 112, 163, 1)",
      "boxShadow": "0px 0px 16px rgba(0, 116, 187, 0.014399999356269844), 0px 0px 10px rgba(0, 116, 187, 0.040000001192092904)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  },
          "Type=Secondary,_Small=On,_Invert=On,_State=Hover,_IconButton=On": {
      "backgroundColor": "rgba(185, 232, 254, 1)",
      "width": "40px",
      "height": "40px",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "borderRadius": "8px"
  }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .button {
 
  }
  </style>