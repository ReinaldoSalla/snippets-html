const utils = {
  extend: function(dst, src) {
    for (const key of src) {
      dst[key] = src[key];
    }
    return dst;
  }
}

function THREERoot(params) {
  params = utils.extend({
    fov: 60,
    zNear: 10,
    zFar: 100000,
    createCameraControls: true
  }, params);

}

THREERoot.prototype = {
  tick: function() {
    this.update();
    this.render();
    requestAnimationFrame(this.tick);
  },
  update: function() {
    this.controls && this.controls.update();
  },
  render: function() {
    this.renderer.render(this.scene, this.camera);
  },
  resize: function() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

function init() {
  const root = new THREERoot({
    createCameraControls: false,
    antialias: (window.devicePixelRatio === 1),
    fox: 80
  });
  root.renderer.setClearColor(0x000000, 0);
  root.renderer.setPixelRatio(window.devicePixelRatio || 1);
  root.camera.position.set(0, 0, 60);
  const width = 100;
  const height = 60;
  const slide = new Slide(width, height, 'out');
  console.log(slide);
}

window.onload = init;
