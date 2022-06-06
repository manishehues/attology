<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */




define('WP_CACHE', true);
define( 'WPCACHEHOME', '/var/www/wordpress/wp-content/plugins/wp-super-cache/' );
//$currentServer =  $_SERVER['HTTP_HOST'];

//define('WP_HOME', 'https://stg.at0l.io');
//define('WP_SITEURL', 'https://stg.at0l.io');



// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'attology');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
/**define('DB_HOST', 'www.ccbxi26o2tim.us-west-2.rds.amazonaws.com');*/
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2AqSK9R,_CSrB)LAesKv-L8l7m;y_KIq9Cz{p/xyHR1AmgS,I <e4<V1+4JFMR0:');
define('SECURE_AUTH_KEY',  'z;~Rv$SabChtBUc1JF{;f`*|[7RtPd5#U{Db*h9*DqV^?h7jX+XRJ]{aQy<Y,)Hf');
define('LOGGED_IN_KEY',    'P/Wp.9#K]@z=.yNULG;37/%nPq*8Zu>t;kU5}`P&(!En?#fG9nXH)T~G:_<#!%ym');
define('NONCE_KEY',        'gdX~G<41][7P)0eKODK+n.*B*SNK`m5qmL9[r!d!:K<h8$k/1d~ErsqLJ3-zN7G(');
define('AUTH_SALT',        ':=uh)O:6#hrlB&,!/EK{OdBt:45kc4#2~qeq9Zx=Q==+}:gnG4p#9_>ie=:?~L:}');
define('SECURE_AUTH_SALT', 'mx<,# mt149.S)!j#&Jg7#NHZz6hB%iDn>b@93lJ~Voh5N {%0I1C;xNGPs+/M,)');
define('LOGGED_IN_SALT',   'oS`Y(NfVi1j_Xy+L]j}nM.cD@A E_(oadU&i`M?rrf<Mt&BAi%#45|Yu$mkV+oIV');
define('NONCE_SALT',       'wN}o*=8N*Z+j)C/gQvl*MAt|D>{YVj!rW3.upq:PxC~nZy%Mm+pT<3&_kl&UT^Q*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bca_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
