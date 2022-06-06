<?php

// LDAP Server Details
$ldapServer = "ldaps://ipa01.ipa.at0l.io";
$ldapBindDN = 'uid=wwwauth,cn=sysaccounts,cn=etc,dc=ipa,dc=at0l,dc=io';
$ldapBindPasswd = 'HackyHackFOffLoser';
$baseDN = 'cn=users,cn=accounts,dc=ipa,dc=at0l,dc=io';

// Responses
$validEmailResponse = json_encode(array('type' => 'danger', 'message' => 'VALID_EMAIL'));
$badUserDataResponse = json_encode(array('type' => 'danger', 'message' => 'BAD_USER_DATA'));
$failResponse = json_encode(array('type' => 'danger', 'message' => 'FAIL'));
$errorResponse = json_encode(array('type' => 'danger', 'message' => 'ERROR'));

// connect to ldap server
$ldapConn = ldap_connect($ldapServer)
    or die("Could not connect to LDAP server.");

ldap_set_option($ldapConn, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldapConn, LDAP_OPT_REFERRALS, 0);

if(ldap_bind($ldapConn, $ldapBindDN, $ldapBindPasswd)) {
    $arr = array('dn', 1);
    $userMail = $_POST['email'];

    // Test for empty fields and fields with embedded nulls
    if (empty($userMail) or preg_match('/\x00/',$userMail)) {
        header('Content-Type: application/json');
        echo $badUserDataResponse;
    } else {
        // Search for user record
        $searchResult = ldap_search($ldapConn, $baseDN, "(mail=$userMail)", $arr);
        $userEntries = ldap_get_entries($ldapConn, $searchResult);

        // If user record found, do simple bind with retrieved user DN and form passwd
        if ($userEntries['count'] > 0) {
            header('Content-Type: application/json');
            echo $validEmailResponse;
        } else {
            header('Content-Type: application/json');
            echo $badUserDataResponse;
        }
    }
} else {
    header('Content-Type: application/json');
    echo $errorResponse;
}

ldap_close($ldapConn);

?>
