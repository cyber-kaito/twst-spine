let app;
let char;
let isCharacterLoaded = false;
let debug = 0; //set via console

function loadChar(model = "./assets/spine/101_1115040/101_1115040.skel") {
   isCharacterLoaded = false;
   // remove previous spine
   if (app.stage.children.length > 0) {
      app.stage.children.pop();
      app.loader.resources = {};
   }
   try {
      app.loader.resources = {};
      // load new spine
      app.loader.add("bg", "assets/backgrounds/advbg_61291.png");
      app.loader.add("char", `./${model}`).load(onAssetsLoaded);
   } catch (e) {
      console.error(e);
   }
}

function onAssetsLoaded(loader, res) {
   const bg = new PIXI.Sprite(res.bg.texture);
   bg.width = app.screen.width;
   bg.height = app.screen.height;
   app.stage.addChild(bg);

   res.char.spineAtlas.pages[0].baseTexture.alphaMode = PIXI.ALPHA_MODES.PMA;
   char = new PIXI.spine.Spine(res.char.spineData);
   const skeleton = char.skeleton;
   function setSkinByName(skinName) {
      skeleton.setSkin(null);
      skeleton.setSkinByName(skinName);
   }
   setSkinByName("skinLeft");

   // console.log(char)
   // console.log(char.spineData.height)
   // console.log(char.spineData.width)

   // Scaler
   char.scale.x = 1.0;
   char.scale.y = 1.0;

   // Centerize
   char.x = window.innerWidth / 2;
   char.y = window.innerHeight / 1.2;

   //Set option value
   option.scale.value = 1.0;
   option.x.value = char.x;
   option.y.value = char.y;

   // Insert animations to index.html
   const animations = res.char.spineData.animations;
   let check = 0;
   option.animations.innerHTML = "";
   for (var i in animations) {
      let a = document.createElement("option");
      a.value = a.innerHTML = animations[i].name;
      option.animations.append(a);
      if (animations[i].name == "000_idle") check = 1;
   }

   //Play Animation
   if (check) {
      char.state.setAnimation(0, "000_idle", option.loop.checked);
      optionAnimations.value = "000_idle";
   } else {
      char.state.setAnimation(0, animations[0].name, option.loop.checked);
   }
   //Add to main canvas
   app.stage.addChild(char);
   isCharacterLoaded = true;
}

function playAnimation(name) {
   char.state.setAnimation(0, name, option.loop.checked);
}
