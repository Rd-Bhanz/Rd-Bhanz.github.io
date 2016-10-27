(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.disconnect_phiro = function() {
        // Code that gets executed when the block is run
    };

    ext.left_red = function() {
       //Code to turn on the led on the left to red
    };

    ext.left_green = function() {
       //Code to turn on the led on the left to green
    };

    ext.left_blue = function() {
       //Code to turn on the led on the left to blue
    };

    ext.right_red = function() {
       //Code to turn on the led on the right to red
    };

    ext.right_green = function() {
       //Code to turn on the led on the right to green
    };

    ext.right_blue = function() {
       //Code to turn on the led on the right to blue
    };

    ext.left_motor_forward = function() {
       //Code to turn on the motor on the left side to spin forward
    };

    ext.left_motor_backward = function() {
       //Code to turn on the motor on the left side to spin backward
    };

    ext.right_motor_forward = function() {
       //Code to turn on the motor on the right side to spin forward
    };

    ext.right_motor_backward = function() {
       //Code to turn on the motor on the right side to spin backward
    };

    ext.side_right_sensor = function() {
       //Code to read from the sensor on the right side
    };

    ext.front_right_sensor = function() {
       //Code to read from the sensor on the front of the right side
    };

    ext.bottom_right_sensor = function() {
       //Code to read from the sensor on the bottom of the right side
    };

    ext.side_left_sensor = function() {
       //Code to read from the sensor on the left side
    };

    ext.front_left_sensor = function() {
       //Code to read from the sensor on the front of the left side
    };

    ext.bottom_left_sensor = function() {
       //Code to read from the sensor on the bottom of the left side
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, input_value
            ['h', 'Disconnect_PHIRO', 'disconnect_phiro %n', 255],
            ['h', 'Left_RED', 'left_red', 255],
            ['h', 'Left_GREEN', 'left_green', 255],
            ['h', 'Left_BLUE', 'left_blue', 255],
            ['h', 'RIGHT_RED', 'right_red', 255],
            ['h', 'RIGHT_GREEN', 'right_green', 255],
            ['h', 'RIGHT_BLUE', 'right_blue', 255],
            ['h', 'LeftMotorForward', 'left_motor_forward', 255],
            ['h', 'LeftMotorBackward', 'left_motor_backward', 255],
            ['h', 'RightMotorForward', 'right_motor_forward', 255],
            ['h', 'RightMotorBackward', 'right_motor_backward', 255],
            ['b', 'Side_Right_Sensor', 'side_right_sensor'],
            ['b', 'Front_Right_Sensor', 'front_right_sensor'],
            ['b', 'Bottom_Right_Sensor', 'bottom_right_sensor'],
            ['b', 'Bottom_Left_Sensor', 'bottom_left_sensor'],
            ['h', 'Front_Left_Sensor', 'front_left_sensor'],
            ['r', 'Side_Left_Sensor', 'side_left_sensor']
        ]
    };

    // Register the extension
    ScratchExtensions.register('PHIRO', descriptor, ext);
})({});
