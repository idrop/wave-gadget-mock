if (!window.wave) {
    wave = new Wave()
}

/**
 * wave object
 */
function Wave() {

    this.getParticipants = function() {
        var list = new Array()
        list[0] = new Participant("1", "Phil Miller", "pic_url")
        list[1] = new Participant("2", "Dank Spangle", "pic_url")
        list[2] = new Participant("3", "Warren Miller", "pic_url")
        list[3] = new Participant("4", "Julie Woodall", "pic_url")
        return list
    }


    this.isInWaveContainer = function() {
        return true
    };

    this.getHost = function() {
        return new Participant("1", "Phil Miller", "pic_url")
    };

    this.getViewer = function() {
        return new Participant("1", "Phil Miller", "pic_url")
    };

    this.getState = function() {
        return new State()
    };

    this.setStateCallback = function(fn) {

    };


    this.setParticipantCallback = function(fn) {

    };

}

/**
 * participant object
 */
function Participant(id, name, pic) {
    this.id = id;
    this.name = name;
    this.pic = pic;

    this.getId = function() {
        return id
    }

    this.getName = function() {
        return name
    }
}

/**
 * state object
 */
function State() {

    var state = new Array()

    this.get = function(key) {
        return state[key]
    };

    this.submitDelta = function(obj) {
        for (var i = 0; i < obj.length; i++) {
            state[i] = obj[i]
        }
    };
}


if (!window.gadgets) {
    gadgets = {};
}

if (!gadgets.util) {
    gadgets.util = {
        registerOnLoadHandler : function(fn) {
            //callback immediately
            fn()

        }
    };
}


