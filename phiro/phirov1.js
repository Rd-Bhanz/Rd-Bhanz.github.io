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
            [' ', 'Disconnect_PHIRO %n', 'disconnect_phiro', 255],
            [' ', 'Left_RED %n', 'left_red', 255],
            [' ', 'Left_GREEN %n', 'left_green', 255],
            [' ', 'Left_BLUE %n', 'left_blue', 255],
            [' ', 'RIGHT_RED %n', 'right_red', 255],
            [' ', 'RIGHT_GREEN %n', 'right_green', 255],
            [' ', 'RIGHT_BLUE %n', 'right_blue', 255],
            [' ', 'LeftMotorForward %n', 'left_motor_forward', 255],
            [' ', 'LeftMotorBackward %n', 'left_motor_backward', 255],
            [' ', 'RightMotorForward %n', 'right_motor_forward', 255],
            [' ', 'RightMotorBackward %n', 'right_motor_backward', 255],
            ['r', 'Side_Right_Sensor', 'side_right_sensor'],
            ['r', 'Front_Right_Sensor', 'front_right_sensor'],
            ['r', 'Bottom_Right_Sensor', 'bottom_right_sensor'],
            ['r', 'Bottom_Left_Sensor', 'bottom_left_sensor'],
            ['b', 'Front_Left_Sensor', 'front_left_sensor'],
            ['h', 'Side_Left_Sensor', 'side_left_sensor']
        ]
    };

    // Register the extension
    ScratchExtensions.register('PHIRO', descriptor, ext);
})({});
