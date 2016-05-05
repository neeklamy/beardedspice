//
//  Stitcher.plist
//  BeardedSpice
//
//  Created by Christopher Williams on 3/24/14.
//  Copyright (c) 2014 Tyler Rhodes / Jose Falcon. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"Stitcher",
  acceptMethod: "predicateOnTab",
  acceptParams: {
    format:"SELF LIKE[c] '*stitcher.com*'",
    args:"url"
  },
  isPlaying: function isPlaying () { return document.getElementById('jp_audio_0').paused; },
  toggle:function () {
    var player = document.getElementById('jp_audio_0');
    if (player.paused) { player.play() }
    else { player.pause() }
  },
  next: function next () {},
  favorite: function favorite () {},
  previous: function previous () {},
  pause: function pause () { return document.getElementById('jp_audio_0').pause(); },
  trackInfo: function trackInfo () {}
}