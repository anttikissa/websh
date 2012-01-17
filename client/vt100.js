



<!DOCTYPE html>
<html>
<head>
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/11681492690915673504","projectHomeUrl":"/p/shellinabox","relativeBaseUrl":"","projectName":"shellinabox","loggedInUserEmail":null};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 
 </script>
 
 
 <title>vt100.js - 
 shellinabox -
 
 
 Web based AJAX terminal emulator - Google Project Hosting
 </title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11681492690915673504/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11681492690915673504/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11681492690915673504/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/11681492690915673504/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fshellinabox%2Fsource%2Fbrowse%2Ftrunk%2Fshellinabox%2Fvt100.js%3Fr%3D119&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fshellinabox%2Fsource%2Fbrowse%2Ftrunk%2Fshellinabox%2Fvt100.js%3Fr%3D119" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->




 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/shellinabox">
 <a href="/p/shellinabox/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/shellinabox/"><span itemprop="name">shellinabox</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/shellinabox/"><span itemprop="description">Web based AJAX terminal emulator</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/shellinabox/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/shellinabox/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/shellinabox/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/shellinabox/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/shellinabox/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/shellinabox/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/shellinabox/source/browse/trunk">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/shellinabox/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://shellinabox\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/shellinabox/source/browse/?r=119">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/shellinabox/source/browse/trunk/?r=119">trunk</a><span class="sp">/&nbsp;</span><a href="/p/shellinabox/source/browse/trunk/shellinabox/?r=119">shellinabox</a><span class="sp">/&nbsp;</span>vt100.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/shellinabox/source/browse/trunk/shellinabox/vt100.js?r=118" title="Previous">&lsaquo;r118</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r119</b></td>
 
 <td class="flipper">
 <ul class="rightside">
 
 <li><a href="/p/shellinabox/source/browse/trunk/shellinabox/vt100.js?r=120" title="Next">r120&rsaquo;</a></li>
 
 </ul>
 </td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn119_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn119_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn119_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn119_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn119_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn119_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn119_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn119_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn119_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn119_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn119_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn119_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn119_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn119_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn119_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn119_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn119_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn119_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn119_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn119_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn119_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn119_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn119_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn119_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn119_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn119_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn119_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn119_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn119_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn119_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn119_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn119_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn119_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn119_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn119_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn119_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn119_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn119_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn119_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn119_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn119_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn119_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn119_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn119_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn119_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn119_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn119_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn119_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn119_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn119_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn119_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn119_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn119_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn119_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn119_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn119_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn119_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn119_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn119_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn119_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn119_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn119_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn119_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn119_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn119_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn119_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn119_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn119_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn119_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn119_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn119_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn119_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn119_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn119_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn119_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn119_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn119_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn119_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn119_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn119_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn119_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn119_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn119_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn119_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn119_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn119_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn119_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn119_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn119_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn119_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn119_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn119_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn119_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn119_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn119_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn119_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn119_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn119_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn119_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn119_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn119_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn119_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn119_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn119_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn119_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn119_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn119_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn119_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn119_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn119_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn119_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn119_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn119_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn119_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn119_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn119_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn119_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn119_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn119_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn119_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn119_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn119_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn119_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn119_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn119_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn119_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn119_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn119_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn119_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn119_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn119_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn119_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn119_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn119_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn119_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn119_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn119_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn119_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn119_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn119_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn119_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn119_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn119_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn119_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn119_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn119_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn119_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn119_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn119_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn119_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn119_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn119_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn119_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn119_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn119_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn119_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn119_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn119_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn119_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn119_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn119_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn119_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn119_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn119_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn119_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn119_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn119_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn119_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn119_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn119_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn119_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn119_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn119_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn119_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn119_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn119_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn119_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn119_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn119_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn119_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn119_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn119_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn119_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn119_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn119_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn119_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn119_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn119_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn119_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn119_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn119_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn119_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn119_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn119_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn119_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn119_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn119_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn119_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn119_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn119_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn119_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn119_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn119_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn119_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn119_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn119_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn119_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn119_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn119_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn119_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn119_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn119_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn119_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn119_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn119_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn119_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn119_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn119_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn119_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn119_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn119_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn119_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn119_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn119_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn119_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn119_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn119_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn119_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn119_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn119_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn119_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn119_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn119_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn119_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn119_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn119_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn119_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn119_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn119_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn119_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn119_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn119_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn119_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn119_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn119_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn119_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn119_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn119_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn119_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn119_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn119_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn119_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn119_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn119_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn119_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn119_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn119_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn119_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn119_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn119_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn119_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn119_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn119_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn119_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn119_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn119_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn119_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn119_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn119_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn119_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn119_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn119_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn119_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn119_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn119_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn119_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn119_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn119_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn119_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn119_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn119_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn119_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn119_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn119_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn119_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn119_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn119_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn119_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn119_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn119_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn119_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn119_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn119_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn119_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn119_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn119_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn119_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn119_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn119_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn119_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn119_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn119_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn119_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn119_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn119_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn119_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn119_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn119_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn119_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn119_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn119_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn119_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn119_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn119_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn119_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn119_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn119_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn119_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn119_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn119_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn119_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn119_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn119_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn119_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn119_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn119_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn119_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn119_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn119_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn119_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn119_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn119_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn119_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn119_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn119_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn119_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn119_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn119_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn119_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn119_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn119_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn119_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn119_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn119_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn119_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn119_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn119_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn119_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn119_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn119_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn119_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn119_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn119_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn119_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn119_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn119_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn119_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn119_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn119_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn119_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn119_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn119_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn119_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn119_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn119_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn119_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn119_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn119_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn119_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn119_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn119_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn119_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn119_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn119_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn119_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn119_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn119_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn119_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn119_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn119_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn119_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn119_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn119_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn119_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn119_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn119_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn119_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn119_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn119_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn119_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn119_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn119_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn119_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn119_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn119_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn119_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn119_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn119_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn119_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn119_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn119_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn119_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn119_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn119_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn119_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn119_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn119_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn119_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn119_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn119_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn119_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn119_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn119_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn119_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn119_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn119_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn119_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn119_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn119_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn119_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn119_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn119_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn119_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn119_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn119_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn119_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn119_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn119_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn119_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn119_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn119_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn119_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn119_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn119_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn119_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn119_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn119_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn119_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn119_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn119_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn119_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn119_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn119_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn119_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn119_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn119_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn119_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn119_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn119_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn119_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn119_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn119_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn119_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn119_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn119_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn119_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn119_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn119_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn119_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn119_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn119_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn119_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn119_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn119_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn119_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn119_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn119_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn119_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn119_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn119_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn119_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn119_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn119_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn119_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn119_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn119_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn119_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn119_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn119_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn119_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn119_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn119_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn119_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn119_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn119_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn119_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn119_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn119_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn119_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn119_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn119_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn119_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn119_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn119_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn119_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn119_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn119_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn119_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn119_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn119_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn119_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn119_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn119_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn119_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn119_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn119_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn119_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn119_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn119_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn119_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn119_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn119_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn119_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn119_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn119_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn119_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn119_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn119_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn119_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn119_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn119_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn119_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn119_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn119_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn119_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn119_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn119_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn119_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn119_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn119_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn119_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn119_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn119_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn119_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn119_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn119_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn119_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn119_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn119_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn119_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn119_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn119_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn119_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn119_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn119_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn119_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn119_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn119_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn119_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn119_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn119_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn119_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn119_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn119_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn119_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn119_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn119_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn119_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn119_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn119_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn119_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn119_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn119_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn119_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn119_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn119_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn119_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn119_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn119_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn119_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn119_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn119_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn119_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn119_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn119_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn119_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn119_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn119_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn119_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn119_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn119_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn119_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn119_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn119_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn119_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn119_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn119_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn119_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn119_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn119_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn119_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn119_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn119_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn119_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn119_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn119_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn119_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn119_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn119_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn119_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn119_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn119_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn119_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn119_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn119_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn119_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn119_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn119_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn119_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn119_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn119_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn119_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn119_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn119_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn119_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn119_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn119_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn119_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn119_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn119_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn119_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn119_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn119_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn119_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn119_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn119_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn119_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn119_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn119_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn119_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn119_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn119_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn119_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn119_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn119_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn119_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn119_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn119_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn119_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn119_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn119_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn119_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn119_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn119_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn119_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn119_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn119_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn119_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn119_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn119_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn119_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn119_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn119_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn119_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn119_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn119_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn119_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn119_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn119_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn119_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn119_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn119_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn119_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn119_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn119_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn119_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn119_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn119_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn119_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn119_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn119_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn119_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn119_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn119_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn119_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn119_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn119_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn119_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn119_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn119_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn119_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn119_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn119_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn119_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn119_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn119_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn119_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn119_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn119_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn119_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn119_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn119_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn119_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn119_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn119_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn119_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn119_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn119_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn119_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn119_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn119_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn119_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn119_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn119_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn119_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn119_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn119_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn119_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn119_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn119_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn119_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn119_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn119_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn119_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn119_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn119_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn119_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn119_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn119_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn119_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn119_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn119_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn119_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn119_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn119_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn119_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn119_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn119_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn119_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn119_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn119_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn119_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn119_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn119_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn119_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn119_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn119_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn119_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn119_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn119_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn119_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn119_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn119_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn119_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn119_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn119_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn119_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn119_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn119_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn119_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn119_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn119_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn119_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn119_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn119_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn119_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn119_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn119_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn119_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn119_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn119_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn119_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn119_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn119_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn119_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn119_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn119_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn119_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn119_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn119_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn119_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn119_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn119_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn119_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn119_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn119_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn119_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn119_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn119_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn119_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn119_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn119_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn119_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn119_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn119_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn119_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn119_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn119_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn119_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn119_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn119_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn119_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn119_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn119_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn119_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn119_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn119_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn119_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn119_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn119_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn119_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn119_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn119_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn119_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn119_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn119_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn119_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn119_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn119_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn119_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn119_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn119_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn119_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn119_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn119_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn119_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn119_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn119_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn119_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn119_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn119_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn119_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn119_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn119_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn119_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn119_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn119_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn119_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn119_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn119_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn119_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn119_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn119_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn119_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn119_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn119_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn119_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn119_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn119_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn119_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn119_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn119_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn119_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn119_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn119_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn119_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn119_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn119_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn119_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn119_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn119_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn119_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn119_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn119_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn119_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn119_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn119_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn119_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn119_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn119_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn119_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn119_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn119_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn119_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn119_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn119_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn119_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn119_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn119_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn119_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn119_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn119_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn119_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn119_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn119_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn119_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn119_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn119_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn119_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn119_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn119_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn119_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn119_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn119_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn119_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn119_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn119_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn119_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn119_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn119_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn119_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn119_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn119_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn119_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn119_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn119_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn119_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn119_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn119_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn119_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn119_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn119_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn119_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn119_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn119_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn119_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn119_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn119_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn119_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn119_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn119_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn119_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn119_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn119_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn119_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn119_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn119_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn119_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn119_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn119_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn119_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn119_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn119_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn119_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn119_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn119_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn119_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn119_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn119_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn119_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn119_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn119_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn119_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn119_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn119_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn119_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn119_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn119_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn119_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn119_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn119_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn119_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn119_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn119_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn119_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn119_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn119_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn119_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn119_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn119_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn119_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn119_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn119_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn119_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn119_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn119_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn119_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn119_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn119_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn119_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn119_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn119_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn119_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn119_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn119_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn119_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn119_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn119_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn119_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn119_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn119_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn119_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn119_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn119_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn119_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn119_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn119_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn119_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn119_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn119_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn119_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn119_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn119_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn119_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn119_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn119_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn119_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn119_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn119_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn119_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn119_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn119_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn119_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn119_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn119_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn119_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn119_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn119_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn119_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn119_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn119_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn119_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn119_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn119_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn119_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn119_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn119_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn119_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn119_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn119_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn119_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn119_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn119_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn119_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn119_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn119_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn119_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn119_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn119_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn119_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn119_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn119_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn119_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn119_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn119_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn119_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn119_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn119_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn119_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn119_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn119_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn119_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn119_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn119_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn119_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn119_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn119_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn119_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn119_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn119_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn119_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn119_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn119_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn119_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn119_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn119_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn119_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn119_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn119_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn119_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn119_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn119_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn119_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn119_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn119_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn119_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn119_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn119_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn119_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn119_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn119_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn119_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn119_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn119_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn119_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn119_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn119_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn119_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn119_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn119_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn119_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn119_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn119_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn119_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn119_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn119_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn119_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn119_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn119_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn119_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn119_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn119_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn119_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn119_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn119_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn119_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn119_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn119_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn119_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn119_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn119_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn119_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn119_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn119_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn119_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn119_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn119_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn119_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn119_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn119_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn119_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn119_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn119_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn119_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn119_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn119_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn119_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn119_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn119_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn119_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn119_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn119_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn119_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn119_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn119_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn119_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn119_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn119_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn119_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn119_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn119_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn119_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn119_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn119_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn119_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn119_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn119_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn119_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn119_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn119_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn119_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn119_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn119_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn119_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn119_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn119_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn119_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn119_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn119_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn119_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn119_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn119_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn119_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn119_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn119_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn119_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn119_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn119_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn119_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn119_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn119_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn119_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn119_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn119_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn119_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn119_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn119_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn119_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn119_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn119_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn119_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn119_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn119_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn119_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn119_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn119_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn119_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn119_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn119_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn119_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn119_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn119_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn119_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn119_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn119_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn119_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn119_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn119_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn119_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn119_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn119_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn119_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn119_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn119_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn119_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn119_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn119_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn119_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn119_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn119_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn119_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn119_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn119_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn119_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn119_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn119_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn119_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn119_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn119_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn119_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn119_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn119_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn119_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn119_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn119_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn119_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn119_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn119_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn119_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn119_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn119_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn119_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn119_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn119_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn119_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn119_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn119_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn119_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn119_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn119_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn119_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn119_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn119_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn119_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn119_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn119_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn119_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn119_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn119_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn119_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn119_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn119_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn119_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn119_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn119_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn119_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn119_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn119_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn119_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn119_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn119_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn119_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn119_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn119_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn119_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn119_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn119_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn119_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn119_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn119_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn119_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn119_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn119_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn119_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn119_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn119_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn119_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn119_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn119_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn119_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn119_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn119_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn119_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn119_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn119_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn119_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn119_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn119_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn119_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn119_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn119_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn119_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn119_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn119_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn119_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn119_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn119_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn119_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn119_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn119_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn119_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn119_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn119_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn119_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn119_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn119_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn119_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn119_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn119_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn119_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn119_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn119_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn119_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn119_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn119_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn119_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn119_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn119_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn119_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn119_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn119_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn119_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn119_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn119_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn119_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn119_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn119_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn119_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn119_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn119_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn119_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn119_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn119_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn119_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn119_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn119_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn119_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn119_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn119_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn119_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn119_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn119_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn119_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn119_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn119_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn119_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn119_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn119_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn119_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn119_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn119_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn119_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn119_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn119_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn119_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn119_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn119_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn119_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn119_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn119_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn119_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn119_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn119_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn119_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn119_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn119_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn119_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn119_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn119_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn119_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn119_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn119_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn119_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn119_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn119_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn119_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn119_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn119_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn119_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn119_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn119_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn119_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn119_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn119_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn119_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn119_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn119_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn119_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn119_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn119_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn119_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn119_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn119_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn119_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn119_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn119_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn119_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn119_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn119_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn119_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn119_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn119_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn119_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn119_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn119_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn119_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn119_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn119_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn119_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn119_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn119_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn119_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn119_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn119_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn119_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn119_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn119_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn119_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn119_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn119_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn119_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn119_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn119_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn119_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn119_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn119_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn119_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn119_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn119_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn119_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn119_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn119_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn119_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn119_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn119_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn119_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn119_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn119_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn119_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn119_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn119_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn119_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn119_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn119_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn119_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn119_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn119_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn119_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn119_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn119_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn119_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn119_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn119_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn119_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn119_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn119_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn119_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn119_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn119_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn119_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn119_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn119_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn119_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn119_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn119_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn119_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn119_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn119_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn119_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn119_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn119_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn119_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn119_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn119_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn119_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn119_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn119_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn119_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn119_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn119_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn119_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn119_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn119_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn119_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn119_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn119_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn119_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn119_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn119_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn119_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn119_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn119_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn119_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn119_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn119_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn119_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn119_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn119_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn119_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn119_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn119_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn119_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn119_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn119_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn119_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn119_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn119_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn119_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn119_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn119_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn119_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn119_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn119_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn119_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn119_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn119_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn119_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn119_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn119_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn119_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn119_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn119_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn119_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn119_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn119_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn119_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn119_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn119_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn119_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn119_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn119_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn119_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn119_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn119_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn119_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn119_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn119_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn119_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn119_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn119_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn119_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn119_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn119_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn119_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn119_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn119_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn119_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn119_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn119_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn119_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn119_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn119_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn119_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn119_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn119_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn119_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn119_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn119_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn119_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn119_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn119_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn119_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn119_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn119_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn119_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn119_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn119_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn119_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn119_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn119_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn119_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn119_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn119_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn119_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn119_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn119_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn119_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn119_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn119_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn119_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn119_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn119_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn119_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn119_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn119_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn119_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn119_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn119_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn119_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn119_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn119_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn119_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn119_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn119_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn119_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn119_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn119_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn119_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn119_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn119_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn119_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn119_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn119_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn119_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn119_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn119_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn119_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn119_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn119_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn119_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn119_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn119_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn119_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn119_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn119_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn119_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn119_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn119_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn119_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn119_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn119_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn119_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn119_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn119_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn119_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn119_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn119_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn119_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn119_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn119_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn119_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn119_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn119_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn119_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn119_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn119_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn119_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn119_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn119_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn119_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn119_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn119_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn119_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn119_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn119_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn119_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn119_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
><tr id="gr_svn119_1628"

><td id="1628"><a href="#1628">1628</a></td></tr
><tr id="gr_svn119_1629"

><td id="1629"><a href="#1629">1629</a></td></tr
><tr id="gr_svn119_1630"

><td id="1630"><a href="#1630">1630</a></td></tr
><tr id="gr_svn119_1631"

><td id="1631"><a href="#1631">1631</a></td></tr
><tr id="gr_svn119_1632"

><td id="1632"><a href="#1632">1632</a></td></tr
><tr id="gr_svn119_1633"

><td id="1633"><a href="#1633">1633</a></td></tr
><tr id="gr_svn119_1634"

><td id="1634"><a href="#1634">1634</a></td></tr
><tr id="gr_svn119_1635"

><td id="1635"><a href="#1635">1635</a></td></tr
><tr id="gr_svn119_1636"

><td id="1636"><a href="#1636">1636</a></td></tr
><tr id="gr_svn119_1637"

><td id="1637"><a href="#1637">1637</a></td></tr
><tr id="gr_svn119_1638"

><td id="1638"><a href="#1638">1638</a></td></tr
><tr id="gr_svn119_1639"

><td id="1639"><a href="#1639">1639</a></td></tr
><tr id="gr_svn119_1640"

><td id="1640"><a href="#1640">1640</a></td></tr
><tr id="gr_svn119_1641"

><td id="1641"><a href="#1641">1641</a></td></tr
><tr id="gr_svn119_1642"

><td id="1642"><a href="#1642">1642</a></td></tr
><tr id="gr_svn119_1643"

><td id="1643"><a href="#1643">1643</a></td></tr
><tr id="gr_svn119_1644"

><td id="1644"><a href="#1644">1644</a></td></tr
><tr id="gr_svn119_1645"

><td id="1645"><a href="#1645">1645</a></td></tr
><tr id="gr_svn119_1646"

><td id="1646"><a href="#1646">1646</a></td></tr
><tr id="gr_svn119_1647"

><td id="1647"><a href="#1647">1647</a></td></tr
><tr id="gr_svn119_1648"

><td id="1648"><a href="#1648">1648</a></td></tr
><tr id="gr_svn119_1649"

><td id="1649"><a href="#1649">1649</a></td></tr
><tr id="gr_svn119_1650"

><td id="1650"><a href="#1650">1650</a></td></tr
><tr id="gr_svn119_1651"

><td id="1651"><a href="#1651">1651</a></td></tr
><tr id="gr_svn119_1652"

><td id="1652"><a href="#1652">1652</a></td></tr
><tr id="gr_svn119_1653"

><td id="1653"><a href="#1653">1653</a></td></tr
><tr id="gr_svn119_1654"

><td id="1654"><a href="#1654">1654</a></td></tr
><tr id="gr_svn119_1655"

><td id="1655"><a href="#1655">1655</a></td></tr
><tr id="gr_svn119_1656"

><td id="1656"><a href="#1656">1656</a></td></tr
><tr id="gr_svn119_1657"

><td id="1657"><a href="#1657">1657</a></td></tr
><tr id="gr_svn119_1658"

><td id="1658"><a href="#1658">1658</a></td></tr
><tr id="gr_svn119_1659"

><td id="1659"><a href="#1659">1659</a></td></tr
><tr id="gr_svn119_1660"

><td id="1660"><a href="#1660">1660</a></td></tr
><tr id="gr_svn119_1661"

><td id="1661"><a href="#1661">1661</a></td></tr
><tr id="gr_svn119_1662"

><td id="1662"><a href="#1662">1662</a></td></tr
><tr id="gr_svn119_1663"

><td id="1663"><a href="#1663">1663</a></td></tr
><tr id="gr_svn119_1664"

><td id="1664"><a href="#1664">1664</a></td></tr
><tr id="gr_svn119_1665"

><td id="1665"><a href="#1665">1665</a></td></tr
><tr id="gr_svn119_1666"

><td id="1666"><a href="#1666">1666</a></td></tr
><tr id="gr_svn119_1667"

><td id="1667"><a href="#1667">1667</a></td></tr
><tr id="gr_svn119_1668"

><td id="1668"><a href="#1668">1668</a></td></tr
><tr id="gr_svn119_1669"

><td id="1669"><a href="#1669">1669</a></td></tr
><tr id="gr_svn119_1670"

><td id="1670"><a href="#1670">1670</a></td></tr
><tr id="gr_svn119_1671"

><td id="1671"><a href="#1671">1671</a></td></tr
><tr id="gr_svn119_1672"

><td id="1672"><a href="#1672">1672</a></td></tr
><tr id="gr_svn119_1673"

><td id="1673"><a href="#1673">1673</a></td></tr
><tr id="gr_svn119_1674"

><td id="1674"><a href="#1674">1674</a></td></tr
><tr id="gr_svn119_1675"

><td id="1675"><a href="#1675">1675</a></td></tr
><tr id="gr_svn119_1676"

><td id="1676"><a href="#1676">1676</a></td></tr
><tr id="gr_svn119_1677"

><td id="1677"><a href="#1677">1677</a></td></tr
><tr id="gr_svn119_1678"

><td id="1678"><a href="#1678">1678</a></td></tr
><tr id="gr_svn119_1679"

><td id="1679"><a href="#1679">1679</a></td></tr
><tr id="gr_svn119_1680"

><td id="1680"><a href="#1680">1680</a></td></tr
><tr id="gr_svn119_1681"

><td id="1681"><a href="#1681">1681</a></td></tr
><tr id="gr_svn119_1682"

><td id="1682"><a href="#1682">1682</a></td></tr
><tr id="gr_svn119_1683"

><td id="1683"><a href="#1683">1683</a></td></tr
><tr id="gr_svn119_1684"

><td id="1684"><a href="#1684">1684</a></td></tr
><tr id="gr_svn119_1685"

><td id="1685"><a href="#1685">1685</a></td></tr
><tr id="gr_svn119_1686"

><td id="1686"><a href="#1686">1686</a></td></tr
><tr id="gr_svn119_1687"

><td id="1687"><a href="#1687">1687</a></td></tr
><tr id="gr_svn119_1688"

><td id="1688"><a href="#1688">1688</a></td></tr
><tr id="gr_svn119_1689"

><td id="1689"><a href="#1689">1689</a></td></tr
><tr id="gr_svn119_1690"

><td id="1690"><a href="#1690">1690</a></td></tr
><tr id="gr_svn119_1691"

><td id="1691"><a href="#1691">1691</a></td></tr
><tr id="gr_svn119_1692"

><td id="1692"><a href="#1692">1692</a></td></tr
><tr id="gr_svn119_1693"

><td id="1693"><a href="#1693">1693</a></td></tr
><tr id="gr_svn119_1694"

><td id="1694"><a href="#1694">1694</a></td></tr
><tr id="gr_svn119_1695"

><td id="1695"><a href="#1695">1695</a></td></tr
><tr id="gr_svn119_1696"

><td id="1696"><a href="#1696">1696</a></td></tr
><tr id="gr_svn119_1697"

><td id="1697"><a href="#1697">1697</a></td></tr
><tr id="gr_svn119_1698"

><td id="1698"><a href="#1698">1698</a></td></tr
><tr id="gr_svn119_1699"

><td id="1699"><a href="#1699">1699</a></td></tr
><tr id="gr_svn119_1700"

><td id="1700"><a href="#1700">1700</a></td></tr
><tr id="gr_svn119_1701"

><td id="1701"><a href="#1701">1701</a></td></tr
><tr id="gr_svn119_1702"

><td id="1702"><a href="#1702">1702</a></td></tr
><tr id="gr_svn119_1703"

><td id="1703"><a href="#1703">1703</a></td></tr
><tr id="gr_svn119_1704"

><td id="1704"><a href="#1704">1704</a></td></tr
><tr id="gr_svn119_1705"

><td id="1705"><a href="#1705">1705</a></td></tr
><tr id="gr_svn119_1706"

><td id="1706"><a href="#1706">1706</a></td></tr
><tr id="gr_svn119_1707"

><td id="1707"><a href="#1707">1707</a></td></tr
><tr id="gr_svn119_1708"

><td id="1708"><a href="#1708">1708</a></td></tr
><tr id="gr_svn119_1709"

><td id="1709"><a href="#1709">1709</a></td></tr
><tr id="gr_svn119_1710"

><td id="1710"><a href="#1710">1710</a></td></tr
><tr id="gr_svn119_1711"

><td id="1711"><a href="#1711">1711</a></td></tr
><tr id="gr_svn119_1712"

><td id="1712"><a href="#1712">1712</a></td></tr
><tr id="gr_svn119_1713"

><td id="1713"><a href="#1713">1713</a></td></tr
><tr id="gr_svn119_1714"

><td id="1714"><a href="#1714">1714</a></td></tr
><tr id="gr_svn119_1715"

><td id="1715"><a href="#1715">1715</a></td></tr
><tr id="gr_svn119_1716"

><td id="1716"><a href="#1716">1716</a></td></tr
><tr id="gr_svn119_1717"

><td id="1717"><a href="#1717">1717</a></td></tr
><tr id="gr_svn119_1718"

><td id="1718"><a href="#1718">1718</a></td></tr
><tr id="gr_svn119_1719"

><td id="1719"><a href="#1719">1719</a></td></tr
><tr id="gr_svn119_1720"

><td id="1720"><a href="#1720">1720</a></td></tr
><tr id="gr_svn119_1721"

><td id="1721"><a href="#1721">1721</a></td></tr
><tr id="gr_svn119_1722"

><td id="1722"><a href="#1722">1722</a></td></tr
><tr id="gr_svn119_1723"

><td id="1723"><a href="#1723">1723</a></td></tr
><tr id="gr_svn119_1724"

><td id="1724"><a href="#1724">1724</a></td></tr
><tr id="gr_svn119_1725"

><td id="1725"><a href="#1725">1725</a></td></tr
><tr id="gr_svn119_1726"

><td id="1726"><a href="#1726">1726</a></td></tr
><tr id="gr_svn119_1727"

><td id="1727"><a href="#1727">1727</a></td></tr
><tr id="gr_svn119_1728"

><td id="1728"><a href="#1728">1728</a></td></tr
><tr id="gr_svn119_1729"

><td id="1729"><a href="#1729">1729</a></td></tr
><tr id="gr_svn119_1730"

><td id="1730"><a href="#1730">1730</a></td></tr
><tr id="gr_svn119_1731"

><td id="1731"><a href="#1731">1731</a></td></tr
><tr id="gr_svn119_1732"

><td id="1732"><a href="#1732">1732</a></td></tr
><tr id="gr_svn119_1733"

><td id="1733"><a href="#1733">1733</a></td></tr
><tr id="gr_svn119_1734"

><td id="1734"><a href="#1734">1734</a></td></tr
><tr id="gr_svn119_1735"

><td id="1735"><a href="#1735">1735</a></td></tr
><tr id="gr_svn119_1736"

><td id="1736"><a href="#1736">1736</a></td></tr
><tr id="gr_svn119_1737"

><td id="1737"><a href="#1737">1737</a></td></tr
><tr id="gr_svn119_1738"

><td id="1738"><a href="#1738">1738</a></td></tr
><tr id="gr_svn119_1739"

><td id="1739"><a href="#1739">1739</a></td></tr
><tr id="gr_svn119_1740"

><td id="1740"><a href="#1740">1740</a></td></tr
><tr id="gr_svn119_1741"

><td id="1741"><a href="#1741">1741</a></td></tr
><tr id="gr_svn119_1742"

><td id="1742"><a href="#1742">1742</a></td></tr
><tr id="gr_svn119_1743"

><td id="1743"><a href="#1743">1743</a></td></tr
><tr id="gr_svn119_1744"

><td id="1744"><a href="#1744">1744</a></td></tr
><tr id="gr_svn119_1745"

><td id="1745"><a href="#1745">1745</a></td></tr
><tr id="gr_svn119_1746"

><td id="1746"><a href="#1746">1746</a></td></tr
><tr id="gr_svn119_1747"

><td id="1747"><a href="#1747">1747</a></td></tr
><tr id="gr_svn119_1748"

><td id="1748"><a href="#1748">1748</a></td></tr
><tr id="gr_svn119_1749"

><td id="1749"><a href="#1749">1749</a></td></tr
><tr id="gr_svn119_1750"

><td id="1750"><a href="#1750">1750</a></td></tr
><tr id="gr_svn119_1751"

><td id="1751"><a href="#1751">1751</a></td></tr
><tr id="gr_svn119_1752"

><td id="1752"><a href="#1752">1752</a></td></tr
><tr id="gr_svn119_1753"

><td id="1753"><a href="#1753">1753</a></td></tr
><tr id="gr_svn119_1754"

><td id="1754"><a href="#1754">1754</a></td></tr
><tr id="gr_svn119_1755"

><td id="1755"><a href="#1755">1755</a></td></tr
><tr id="gr_svn119_1756"

><td id="1756"><a href="#1756">1756</a></td></tr
><tr id="gr_svn119_1757"

><td id="1757"><a href="#1757">1757</a></td></tr
><tr id="gr_svn119_1758"

><td id="1758"><a href="#1758">1758</a></td></tr
><tr id="gr_svn119_1759"

><td id="1759"><a href="#1759">1759</a></td></tr
><tr id="gr_svn119_1760"

><td id="1760"><a href="#1760">1760</a></td></tr
><tr id="gr_svn119_1761"

><td id="1761"><a href="#1761">1761</a></td></tr
><tr id="gr_svn119_1762"

><td id="1762"><a href="#1762">1762</a></td></tr
><tr id="gr_svn119_1763"

><td id="1763"><a href="#1763">1763</a></td></tr
><tr id="gr_svn119_1764"

><td id="1764"><a href="#1764">1764</a></td></tr
><tr id="gr_svn119_1765"

><td id="1765"><a href="#1765">1765</a></td></tr
><tr id="gr_svn119_1766"

><td id="1766"><a href="#1766">1766</a></td></tr
><tr id="gr_svn119_1767"

><td id="1767"><a href="#1767">1767</a></td></tr
><tr id="gr_svn119_1768"

><td id="1768"><a href="#1768">1768</a></td></tr
><tr id="gr_svn119_1769"

><td id="1769"><a href="#1769">1769</a></td></tr
><tr id="gr_svn119_1770"

><td id="1770"><a href="#1770">1770</a></td></tr
><tr id="gr_svn119_1771"

><td id="1771"><a href="#1771">1771</a></td></tr
><tr id="gr_svn119_1772"

><td id="1772"><a href="#1772">1772</a></td></tr
><tr id="gr_svn119_1773"

><td id="1773"><a href="#1773">1773</a></td></tr
><tr id="gr_svn119_1774"

><td id="1774"><a href="#1774">1774</a></td></tr
><tr id="gr_svn119_1775"

><td id="1775"><a href="#1775">1775</a></td></tr
><tr id="gr_svn119_1776"

><td id="1776"><a href="#1776">1776</a></td></tr
><tr id="gr_svn119_1777"

><td id="1777"><a href="#1777">1777</a></td></tr
><tr id="gr_svn119_1778"

><td id="1778"><a href="#1778">1778</a></td></tr
><tr id="gr_svn119_1779"

><td id="1779"><a href="#1779">1779</a></td></tr
><tr id="gr_svn119_1780"

><td id="1780"><a href="#1780">1780</a></td></tr
><tr id="gr_svn119_1781"

><td id="1781"><a href="#1781">1781</a></td></tr
><tr id="gr_svn119_1782"

><td id="1782"><a href="#1782">1782</a></td></tr
><tr id="gr_svn119_1783"

><td id="1783"><a href="#1783">1783</a></td></tr
><tr id="gr_svn119_1784"

><td id="1784"><a href="#1784">1784</a></td></tr
><tr id="gr_svn119_1785"

><td id="1785"><a href="#1785">1785</a></td></tr
><tr id="gr_svn119_1786"

><td id="1786"><a href="#1786">1786</a></td></tr
><tr id="gr_svn119_1787"

><td id="1787"><a href="#1787">1787</a></td></tr
><tr id="gr_svn119_1788"

><td id="1788"><a href="#1788">1788</a></td></tr
><tr id="gr_svn119_1789"

><td id="1789"><a href="#1789">1789</a></td></tr
><tr id="gr_svn119_1790"

><td id="1790"><a href="#1790">1790</a></td></tr
><tr id="gr_svn119_1791"

><td id="1791"><a href="#1791">1791</a></td></tr
><tr id="gr_svn119_1792"

><td id="1792"><a href="#1792">1792</a></td></tr
><tr id="gr_svn119_1793"

><td id="1793"><a href="#1793">1793</a></td></tr
><tr id="gr_svn119_1794"

><td id="1794"><a href="#1794">1794</a></td></tr
><tr id="gr_svn119_1795"

><td id="1795"><a href="#1795">1795</a></td></tr
><tr id="gr_svn119_1796"

><td id="1796"><a href="#1796">1796</a></td></tr
><tr id="gr_svn119_1797"

><td id="1797"><a href="#1797">1797</a></td></tr
><tr id="gr_svn119_1798"

><td id="1798"><a href="#1798">1798</a></td></tr
><tr id="gr_svn119_1799"

><td id="1799"><a href="#1799">1799</a></td></tr
><tr id="gr_svn119_1800"

><td id="1800"><a href="#1800">1800</a></td></tr
><tr id="gr_svn119_1801"

><td id="1801"><a href="#1801">1801</a></td></tr
><tr id="gr_svn119_1802"

><td id="1802"><a href="#1802">1802</a></td></tr
><tr id="gr_svn119_1803"

><td id="1803"><a href="#1803">1803</a></td></tr
><tr id="gr_svn119_1804"

><td id="1804"><a href="#1804">1804</a></td></tr
><tr id="gr_svn119_1805"

><td id="1805"><a href="#1805">1805</a></td></tr
><tr id="gr_svn119_1806"

><td id="1806"><a href="#1806">1806</a></td></tr
><tr id="gr_svn119_1807"

><td id="1807"><a href="#1807">1807</a></td></tr
><tr id="gr_svn119_1808"

><td id="1808"><a href="#1808">1808</a></td></tr
><tr id="gr_svn119_1809"

><td id="1809"><a href="#1809">1809</a></td></tr
><tr id="gr_svn119_1810"

><td id="1810"><a href="#1810">1810</a></td></tr
><tr id="gr_svn119_1811"

><td id="1811"><a href="#1811">1811</a></td></tr
><tr id="gr_svn119_1812"

><td id="1812"><a href="#1812">1812</a></td></tr
><tr id="gr_svn119_1813"

><td id="1813"><a href="#1813">1813</a></td></tr
><tr id="gr_svn119_1814"

><td id="1814"><a href="#1814">1814</a></td></tr
><tr id="gr_svn119_1815"

><td id="1815"><a href="#1815">1815</a></td></tr
><tr id="gr_svn119_1816"

><td id="1816"><a href="#1816">1816</a></td></tr
><tr id="gr_svn119_1817"

><td id="1817"><a href="#1817">1817</a></td></tr
><tr id="gr_svn119_1818"

><td id="1818"><a href="#1818">1818</a></td></tr
><tr id="gr_svn119_1819"

><td id="1819"><a href="#1819">1819</a></td></tr
><tr id="gr_svn119_1820"

><td id="1820"><a href="#1820">1820</a></td></tr
><tr id="gr_svn119_1821"

><td id="1821"><a href="#1821">1821</a></td></tr
><tr id="gr_svn119_1822"

><td id="1822"><a href="#1822">1822</a></td></tr
><tr id="gr_svn119_1823"

><td id="1823"><a href="#1823">1823</a></td></tr
><tr id="gr_svn119_1824"

><td id="1824"><a href="#1824">1824</a></td></tr
><tr id="gr_svn119_1825"

><td id="1825"><a href="#1825">1825</a></td></tr
><tr id="gr_svn119_1826"

><td id="1826"><a href="#1826">1826</a></td></tr
><tr id="gr_svn119_1827"

><td id="1827"><a href="#1827">1827</a></td></tr
><tr id="gr_svn119_1828"

><td id="1828"><a href="#1828">1828</a></td></tr
><tr id="gr_svn119_1829"

><td id="1829"><a href="#1829">1829</a></td></tr
><tr id="gr_svn119_1830"

><td id="1830"><a href="#1830">1830</a></td></tr
><tr id="gr_svn119_1831"

><td id="1831"><a href="#1831">1831</a></td></tr
><tr id="gr_svn119_1832"

><td id="1832"><a href="#1832">1832</a></td></tr
><tr id="gr_svn119_1833"

><td id="1833"><a href="#1833">1833</a></td></tr
><tr id="gr_svn119_1834"

><td id="1834"><a href="#1834">1834</a></td></tr
><tr id="gr_svn119_1835"

><td id="1835"><a href="#1835">1835</a></td></tr
><tr id="gr_svn119_1836"

><td id="1836"><a href="#1836">1836</a></td></tr
><tr id="gr_svn119_1837"

><td id="1837"><a href="#1837">1837</a></td></tr
><tr id="gr_svn119_1838"

><td id="1838"><a href="#1838">1838</a></td></tr
><tr id="gr_svn119_1839"

><td id="1839"><a href="#1839">1839</a></td></tr
><tr id="gr_svn119_1840"

><td id="1840"><a href="#1840">1840</a></td></tr
><tr id="gr_svn119_1841"

><td id="1841"><a href="#1841">1841</a></td></tr
><tr id="gr_svn119_1842"

><td id="1842"><a href="#1842">1842</a></td></tr
><tr id="gr_svn119_1843"

><td id="1843"><a href="#1843">1843</a></td></tr
><tr id="gr_svn119_1844"

><td id="1844"><a href="#1844">1844</a></td></tr
><tr id="gr_svn119_1845"

><td id="1845"><a href="#1845">1845</a></td></tr
><tr id="gr_svn119_1846"

><td id="1846"><a href="#1846">1846</a></td></tr
><tr id="gr_svn119_1847"

><td id="1847"><a href="#1847">1847</a></td></tr
><tr id="gr_svn119_1848"

><td id="1848"><a href="#1848">1848</a></td></tr
><tr id="gr_svn119_1849"

><td id="1849"><a href="#1849">1849</a></td></tr
><tr id="gr_svn119_1850"

><td id="1850"><a href="#1850">1850</a></td></tr
><tr id="gr_svn119_1851"

><td id="1851"><a href="#1851">1851</a></td></tr
><tr id="gr_svn119_1852"

><td id="1852"><a href="#1852">1852</a></td></tr
><tr id="gr_svn119_1853"

><td id="1853"><a href="#1853">1853</a></td></tr
><tr id="gr_svn119_1854"

><td id="1854"><a href="#1854">1854</a></td></tr
><tr id="gr_svn119_1855"

><td id="1855"><a href="#1855">1855</a></td></tr
><tr id="gr_svn119_1856"

><td id="1856"><a href="#1856">1856</a></td></tr
><tr id="gr_svn119_1857"

><td id="1857"><a href="#1857">1857</a></td></tr
><tr id="gr_svn119_1858"

><td id="1858"><a href="#1858">1858</a></td></tr
><tr id="gr_svn119_1859"

><td id="1859"><a href="#1859">1859</a></td></tr
><tr id="gr_svn119_1860"

><td id="1860"><a href="#1860">1860</a></td></tr
><tr id="gr_svn119_1861"

><td id="1861"><a href="#1861">1861</a></td></tr
><tr id="gr_svn119_1862"

><td id="1862"><a href="#1862">1862</a></td></tr
><tr id="gr_svn119_1863"

><td id="1863"><a href="#1863">1863</a></td></tr
><tr id="gr_svn119_1864"

><td id="1864"><a href="#1864">1864</a></td></tr
><tr id="gr_svn119_1865"

><td id="1865"><a href="#1865">1865</a></td></tr
><tr id="gr_svn119_1866"

><td id="1866"><a href="#1866">1866</a></td></tr
><tr id="gr_svn119_1867"

><td id="1867"><a href="#1867">1867</a></td></tr
><tr id="gr_svn119_1868"

><td id="1868"><a href="#1868">1868</a></td></tr
><tr id="gr_svn119_1869"

><td id="1869"><a href="#1869">1869</a></td></tr
><tr id="gr_svn119_1870"

><td id="1870"><a href="#1870">1870</a></td></tr
><tr id="gr_svn119_1871"

><td id="1871"><a href="#1871">1871</a></td></tr
><tr id="gr_svn119_1872"

><td id="1872"><a href="#1872">1872</a></td></tr
><tr id="gr_svn119_1873"

><td id="1873"><a href="#1873">1873</a></td></tr
><tr id="gr_svn119_1874"

><td id="1874"><a href="#1874">1874</a></td></tr
><tr id="gr_svn119_1875"

><td id="1875"><a href="#1875">1875</a></td></tr
><tr id="gr_svn119_1876"

><td id="1876"><a href="#1876">1876</a></td></tr
><tr id="gr_svn119_1877"

><td id="1877"><a href="#1877">1877</a></td></tr
><tr id="gr_svn119_1878"

><td id="1878"><a href="#1878">1878</a></td></tr
><tr id="gr_svn119_1879"

><td id="1879"><a href="#1879">1879</a></td></tr
><tr id="gr_svn119_1880"

><td id="1880"><a href="#1880">1880</a></td></tr
><tr id="gr_svn119_1881"

><td id="1881"><a href="#1881">1881</a></td></tr
><tr id="gr_svn119_1882"

><td id="1882"><a href="#1882">1882</a></td></tr
><tr id="gr_svn119_1883"

><td id="1883"><a href="#1883">1883</a></td></tr
><tr id="gr_svn119_1884"

><td id="1884"><a href="#1884">1884</a></td></tr
><tr id="gr_svn119_1885"

><td id="1885"><a href="#1885">1885</a></td></tr
><tr id="gr_svn119_1886"

><td id="1886"><a href="#1886">1886</a></td></tr
><tr id="gr_svn119_1887"

><td id="1887"><a href="#1887">1887</a></td></tr
><tr id="gr_svn119_1888"

><td id="1888"><a href="#1888">1888</a></td></tr
><tr id="gr_svn119_1889"

><td id="1889"><a href="#1889">1889</a></td></tr
><tr id="gr_svn119_1890"

><td id="1890"><a href="#1890">1890</a></td></tr
><tr id="gr_svn119_1891"

><td id="1891"><a href="#1891">1891</a></td></tr
><tr id="gr_svn119_1892"

><td id="1892"><a href="#1892">1892</a></td></tr
><tr id="gr_svn119_1893"

><td id="1893"><a href="#1893">1893</a></td></tr
><tr id="gr_svn119_1894"

><td id="1894"><a href="#1894">1894</a></td></tr
><tr id="gr_svn119_1895"

><td id="1895"><a href="#1895">1895</a></td></tr
><tr id="gr_svn119_1896"

><td id="1896"><a href="#1896">1896</a></td></tr
><tr id="gr_svn119_1897"

><td id="1897"><a href="#1897">1897</a></td></tr
><tr id="gr_svn119_1898"

><td id="1898"><a href="#1898">1898</a></td></tr
><tr id="gr_svn119_1899"

><td id="1899"><a href="#1899">1899</a></td></tr
><tr id="gr_svn119_1900"

><td id="1900"><a href="#1900">1900</a></td></tr
><tr id="gr_svn119_1901"

><td id="1901"><a href="#1901">1901</a></td></tr
><tr id="gr_svn119_1902"

><td id="1902"><a href="#1902">1902</a></td></tr
><tr id="gr_svn119_1903"

><td id="1903"><a href="#1903">1903</a></td></tr
><tr id="gr_svn119_1904"

><td id="1904"><a href="#1904">1904</a></td></tr
><tr id="gr_svn119_1905"

><td id="1905"><a href="#1905">1905</a></td></tr
><tr id="gr_svn119_1906"

><td id="1906"><a href="#1906">1906</a></td></tr
><tr id="gr_svn119_1907"

><td id="1907"><a href="#1907">1907</a></td></tr
><tr id="gr_svn119_1908"

><td id="1908"><a href="#1908">1908</a></td></tr
><tr id="gr_svn119_1909"

><td id="1909"><a href="#1909">1909</a></td></tr
><tr id="gr_svn119_1910"

><td id="1910"><a href="#1910">1910</a></td></tr
><tr id="gr_svn119_1911"

><td id="1911"><a href="#1911">1911</a></td></tr
><tr id="gr_svn119_1912"

><td id="1912"><a href="#1912">1912</a></td></tr
><tr id="gr_svn119_1913"

><td id="1913"><a href="#1913">1913</a></td></tr
><tr id="gr_svn119_1914"

><td id="1914"><a href="#1914">1914</a></td></tr
><tr id="gr_svn119_1915"

><td id="1915"><a href="#1915">1915</a></td></tr
><tr id="gr_svn119_1916"

><td id="1916"><a href="#1916">1916</a></td></tr
><tr id="gr_svn119_1917"

><td id="1917"><a href="#1917">1917</a></td></tr
><tr id="gr_svn119_1918"

><td id="1918"><a href="#1918">1918</a></td></tr
><tr id="gr_svn119_1919"

><td id="1919"><a href="#1919">1919</a></td></tr
><tr id="gr_svn119_1920"

><td id="1920"><a href="#1920">1920</a></td></tr
><tr id="gr_svn119_1921"

><td id="1921"><a href="#1921">1921</a></td></tr
><tr id="gr_svn119_1922"

><td id="1922"><a href="#1922">1922</a></td></tr
><tr id="gr_svn119_1923"

><td id="1923"><a href="#1923">1923</a></td></tr
><tr id="gr_svn119_1924"

><td id="1924"><a href="#1924">1924</a></td></tr
><tr id="gr_svn119_1925"

><td id="1925"><a href="#1925">1925</a></td></tr
><tr id="gr_svn119_1926"

><td id="1926"><a href="#1926">1926</a></td></tr
><tr id="gr_svn119_1927"

><td id="1927"><a href="#1927">1927</a></td></tr
><tr id="gr_svn119_1928"

><td id="1928"><a href="#1928">1928</a></td></tr
><tr id="gr_svn119_1929"

><td id="1929"><a href="#1929">1929</a></td></tr
><tr id="gr_svn119_1930"

><td id="1930"><a href="#1930">1930</a></td></tr
><tr id="gr_svn119_1931"

><td id="1931"><a href="#1931">1931</a></td></tr
><tr id="gr_svn119_1932"

><td id="1932"><a href="#1932">1932</a></td></tr
><tr id="gr_svn119_1933"

><td id="1933"><a href="#1933">1933</a></td></tr
><tr id="gr_svn119_1934"

><td id="1934"><a href="#1934">1934</a></td></tr
><tr id="gr_svn119_1935"

><td id="1935"><a href="#1935">1935</a></td></tr
><tr id="gr_svn119_1936"

><td id="1936"><a href="#1936">1936</a></td></tr
><tr id="gr_svn119_1937"

><td id="1937"><a href="#1937">1937</a></td></tr
><tr id="gr_svn119_1938"

><td id="1938"><a href="#1938">1938</a></td></tr
><tr id="gr_svn119_1939"

><td id="1939"><a href="#1939">1939</a></td></tr
><tr id="gr_svn119_1940"

><td id="1940"><a href="#1940">1940</a></td></tr
><tr id="gr_svn119_1941"

><td id="1941"><a href="#1941">1941</a></td></tr
><tr id="gr_svn119_1942"

><td id="1942"><a href="#1942">1942</a></td></tr
><tr id="gr_svn119_1943"

><td id="1943"><a href="#1943">1943</a></td></tr
><tr id="gr_svn119_1944"

><td id="1944"><a href="#1944">1944</a></td></tr
><tr id="gr_svn119_1945"

><td id="1945"><a href="#1945">1945</a></td></tr
><tr id="gr_svn119_1946"

><td id="1946"><a href="#1946">1946</a></td></tr
><tr id="gr_svn119_1947"

><td id="1947"><a href="#1947">1947</a></td></tr
><tr id="gr_svn119_1948"

><td id="1948"><a href="#1948">1948</a></td></tr
><tr id="gr_svn119_1949"

><td id="1949"><a href="#1949">1949</a></td></tr
><tr id="gr_svn119_1950"

><td id="1950"><a href="#1950">1950</a></td></tr
><tr id="gr_svn119_1951"

><td id="1951"><a href="#1951">1951</a></td></tr
><tr id="gr_svn119_1952"

><td id="1952"><a href="#1952">1952</a></td></tr
><tr id="gr_svn119_1953"

><td id="1953"><a href="#1953">1953</a></td></tr
><tr id="gr_svn119_1954"

><td id="1954"><a href="#1954">1954</a></td></tr
><tr id="gr_svn119_1955"

><td id="1955"><a href="#1955">1955</a></td></tr
><tr id="gr_svn119_1956"

><td id="1956"><a href="#1956">1956</a></td></tr
><tr id="gr_svn119_1957"

><td id="1957"><a href="#1957">1957</a></td></tr
><tr id="gr_svn119_1958"

><td id="1958"><a href="#1958">1958</a></td></tr
><tr id="gr_svn119_1959"

><td id="1959"><a href="#1959">1959</a></td></tr
><tr id="gr_svn119_1960"

><td id="1960"><a href="#1960">1960</a></td></tr
><tr id="gr_svn119_1961"

><td id="1961"><a href="#1961">1961</a></td></tr
><tr id="gr_svn119_1962"

><td id="1962"><a href="#1962">1962</a></td></tr
><tr id="gr_svn119_1963"

><td id="1963"><a href="#1963">1963</a></td></tr
><tr id="gr_svn119_1964"

><td id="1964"><a href="#1964">1964</a></td></tr
><tr id="gr_svn119_1965"

><td id="1965"><a href="#1965">1965</a></td></tr
><tr id="gr_svn119_1966"

><td id="1966"><a href="#1966">1966</a></td></tr
><tr id="gr_svn119_1967"

><td id="1967"><a href="#1967">1967</a></td></tr
><tr id="gr_svn119_1968"

><td id="1968"><a href="#1968">1968</a></td></tr
><tr id="gr_svn119_1969"

><td id="1969"><a href="#1969">1969</a></td></tr
><tr id="gr_svn119_1970"

><td id="1970"><a href="#1970">1970</a></td></tr
><tr id="gr_svn119_1971"

><td id="1971"><a href="#1971">1971</a></td></tr
><tr id="gr_svn119_1972"

><td id="1972"><a href="#1972">1972</a></td></tr
><tr id="gr_svn119_1973"

><td id="1973"><a href="#1973">1973</a></td></tr
><tr id="gr_svn119_1974"

><td id="1974"><a href="#1974">1974</a></td></tr
><tr id="gr_svn119_1975"

><td id="1975"><a href="#1975">1975</a></td></tr
><tr id="gr_svn119_1976"

><td id="1976"><a href="#1976">1976</a></td></tr
><tr id="gr_svn119_1977"

><td id="1977"><a href="#1977">1977</a></td></tr
><tr id="gr_svn119_1978"

><td id="1978"><a href="#1978">1978</a></td></tr
><tr id="gr_svn119_1979"

><td id="1979"><a href="#1979">1979</a></td></tr
><tr id="gr_svn119_1980"

><td id="1980"><a href="#1980">1980</a></td></tr
><tr id="gr_svn119_1981"

><td id="1981"><a href="#1981">1981</a></td></tr
><tr id="gr_svn119_1982"

><td id="1982"><a href="#1982">1982</a></td></tr
><tr id="gr_svn119_1983"

><td id="1983"><a href="#1983">1983</a></td></tr
><tr id="gr_svn119_1984"

><td id="1984"><a href="#1984">1984</a></td></tr
><tr id="gr_svn119_1985"

><td id="1985"><a href="#1985">1985</a></td></tr
><tr id="gr_svn119_1986"

><td id="1986"><a href="#1986">1986</a></td></tr
><tr id="gr_svn119_1987"

><td id="1987"><a href="#1987">1987</a></td></tr
><tr id="gr_svn119_1988"

><td id="1988"><a href="#1988">1988</a></td></tr
><tr id="gr_svn119_1989"

><td id="1989"><a href="#1989">1989</a></td></tr
><tr id="gr_svn119_1990"

><td id="1990"><a href="#1990">1990</a></td></tr
><tr id="gr_svn119_1991"

><td id="1991"><a href="#1991">1991</a></td></tr
><tr id="gr_svn119_1992"

><td id="1992"><a href="#1992">1992</a></td></tr
><tr id="gr_svn119_1993"

><td id="1993"><a href="#1993">1993</a></td></tr
><tr id="gr_svn119_1994"

><td id="1994"><a href="#1994">1994</a></td></tr
><tr id="gr_svn119_1995"

><td id="1995"><a href="#1995">1995</a></td></tr
><tr id="gr_svn119_1996"

><td id="1996"><a href="#1996">1996</a></td></tr
><tr id="gr_svn119_1997"

><td id="1997"><a href="#1997">1997</a></td></tr
><tr id="gr_svn119_1998"

><td id="1998"><a href="#1998">1998</a></td></tr
><tr id="gr_svn119_1999"

><td id="1999"><a href="#1999">1999</a></td></tr
><tr id="gr_svn119_2000"

><td id="2000"><a href="#2000">2000</a></td></tr
><tr id="gr_svn119_2001"

><td id="2001"><a href="#2001">2001</a></td></tr
><tr id="gr_svn119_2002"

><td id="2002"><a href="#2002">2002</a></td></tr
><tr id="gr_svn119_2003"

><td id="2003"><a href="#2003">2003</a></td></tr
><tr id="gr_svn119_2004"

><td id="2004"><a href="#2004">2004</a></td></tr
><tr id="gr_svn119_2005"

><td id="2005"><a href="#2005">2005</a></td></tr
><tr id="gr_svn119_2006"

><td id="2006"><a href="#2006">2006</a></td></tr
><tr id="gr_svn119_2007"

><td id="2007"><a href="#2007">2007</a></td></tr
><tr id="gr_svn119_2008"

><td id="2008"><a href="#2008">2008</a></td></tr
><tr id="gr_svn119_2009"

><td id="2009"><a href="#2009">2009</a></td></tr
><tr id="gr_svn119_2010"

><td id="2010"><a href="#2010">2010</a></td></tr
><tr id="gr_svn119_2011"

><td id="2011"><a href="#2011">2011</a></td></tr
><tr id="gr_svn119_2012"

><td id="2012"><a href="#2012">2012</a></td></tr
><tr id="gr_svn119_2013"

><td id="2013"><a href="#2013">2013</a></td></tr
><tr id="gr_svn119_2014"

><td id="2014"><a href="#2014">2014</a></td></tr
><tr id="gr_svn119_2015"

><td id="2015"><a href="#2015">2015</a></td></tr
><tr id="gr_svn119_2016"

><td id="2016"><a href="#2016">2016</a></td></tr
><tr id="gr_svn119_2017"

><td id="2017"><a href="#2017">2017</a></td></tr
><tr id="gr_svn119_2018"

><td id="2018"><a href="#2018">2018</a></td></tr
><tr id="gr_svn119_2019"

><td id="2019"><a href="#2019">2019</a></td></tr
><tr id="gr_svn119_2020"

><td id="2020"><a href="#2020">2020</a></td></tr
><tr id="gr_svn119_2021"

><td id="2021"><a href="#2021">2021</a></td></tr
><tr id="gr_svn119_2022"

><td id="2022"><a href="#2022">2022</a></td></tr
><tr id="gr_svn119_2023"

><td id="2023"><a href="#2023">2023</a></td></tr
><tr id="gr_svn119_2024"

><td id="2024"><a href="#2024">2024</a></td></tr
><tr id="gr_svn119_2025"

><td id="2025"><a href="#2025">2025</a></td></tr
><tr id="gr_svn119_2026"

><td id="2026"><a href="#2026">2026</a></td></tr
><tr id="gr_svn119_2027"

><td id="2027"><a href="#2027">2027</a></td></tr
><tr id="gr_svn119_2028"

><td id="2028"><a href="#2028">2028</a></td></tr
><tr id="gr_svn119_2029"

><td id="2029"><a href="#2029">2029</a></td></tr
><tr id="gr_svn119_2030"

><td id="2030"><a href="#2030">2030</a></td></tr
><tr id="gr_svn119_2031"

><td id="2031"><a href="#2031">2031</a></td></tr
><tr id="gr_svn119_2032"

><td id="2032"><a href="#2032">2032</a></td></tr
><tr id="gr_svn119_2033"

><td id="2033"><a href="#2033">2033</a></td></tr
><tr id="gr_svn119_2034"

><td id="2034"><a href="#2034">2034</a></td></tr
><tr id="gr_svn119_2035"

><td id="2035"><a href="#2035">2035</a></td></tr
><tr id="gr_svn119_2036"

><td id="2036"><a href="#2036">2036</a></td></tr
><tr id="gr_svn119_2037"

><td id="2037"><a href="#2037">2037</a></td></tr
><tr id="gr_svn119_2038"

><td id="2038"><a href="#2038">2038</a></td></tr
><tr id="gr_svn119_2039"

><td id="2039"><a href="#2039">2039</a></td></tr
><tr id="gr_svn119_2040"

><td id="2040"><a href="#2040">2040</a></td></tr
><tr id="gr_svn119_2041"

><td id="2041"><a href="#2041">2041</a></td></tr
><tr id="gr_svn119_2042"

><td id="2042"><a href="#2042">2042</a></td></tr
><tr id="gr_svn119_2043"

><td id="2043"><a href="#2043">2043</a></td></tr
><tr id="gr_svn119_2044"

><td id="2044"><a href="#2044">2044</a></td></tr
><tr id="gr_svn119_2045"

><td id="2045"><a href="#2045">2045</a></td></tr
><tr id="gr_svn119_2046"

><td id="2046"><a href="#2046">2046</a></td></tr
><tr id="gr_svn119_2047"

><td id="2047"><a href="#2047">2047</a></td></tr
><tr id="gr_svn119_2048"

><td id="2048"><a href="#2048">2048</a></td></tr
><tr id="gr_svn119_2049"

><td id="2049"><a href="#2049">2049</a></td></tr
><tr id="gr_svn119_2050"

><td id="2050"><a href="#2050">2050</a></td></tr
><tr id="gr_svn119_2051"

><td id="2051"><a href="#2051">2051</a></td></tr
><tr id="gr_svn119_2052"

><td id="2052"><a href="#2052">2052</a></td></tr
><tr id="gr_svn119_2053"

><td id="2053"><a href="#2053">2053</a></td></tr
><tr id="gr_svn119_2054"

><td id="2054"><a href="#2054">2054</a></td></tr
><tr id="gr_svn119_2055"

><td id="2055"><a href="#2055">2055</a></td></tr
><tr id="gr_svn119_2056"

><td id="2056"><a href="#2056">2056</a></td></tr
><tr id="gr_svn119_2057"

><td id="2057"><a href="#2057">2057</a></td></tr
><tr id="gr_svn119_2058"

><td id="2058"><a href="#2058">2058</a></td></tr
><tr id="gr_svn119_2059"

><td id="2059"><a href="#2059">2059</a></td></tr
><tr id="gr_svn119_2060"

><td id="2060"><a href="#2060">2060</a></td></tr
><tr id="gr_svn119_2061"

><td id="2061"><a href="#2061">2061</a></td></tr
><tr id="gr_svn119_2062"

><td id="2062"><a href="#2062">2062</a></td></tr
><tr id="gr_svn119_2063"

><td id="2063"><a href="#2063">2063</a></td></tr
><tr id="gr_svn119_2064"

><td id="2064"><a href="#2064">2064</a></td></tr
><tr id="gr_svn119_2065"

><td id="2065"><a href="#2065">2065</a></td></tr
><tr id="gr_svn119_2066"

><td id="2066"><a href="#2066">2066</a></td></tr
><tr id="gr_svn119_2067"

><td id="2067"><a href="#2067">2067</a></td></tr
><tr id="gr_svn119_2068"

><td id="2068"><a href="#2068">2068</a></td></tr
><tr id="gr_svn119_2069"

><td id="2069"><a href="#2069">2069</a></td></tr
><tr id="gr_svn119_2070"

><td id="2070"><a href="#2070">2070</a></td></tr
><tr id="gr_svn119_2071"

><td id="2071"><a href="#2071">2071</a></td></tr
><tr id="gr_svn119_2072"

><td id="2072"><a href="#2072">2072</a></td></tr
><tr id="gr_svn119_2073"

><td id="2073"><a href="#2073">2073</a></td></tr
><tr id="gr_svn119_2074"

><td id="2074"><a href="#2074">2074</a></td></tr
><tr id="gr_svn119_2075"

><td id="2075"><a href="#2075">2075</a></td></tr
><tr id="gr_svn119_2076"

><td id="2076"><a href="#2076">2076</a></td></tr
><tr id="gr_svn119_2077"

><td id="2077"><a href="#2077">2077</a></td></tr
><tr id="gr_svn119_2078"

><td id="2078"><a href="#2078">2078</a></td></tr
><tr id="gr_svn119_2079"

><td id="2079"><a href="#2079">2079</a></td></tr
><tr id="gr_svn119_2080"

><td id="2080"><a href="#2080">2080</a></td></tr
><tr id="gr_svn119_2081"

><td id="2081"><a href="#2081">2081</a></td></tr
><tr id="gr_svn119_2082"

><td id="2082"><a href="#2082">2082</a></td></tr
><tr id="gr_svn119_2083"

><td id="2083"><a href="#2083">2083</a></td></tr
><tr id="gr_svn119_2084"

><td id="2084"><a href="#2084">2084</a></td></tr
><tr id="gr_svn119_2085"

><td id="2085"><a href="#2085">2085</a></td></tr
><tr id="gr_svn119_2086"

><td id="2086"><a href="#2086">2086</a></td></tr
><tr id="gr_svn119_2087"

><td id="2087"><a href="#2087">2087</a></td></tr
><tr id="gr_svn119_2088"

><td id="2088"><a href="#2088">2088</a></td></tr
><tr id="gr_svn119_2089"

><td id="2089"><a href="#2089">2089</a></td></tr
><tr id="gr_svn119_2090"

><td id="2090"><a href="#2090">2090</a></td></tr
><tr id="gr_svn119_2091"

><td id="2091"><a href="#2091">2091</a></td></tr
><tr id="gr_svn119_2092"

><td id="2092"><a href="#2092">2092</a></td></tr
><tr id="gr_svn119_2093"

><td id="2093"><a href="#2093">2093</a></td></tr
><tr id="gr_svn119_2094"

><td id="2094"><a href="#2094">2094</a></td></tr
><tr id="gr_svn119_2095"

><td id="2095"><a href="#2095">2095</a></td></tr
><tr id="gr_svn119_2096"

><td id="2096"><a href="#2096">2096</a></td></tr
><tr id="gr_svn119_2097"

><td id="2097"><a href="#2097">2097</a></td></tr
><tr id="gr_svn119_2098"

><td id="2098"><a href="#2098">2098</a></td></tr
><tr id="gr_svn119_2099"

><td id="2099"><a href="#2099">2099</a></td></tr
><tr id="gr_svn119_2100"

><td id="2100"><a href="#2100">2100</a></td></tr
><tr id="gr_svn119_2101"

><td id="2101"><a href="#2101">2101</a></td></tr
><tr id="gr_svn119_2102"

><td id="2102"><a href="#2102">2102</a></td></tr
><tr id="gr_svn119_2103"

><td id="2103"><a href="#2103">2103</a></td></tr
><tr id="gr_svn119_2104"

><td id="2104"><a href="#2104">2104</a></td></tr
><tr id="gr_svn119_2105"

><td id="2105"><a href="#2105">2105</a></td></tr
><tr id="gr_svn119_2106"

><td id="2106"><a href="#2106">2106</a></td></tr
><tr id="gr_svn119_2107"

><td id="2107"><a href="#2107">2107</a></td></tr
><tr id="gr_svn119_2108"

><td id="2108"><a href="#2108">2108</a></td></tr
><tr id="gr_svn119_2109"

><td id="2109"><a href="#2109">2109</a></td></tr
><tr id="gr_svn119_2110"

><td id="2110"><a href="#2110">2110</a></td></tr
><tr id="gr_svn119_2111"

><td id="2111"><a href="#2111">2111</a></td></tr
><tr id="gr_svn119_2112"

><td id="2112"><a href="#2112">2112</a></td></tr
><tr id="gr_svn119_2113"

><td id="2113"><a href="#2113">2113</a></td></tr
><tr id="gr_svn119_2114"

><td id="2114"><a href="#2114">2114</a></td></tr
><tr id="gr_svn119_2115"

><td id="2115"><a href="#2115">2115</a></td></tr
><tr id="gr_svn119_2116"

><td id="2116"><a href="#2116">2116</a></td></tr
><tr id="gr_svn119_2117"

><td id="2117"><a href="#2117">2117</a></td></tr
><tr id="gr_svn119_2118"

><td id="2118"><a href="#2118">2118</a></td></tr
><tr id="gr_svn119_2119"

><td id="2119"><a href="#2119">2119</a></td></tr
><tr id="gr_svn119_2120"

><td id="2120"><a href="#2120">2120</a></td></tr
><tr id="gr_svn119_2121"

><td id="2121"><a href="#2121">2121</a></td></tr
><tr id="gr_svn119_2122"

><td id="2122"><a href="#2122">2122</a></td></tr
><tr id="gr_svn119_2123"

><td id="2123"><a href="#2123">2123</a></td></tr
><tr id="gr_svn119_2124"

><td id="2124"><a href="#2124">2124</a></td></tr
><tr id="gr_svn119_2125"

><td id="2125"><a href="#2125">2125</a></td></tr
><tr id="gr_svn119_2126"

><td id="2126"><a href="#2126">2126</a></td></tr
><tr id="gr_svn119_2127"

><td id="2127"><a href="#2127">2127</a></td></tr
><tr id="gr_svn119_2128"

><td id="2128"><a href="#2128">2128</a></td></tr
><tr id="gr_svn119_2129"

><td id="2129"><a href="#2129">2129</a></td></tr
><tr id="gr_svn119_2130"

><td id="2130"><a href="#2130">2130</a></td></tr
><tr id="gr_svn119_2131"

><td id="2131"><a href="#2131">2131</a></td></tr
><tr id="gr_svn119_2132"

><td id="2132"><a href="#2132">2132</a></td></tr
><tr id="gr_svn119_2133"

><td id="2133"><a href="#2133">2133</a></td></tr
><tr id="gr_svn119_2134"

><td id="2134"><a href="#2134">2134</a></td></tr
><tr id="gr_svn119_2135"

><td id="2135"><a href="#2135">2135</a></td></tr
><tr id="gr_svn119_2136"

><td id="2136"><a href="#2136">2136</a></td></tr
><tr id="gr_svn119_2137"

><td id="2137"><a href="#2137">2137</a></td></tr
><tr id="gr_svn119_2138"

><td id="2138"><a href="#2138">2138</a></td></tr
><tr id="gr_svn119_2139"

><td id="2139"><a href="#2139">2139</a></td></tr
><tr id="gr_svn119_2140"

><td id="2140"><a href="#2140">2140</a></td></tr
><tr id="gr_svn119_2141"

><td id="2141"><a href="#2141">2141</a></td></tr
><tr id="gr_svn119_2142"

><td id="2142"><a href="#2142">2142</a></td></tr
><tr id="gr_svn119_2143"

><td id="2143"><a href="#2143">2143</a></td></tr
><tr id="gr_svn119_2144"

><td id="2144"><a href="#2144">2144</a></td></tr
><tr id="gr_svn119_2145"

><td id="2145"><a href="#2145">2145</a></td></tr
><tr id="gr_svn119_2146"

><td id="2146"><a href="#2146">2146</a></td></tr
><tr id="gr_svn119_2147"

><td id="2147"><a href="#2147">2147</a></td></tr
><tr id="gr_svn119_2148"

><td id="2148"><a href="#2148">2148</a></td></tr
><tr id="gr_svn119_2149"

><td id="2149"><a href="#2149">2149</a></td></tr
><tr id="gr_svn119_2150"

><td id="2150"><a href="#2150">2150</a></td></tr
><tr id="gr_svn119_2151"

><td id="2151"><a href="#2151">2151</a></td></tr
><tr id="gr_svn119_2152"

><td id="2152"><a href="#2152">2152</a></td></tr
><tr id="gr_svn119_2153"

><td id="2153"><a href="#2153">2153</a></td></tr
><tr id="gr_svn119_2154"

><td id="2154"><a href="#2154">2154</a></td></tr
><tr id="gr_svn119_2155"

><td id="2155"><a href="#2155">2155</a></td></tr
><tr id="gr_svn119_2156"

><td id="2156"><a href="#2156">2156</a></td></tr
><tr id="gr_svn119_2157"

><td id="2157"><a href="#2157">2157</a></td></tr
><tr id="gr_svn119_2158"

><td id="2158"><a href="#2158">2158</a></td></tr
><tr id="gr_svn119_2159"

><td id="2159"><a href="#2159">2159</a></td></tr
><tr id="gr_svn119_2160"

><td id="2160"><a href="#2160">2160</a></td></tr
><tr id="gr_svn119_2161"

><td id="2161"><a href="#2161">2161</a></td></tr
><tr id="gr_svn119_2162"

><td id="2162"><a href="#2162">2162</a></td></tr
><tr id="gr_svn119_2163"

><td id="2163"><a href="#2163">2163</a></td></tr
><tr id="gr_svn119_2164"

><td id="2164"><a href="#2164">2164</a></td></tr
><tr id="gr_svn119_2165"

><td id="2165"><a href="#2165">2165</a></td></tr
><tr id="gr_svn119_2166"

><td id="2166"><a href="#2166">2166</a></td></tr
><tr id="gr_svn119_2167"

><td id="2167"><a href="#2167">2167</a></td></tr
><tr id="gr_svn119_2168"

><td id="2168"><a href="#2168">2168</a></td></tr
><tr id="gr_svn119_2169"

><td id="2169"><a href="#2169">2169</a></td></tr
><tr id="gr_svn119_2170"

><td id="2170"><a href="#2170">2170</a></td></tr
><tr id="gr_svn119_2171"

><td id="2171"><a href="#2171">2171</a></td></tr
><tr id="gr_svn119_2172"

><td id="2172"><a href="#2172">2172</a></td></tr
><tr id="gr_svn119_2173"

><td id="2173"><a href="#2173">2173</a></td></tr
><tr id="gr_svn119_2174"

><td id="2174"><a href="#2174">2174</a></td></tr
><tr id="gr_svn119_2175"

><td id="2175"><a href="#2175">2175</a></td></tr
><tr id="gr_svn119_2176"

><td id="2176"><a href="#2176">2176</a></td></tr
><tr id="gr_svn119_2177"

><td id="2177"><a href="#2177">2177</a></td></tr
><tr id="gr_svn119_2178"

><td id="2178"><a href="#2178">2178</a></td></tr
><tr id="gr_svn119_2179"

><td id="2179"><a href="#2179">2179</a></td></tr
><tr id="gr_svn119_2180"

><td id="2180"><a href="#2180">2180</a></td></tr
><tr id="gr_svn119_2181"

><td id="2181"><a href="#2181">2181</a></td></tr
><tr id="gr_svn119_2182"

><td id="2182"><a href="#2182">2182</a></td></tr
><tr id="gr_svn119_2183"

><td id="2183"><a href="#2183">2183</a></td></tr
><tr id="gr_svn119_2184"

><td id="2184"><a href="#2184">2184</a></td></tr
><tr id="gr_svn119_2185"

><td id="2185"><a href="#2185">2185</a></td></tr
><tr id="gr_svn119_2186"

><td id="2186"><a href="#2186">2186</a></td></tr
><tr id="gr_svn119_2187"

><td id="2187"><a href="#2187">2187</a></td></tr
><tr id="gr_svn119_2188"

><td id="2188"><a href="#2188">2188</a></td></tr
><tr id="gr_svn119_2189"

><td id="2189"><a href="#2189">2189</a></td></tr
><tr id="gr_svn119_2190"

><td id="2190"><a href="#2190">2190</a></td></tr
><tr id="gr_svn119_2191"

><td id="2191"><a href="#2191">2191</a></td></tr
><tr id="gr_svn119_2192"

><td id="2192"><a href="#2192">2192</a></td></tr
><tr id="gr_svn119_2193"

><td id="2193"><a href="#2193">2193</a></td></tr
><tr id="gr_svn119_2194"

><td id="2194"><a href="#2194">2194</a></td></tr
><tr id="gr_svn119_2195"

><td id="2195"><a href="#2195">2195</a></td></tr
><tr id="gr_svn119_2196"

><td id="2196"><a href="#2196">2196</a></td></tr
><tr id="gr_svn119_2197"

><td id="2197"><a href="#2197">2197</a></td></tr
><tr id="gr_svn119_2198"

><td id="2198"><a href="#2198">2198</a></td></tr
><tr id="gr_svn119_2199"

><td id="2199"><a href="#2199">2199</a></td></tr
><tr id="gr_svn119_2200"

><td id="2200"><a href="#2200">2200</a></td></tr
><tr id="gr_svn119_2201"

><td id="2201"><a href="#2201">2201</a></td></tr
><tr id="gr_svn119_2202"

><td id="2202"><a href="#2202">2202</a></td></tr
><tr id="gr_svn119_2203"

><td id="2203"><a href="#2203">2203</a></td></tr
><tr id="gr_svn119_2204"

><td id="2204"><a href="#2204">2204</a></td></tr
><tr id="gr_svn119_2205"

><td id="2205"><a href="#2205">2205</a></td></tr
><tr id="gr_svn119_2206"

><td id="2206"><a href="#2206">2206</a></td></tr
><tr id="gr_svn119_2207"

><td id="2207"><a href="#2207">2207</a></td></tr
><tr id="gr_svn119_2208"

><td id="2208"><a href="#2208">2208</a></td></tr
><tr id="gr_svn119_2209"

><td id="2209"><a href="#2209">2209</a></td></tr
><tr id="gr_svn119_2210"

><td id="2210"><a href="#2210">2210</a></td></tr
><tr id="gr_svn119_2211"

><td id="2211"><a href="#2211">2211</a></td></tr
><tr id="gr_svn119_2212"

><td id="2212"><a href="#2212">2212</a></td></tr
><tr id="gr_svn119_2213"

><td id="2213"><a href="#2213">2213</a></td></tr
><tr id="gr_svn119_2214"

><td id="2214"><a href="#2214">2214</a></td></tr
><tr id="gr_svn119_2215"

><td id="2215"><a href="#2215">2215</a></td></tr
><tr id="gr_svn119_2216"

><td id="2216"><a href="#2216">2216</a></td></tr
><tr id="gr_svn119_2217"

><td id="2217"><a href="#2217">2217</a></td></tr
><tr id="gr_svn119_2218"

><td id="2218"><a href="#2218">2218</a></td></tr
><tr id="gr_svn119_2219"

><td id="2219"><a href="#2219">2219</a></td></tr
><tr id="gr_svn119_2220"

><td id="2220"><a href="#2220">2220</a></td></tr
><tr id="gr_svn119_2221"

><td id="2221"><a href="#2221">2221</a></td></tr
><tr id="gr_svn119_2222"

><td id="2222"><a href="#2222">2222</a></td></tr
><tr id="gr_svn119_2223"

><td id="2223"><a href="#2223">2223</a></td></tr
><tr id="gr_svn119_2224"

><td id="2224"><a href="#2224">2224</a></td></tr
><tr id="gr_svn119_2225"

><td id="2225"><a href="#2225">2225</a></td></tr
><tr id="gr_svn119_2226"

><td id="2226"><a href="#2226">2226</a></td></tr
><tr id="gr_svn119_2227"

><td id="2227"><a href="#2227">2227</a></td></tr
><tr id="gr_svn119_2228"

><td id="2228"><a href="#2228">2228</a></td></tr
><tr id="gr_svn119_2229"

><td id="2229"><a href="#2229">2229</a></td></tr
><tr id="gr_svn119_2230"

><td id="2230"><a href="#2230">2230</a></td></tr
><tr id="gr_svn119_2231"

><td id="2231"><a href="#2231">2231</a></td></tr
><tr id="gr_svn119_2232"

><td id="2232"><a href="#2232">2232</a></td></tr
><tr id="gr_svn119_2233"

><td id="2233"><a href="#2233">2233</a></td></tr
><tr id="gr_svn119_2234"

><td id="2234"><a href="#2234">2234</a></td></tr
><tr id="gr_svn119_2235"

><td id="2235"><a href="#2235">2235</a></td></tr
><tr id="gr_svn119_2236"

><td id="2236"><a href="#2236">2236</a></td></tr
><tr id="gr_svn119_2237"

><td id="2237"><a href="#2237">2237</a></td></tr
><tr id="gr_svn119_2238"

><td id="2238"><a href="#2238">2238</a></td></tr
><tr id="gr_svn119_2239"

><td id="2239"><a href="#2239">2239</a></td></tr
><tr id="gr_svn119_2240"

><td id="2240"><a href="#2240">2240</a></td></tr
><tr id="gr_svn119_2241"

><td id="2241"><a href="#2241">2241</a></td></tr
><tr id="gr_svn119_2242"

><td id="2242"><a href="#2242">2242</a></td></tr
><tr id="gr_svn119_2243"

><td id="2243"><a href="#2243">2243</a></td></tr
><tr id="gr_svn119_2244"

><td id="2244"><a href="#2244">2244</a></td></tr
><tr id="gr_svn119_2245"

><td id="2245"><a href="#2245">2245</a></td></tr
><tr id="gr_svn119_2246"

><td id="2246"><a href="#2246">2246</a></td></tr
><tr id="gr_svn119_2247"

><td id="2247"><a href="#2247">2247</a></td></tr
><tr id="gr_svn119_2248"

><td id="2248"><a href="#2248">2248</a></td></tr
><tr id="gr_svn119_2249"

><td id="2249"><a href="#2249">2249</a></td></tr
><tr id="gr_svn119_2250"

><td id="2250"><a href="#2250">2250</a></td></tr
><tr id="gr_svn119_2251"

><td id="2251"><a href="#2251">2251</a></td></tr
><tr id="gr_svn119_2252"

><td id="2252"><a href="#2252">2252</a></td></tr
><tr id="gr_svn119_2253"

><td id="2253"><a href="#2253">2253</a></td></tr
><tr id="gr_svn119_2254"

><td id="2254"><a href="#2254">2254</a></td></tr
><tr id="gr_svn119_2255"

><td id="2255"><a href="#2255">2255</a></td></tr
><tr id="gr_svn119_2256"

><td id="2256"><a href="#2256">2256</a></td></tr
><tr id="gr_svn119_2257"

><td id="2257"><a href="#2257">2257</a></td></tr
><tr id="gr_svn119_2258"

><td id="2258"><a href="#2258">2258</a></td></tr
><tr id="gr_svn119_2259"

><td id="2259"><a href="#2259">2259</a></td></tr
><tr id="gr_svn119_2260"

><td id="2260"><a href="#2260">2260</a></td></tr
><tr id="gr_svn119_2261"

><td id="2261"><a href="#2261">2261</a></td></tr
><tr id="gr_svn119_2262"

><td id="2262"><a href="#2262">2262</a></td></tr
><tr id="gr_svn119_2263"

><td id="2263"><a href="#2263">2263</a></td></tr
><tr id="gr_svn119_2264"

><td id="2264"><a href="#2264">2264</a></td></tr
><tr id="gr_svn119_2265"

><td id="2265"><a href="#2265">2265</a></td></tr
><tr id="gr_svn119_2266"

><td id="2266"><a href="#2266">2266</a></td></tr
><tr id="gr_svn119_2267"

><td id="2267"><a href="#2267">2267</a></td></tr
><tr id="gr_svn119_2268"

><td id="2268"><a href="#2268">2268</a></td></tr
><tr id="gr_svn119_2269"

><td id="2269"><a href="#2269">2269</a></td></tr
><tr id="gr_svn119_2270"

><td id="2270"><a href="#2270">2270</a></td></tr
><tr id="gr_svn119_2271"

><td id="2271"><a href="#2271">2271</a></td></tr
><tr id="gr_svn119_2272"

><td id="2272"><a href="#2272">2272</a></td></tr
><tr id="gr_svn119_2273"

><td id="2273"><a href="#2273">2273</a></td></tr
><tr id="gr_svn119_2274"

><td id="2274"><a href="#2274">2274</a></td></tr
><tr id="gr_svn119_2275"

><td id="2275"><a href="#2275">2275</a></td></tr
><tr id="gr_svn119_2276"

><td id="2276"><a href="#2276">2276</a></td></tr
><tr id="gr_svn119_2277"

><td id="2277"><a href="#2277">2277</a></td></tr
><tr id="gr_svn119_2278"

><td id="2278"><a href="#2278">2278</a></td></tr
><tr id="gr_svn119_2279"

><td id="2279"><a href="#2279">2279</a></td></tr
><tr id="gr_svn119_2280"

><td id="2280"><a href="#2280">2280</a></td></tr
><tr id="gr_svn119_2281"

><td id="2281"><a href="#2281">2281</a></td></tr
><tr id="gr_svn119_2282"

><td id="2282"><a href="#2282">2282</a></td></tr
><tr id="gr_svn119_2283"

><td id="2283"><a href="#2283">2283</a></td></tr
><tr id="gr_svn119_2284"

><td id="2284"><a href="#2284">2284</a></td></tr
><tr id="gr_svn119_2285"

><td id="2285"><a href="#2285">2285</a></td></tr
><tr id="gr_svn119_2286"

><td id="2286"><a href="#2286">2286</a></td></tr
><tr id="gr_svn119_2287"

><td id="2287"><a href="#2287">2287</a></td></tr
><tr id="gr_svn119_2288"

><td id="2288"><a href="#2288">2288</a></td></tr
><tr id="gr_svn119_2289"

><td id="2289"><a href="#2289">2289</a></td></tr
><tr id="gr_svn119_2290"

><td id="2290"><a href="#2290">2290</a></td></tr
><tr id="gr_svn119_2291"

><td id="2291"><a href="#2291">2291</a></td></tr
><tr id="gr_svn119_2292"

><td id="2292"><a href="#2292">2292</a></td></tr
><tr id="gr_svn119_2293"

><td id="2293"><a href="#2293">2293</a></td></tr
><tr id="gr_svn119_2294"

><td id="2294"><a href="#2294">2294</a></td></tr
><tr id="gr_svn119_2295"

><td id="2295"><a href="#2295">2295</a></td></tr
><tr id="gr_svn119_2296"

><td id="2296"><a href="#2296">2296</a></td></tr
><tr id="gr_svn119_2297"

><td id="2297"><a href="#2297">2297</a></td></tr
><tr id="gr_svn119_2298"

><td id="2298"><a href="#2298">2298</a></td></tr
><tr id="gr_svn119_2299"

><td id="2299"><a href="#2299">2299</a></td></tr
><tr id="gr_svn119_2300"

><td id="2300"><a href="#2300">2300</a></td></tr
><tr id="gr_svn119_2301"

><td id="2301"><a href="#2301">2301</a></td></tr
><tr id="gr_svn119_2302"

><td id="2302"><a href="#2302">2302</a></td></tr
><tr id="gr_svn119_2303"

><td id="2303"><a href="#2303">2303</a></td></tr
><tr id="gr_svn119_2304"

><td id="2304"><a href="#2304">2304</a></td></tr
><tr id="gr_svn119_2305"

><td id="2305"><a href="#2305">2305</a></td></tr
><tr id="gr_svn119_2306"

><td id="2306"><a href="#2306">2306</a></td></tr
><tr id="gr_svn119_2307"

><td id="2307"><a href="#2307">2307</a></td></tr
><tr id="gr_svn119_2308"

><td id="2308"><a href="#2308">2308</a></td></tr
><tr id="gr_svn119_2309"

><td id="2309"><a href="#2309">2309</a></td></tr
><tr id="gr_svn119_2310"

><td id="2310"><a href="#2310">2310</a></td></tr
><tr id="gr_svn119_2311"

><td id="2311"><a href="#2311">2311</a></td></tr
><tr id="gr_svn119_2312"

><td id="2312"><a href="#2312">2312</a></td></tr
><tr id="gr_svn119_2313"

><td id="2313"><a href="#2313">2313</a></td></tr
><tr id="gr_svn119_2314"

><td id="2314"><a href="#2314">2314</a></td></tr
><tr id="gr_svn119_2315"

><td id="2315"><a href="#2315">2315</a></td></tr
><tr id="gr_svn119_2316"

><td id="2316"><a href="#2316">2316</a></td></tr
><tr id="gr_svn119_2317"

><td id="2317"><a href="#2317">2317</a></td></tr
><tr id="gr_svn119_2318"

><td id="2318"><a href="#2318">2318</a></td></tr
><tr id="gr_svn119_2319"

><td id="2319"><a href="#2319">2319</a></td></tr
><tr id="gr_svn119_2320"

><td id="2320"><a href="#2320">2320</a></td></tr
><tr id="gr_svn119_2321"

><td id="2321"><a href="#2321">2321</a></td></tr
><tr id="gr_svn119_2322"

><td id="2322"><a href="#2322">2322</a></td></tr
><tr id="gr_svn119_2323"

><td id="2323"><a href="#2323">2323</a></td></tr
><tr id="gr_svn119_2324"

><td id="2324"><a href="#2324">2324</a></td></tr
><tr id="gr_svn119_2325"

><td id="2325"><a href="#2325">2325</a></td></tr
><tr id="gr_svn119_2326"

><td id="2326"><a href="#2326">2326</a></td></tr
><tr id="gr_svn119_2327"

><td id="2327"><a href="#2327">2327</a></td></tr
><tr id="gr_svn119_2328"

><td id="2328"><a href="#2328">2328</a></td></tr
><tr id="gr_svn119_2329"

><td id="2329"><a href="#2329">2329</a></td></tr
><tr id="gr_svn119_2330"

><td id="2330"><a href="#2330">2330</a></td></tr
><tr id="gr_svn119_2331"

><td id="2331"><a href="#2331">2331</a></td></tr
><tr id="gr_svn119_2332"

><td id="2332"><a href="#2332">2332</a></td></tr
><tr id="gr_svn119_2333"

><td id="2333"><a href="#2333">2333</a></td></tr
><tr id="gr_svn119_2334"

><td id="2334"><a href="#2334">2334</a></td></tr
><tr id="gr_svn119_2335"

><td id="2335"><a href="#2335">2335</a></td></tr
><tr id="gr_svn119_2336"

><td id="2336"><a href="#2336">2336</a></td></tr
><tr id="gr_svn119_2337"

><td id="2337"><a href="#2337">2337</a></td></tr
><tr id="gr_svn119_2338"

><td id="2338"><a href="#2338">2338</a></td></tr
><tr id="gr_svn119_2339"

><td id="2339"><a href="#2339">2339</a></td></tr
><tr id="gr_svn119_2340"

><td id="2340"><a href="#2340">2340</a></td></tr
><tr id="gr_svn119_2341"

><td id="2341"><a href="#2341">2341</a></td></tr
><tr id="gr_svn119_2342"

><td id="2342"><a href="#2342">2342</a></td></tr
><tr id="gr_svn119_2343"

><td id="2343"><a href="#2343">2343</a></td></tr
><tr id="gr_svn119_2344"

><td id="2344"><a href="#2344">2344</a></td></tr
><tr id="gr_svn119_2345"

><td id="2345"><a href="#2345">2345</a></td></tr
><tr id="gr_svn119_2346"

><td id="2346"><a href="#2346">2346</a></td></tr
><tr id="gr_svn119_2347"

><td id="2347"><a href="#2347">2347</a></td></tr
><tr id="gr_svn119_2348"

><td id="2348"><a href="#2348">2348</a></td></tr
><tr id="gr_svn119_2349"

><td id="2349"><a href="#2349">2349</a></td></tr
><tr id="gr_svn119_2350"

><td id="2350"><a href="#2350">2350</a></td></tr
><tr id="gr_svn119_2351"

><td id="2351"><a href="#2351">2351</a></td></tr
><tr id="gr_svn119_2352"

><td id="2352"><a href="#2352">2352</a></td></tr
><tr id="gr_svn119_2353"

><td id="2353"><a href="#2353">2353</a></td></tr
><tr id="gr_svn119_2354"

><td id="2354"><a href="#2354">2354</a></td></tr
><tr id="gr_svn119_2355"

><td id="2355"><a href="#2355">2355</a></td></tr
><tr id="gr_svn119_2356"

><td id="2356"><a href="#2356">2356</a></td></tr
><tr id="gr_svn119_2357"

><td id="2357"><a href="#2357">2357</a></td></tr
><tr id="gr_svn119_2358"

><td id="2358"><a href="#2358">2358</a></td></tr
><tr id="gr_svn119_2359"

><td id="2359"><a href="#2359">2359</a></td></tr
><tr id="gr_svn119_2360"

><td id="2360"><a href="#2360">2360</a></td></tr
><tr id="gr_svn119_2361"

><td id="2361"><a href="#2361">2361</a></td></tr
><tr id="gr_svn119_2362"

><td id="2362"><a href="#2362">2362</a></td></tr
><tr id="gr_svn119_2363"

><td id="2363"><a href="#2363">2363</a></td></tr
><tr id="gr_svn119_2364"

><td id="2364"><a href="#2364">2364</a></td></tr
><tr id="gr_svn119_2365"

><td id="2365"><a href="#2365">2365</a></td></tr
><tr id="gr_svn119_2366"

><td id="2366"><a href="#2366">2366</a></td></tr
><tr id="gr_svn119_2367"

><td id="2367"><a href="#2367">2367</a></td></tr
><tr id="gr_svn119_2368"

><td id="2368"><a href="#2368">2368</a></td></tr
><tr id="gr_svn119_2369"

><td id="2369"><a href="#2369">2369</a></td></tr
><tr id="gr_svn119_2370"

><td id="2370"><a href="#2370">2370</a></td></tr
><tr id="gr_svn119_2371"

><td id="2371"><a href="#2371">2371</a></td></tr
><tr id="gr_svn119_2372"

><td id="2372"><a href="#2372">2372</a></td></tr
><tr id="gr_svn119_2373"

><td id="2373"><a href="#2373">2373</a></td></tr
><tr id="gr_svn119_2374"

><td id="2374"><a href="#2374">2374</a></td></tr
><tr id="gr_svn119_2375"

><td id="2375"><a href="#2375">2375</a></td></tr
><tr id="gr_svn119_2376"

><td id="2376"><a href="#2376">2376</a></td></tr
><tr id="gr_svn119_2377"

><td id="2377"><a href="#2377">2377</a></td></tr
><tr id="gr_svn119_2378"

><td id="2378"><a href="#2378">2378</a></td></tr
><tr id="gr_svn119_2379"

><td id="2379"><a href="#2379">2379</a></td></tr
><tr id="gr_svn119_2380"

><td id="2380"><a href="#2380">2380</a></td></tr
><tr id="gr_svn119_2381"

><td id="2381"><a href="#2381">2381</a></td></tr
><tr id="gr_svn119_2382"

><td id="2382"><a href="#2382">2382</a></td></tr
><tr id="gr_svn119_2383"

><td id="2383"><a href="#2383">2383</a></td></tr
><tr id="gr_svn119_2384"

><td id="2384"><a href="#2384">2384</a></td></tr
><tr id="gr_svn119_2385"

><td id="2385"><a href="#2385">2385</a></td></tr
><tr id="gr_svn119_2386"

><td id="2386"><a href="#2386">2386</a></td></tr
><tr id="gr_svn119_2387"

><td id="2387"><a href="#2387">2387</a></td></tr
><tr id="gr_svn119_2388"

><td id="2388"><a href="#2388">2388</a></td></tr
><tr id="gr_svn119_2389"

><td id="2389"><a href="#2389">2389</a></td></tr
><tr id="gr_svn119_2390"

><td id="2390"><a href="#2390">2390</a></td></tr
><tr id="gr_svn119_2391"

><td id="2391"><a href="#2391">2391</a></td></tr
><tr id="gr_svn119_2392"

><td id="2392"><a href="#2392">2392</a></td></tr
><tr id="gr_svn119_2393"

><td id="2393"><a href="#2393">2393</a></td></tr
><tr id="gr_svn119_2394"

><td id="2394"><a href="#2394">2394</a></td></tr
><tr id="gr_svn119_2395"

><td id="2395"><a href="#2395">2395</a></td></tr
><tr id="gr_svn119_2396"

><td id="2396"><a href="#2396">2396</a></td></tr
><tr id="gr_svn119_2397"

><td id="2397"><a href="#2397">2397</a></td></tr
><tr id="gr_svn119_2398"

><td id="2398"><a href="#2398">2398</a></td></tr
><tr id="gr_svn119_2399"

><td id="2399"><a href="#2399">2399</a></td></tr
><tr id="gr_svn119_2400"

><td id="2400"><a href="#2400">2400</a></td></tr
><tr id="gr_svn119_2401"

><td id="2401"><a href="#2401">2401</a></td></tr
><tr id="gr_svn119_2402"

><td id="2402"><a href="#2402">2402</a></td></tr
><tr id="gr_svn119_2403"

><td id="2403"><a href="#2403">2403</a></td></tr
><tr id="gr_svn119_2404"

><td id="2404"><a href="#2404">2404</a></td></tr
><tr id="gr_svn119_2405"

><td id="2405"><a href="#2405">2405</a></td></tr
><tr id="gr_svn119_2406"

><td id="2406"><a href="#2406">2406</a></td></tr
><tr id="gr_svn119_2407"

><td id="2407"><a href="#2407">2407</a></td></tr
><tr id="gr_svn119_2408"

><td id="2408"><a href="#2408">2408</a></td></tr
><tr id="gr_svn119_2409"

><td id="2409"><a href="#2409">2409</a></td></tr
><tr id="gr_svn119_2410"

><td id="2410"><a href="#2410">2410</a></td></tr
><tr id="gr_svn119_2411"

><td id="2411"><a href="#2411">2411</a></td></tr
><tr id="gr_svn119_2412"

><td id="2412"><a href="#2412">2412</a></td></tr
><tr id="gr_svn119_2413"

><td id="2413"><a href="#2413">2413</a></td></tr
><tr id="gr_svn119_2414"

><td id="2414"><a href="#2414">2414</a></td></tr
><tr id="gr_svn119_2415"

><td id="2415"><a href="#2415">2415</a></td></tr
><tr id="gr_svn119_2416"

><td id="2416"><a href="#2416">2416</a></td></tr
><tr id="gr_svn119_2417"

><td id="2417"><a href="#2417">2417</a></td></tr
><tr id="gr_svn119_2418"

><td id="2418"><a href="#2418">2418</a></td></tr
><tr id="gr_svn119_2419"

><td id="2419"><a href="#2419">2419</a></td></tr
><tr id="gr_svn119_2420"

><td id="2420"><a href="#2420">2420</a></td></tr
><tr id="gr_svn119_2421"

><td id="2421"><a href="#2421">2421</a></td></tr
><tr id="gr_svn119_2422"

><td id="2422"><a href="#2422">2422</a></td></tr
><tr id="gr_svn119_2423"

><td id="2423"><a href="#2423">2423</a></td></tr
><tr id="gr_svn119_2424"

><td id="2424"><a href="#2424">2424</a></td></tr
><tr id="gr_svn119_2425"

><td id="2425"><a href="#2425">2425</a></td></tr
><tr id="gr_svn119_2426"

><td id="2426"><a href="#2426">2426</a></td></tr
><tr id="gr_svn119_2427"

><td id="2427"><a href="#2427">2427</a></td></tr
><tr id="gr_svn119_2428"

><td id="2428"><a href="#2428">2428</a></td></tr
><tr id="gr_svn119_2429"

><td id="2429"><a href="#2429">2429</a></td></tr
><tr id="gr_svn119_2430"

><td id="2430"><a href="#2430">2430</a></td></tr
><tr id="gr_svn119_2431"

><td id="2431"><a href="#2431">2431</a></td></tr
><tr id="gr_svn119_2432"

><td id="2432"><a href="#2432">2432</a></td></tr
><tr id="gr_svn119_2433"

><td id="2433"><a href="#2433">2433</a></td></tr
><tr id="gr_svn119_2434"

><td id="2434"><a href="#2434">2434</a></td></tr
><tr id="gr_svn119_2435"

><td id="2435"><a href="#2435">2435</a></td></tr
><tr id="gr_svn119_2436"

><td id="2436"><a href="#2436">2436</a></td></tr
><tr id="gr_svn119_2437"

><td id="2437"><a href="#2437">2437</a></td></tr
><tr id="gr_svn119_2438"

><td id="2438"><a href="#2438">2438</a></td></tr
><tr id="gr_svn119_2439"

><td id="2439"><a href="#2439">2439</a></td></tr
><tr id="gr_svn119_2440"

><td id="2440"><a href="#2440">2440</a></td></tr
><tr id="gr_svn119_2441"

><td id="2441"><a href="#2441">2441</a></td></tr
><tr id="gr_svn119_2442"

><td id="2442"><a href="#2442">2442</a></td></tr
><tr id="gr_svn119_2443"

><td id="2443"><a href="#2443">2443</a></td></tr
><tr id="gr_svn119_2444"

><td id="2444"><a href="#2444">2444</a></td></tr
><tr id="gr_svn119_2445"

><td id="2445"><a href="#2445">2445</a></td></tr
><tr id="gr_svn119_2446"

><td id="2446"><a href="#2446">2446</a></td></tr
><tr id="gr_svn119_2447"

><td id="2447"><a href="#2447">2447</a></td></tr
><tr id="gr_svn119_2448"

><td id="2448"><a href="#2448">2448</a></td></tr
><tr id="gr_svn119_2449"

><td id="2449"><a href="#2449">2449</a></td></tr
><tr id="gr_svn119_2450"

><td id="2450"><a href="#2450">2450</a></td></tr
><tr id="gr_svn119_2451"

><td id="2451"><a href="#2451">2451</a></td></tr
><tr id="gr_svn119_2452"

><td id="2452"><a href="#2452">2452</a></td></tr
><tr id="gr_svn119_2453"

><td id="2453"><a href="#2453">2453</a></td></tr
><tr id="gr_svn119_2454"

><td id="2454"><a href="#2454">2454</a></td></tr
><tr id="gr_svn119_2455"

><td id="2455"><a href="#2455">2455</a></td></tr
><tr id="gr_svn119_2456"

><td id="2456"><a href="#2456">2456</a></td></tr
><tr id="gr_svn119_2457"

><td id="2457"><a href="#2457">2457</a></td></tr
><tr id="gr_svn119_2458"

><td id="2458"><a href="#2458">2458</a></td></tr
><tr id="gr_svn119_2459"

><td id="2459"><a href="#2459">2459</a></td></tr
><tr id="gr_svn119_2460"

><td id="2460"><a href="#2460">2460</a></td></tr
><tr id="gr_svn119_2461"

><td id="2461"><a href="#2461">2461</a></td></tr
><tr id="gr_svn119_2462"

><td id="2462"><a href="#2462">2462</a></td></tr
><tr id="gr_svn119_2463"

><td id="2463"><a href="#2463">2463</a></td></tr
><tr id="gr_svn119_2464"

><td id="2464"><a href="#2464">2464</a></td></tr
><tr id="gr_svn119_2465"

><td id="2465"><a href="#2465">2465</a></td></tr
><tr id="gr_svn119_2466"

><td id="2466"><a href="#2466">2466</a></td></tr
><tr id="gr_svn119_2467"

><td id="2467"><a href="#2467">2467</a></td></tr
><tr id="gr_svn119_2468"

><td id="2468"><a href="#2468">2468</a></td></tr
><tr id="gr_svn119_2469"

><td id="2469"><a href="#2469">2469</a></td></tr
><tr id="gr_svn119_2470"

><td id="2470"><a href="#2470">2470</a></td></tr
><tr id="gr_svn119_2471"

><td id="2471"><a href="#2471">2471</a></td></tr
><tr id="gr_svn119_2472"

><td id="2472"><a href="#2472">2472</a></td></tr
><tr id="gr_svn119_2473"

><td id="2473"><a href="#2473">2473</a></td></tr
><tr id="gr_svn119_2474"

><td id="2474"><a href="#2474">2474</a></td></tr
><tr id="gr_svn119_2475"

><td id="2475"><a href="#2475">2475</a></td></tr
><tr id="gr_svn119_2476"

><td id="2476"><a href="#2476">2476</a></td></tr
><tr id="gr_svn119_2477"

><td id="2477"><a href="#2477">2477</a></td></tr
><tr id="gr_svn119_2478"

><td id="2478"><a href="#2478">2478</a></td></tr
><tr id="gr_svn119_2479"

><td id="2479"><a href="#2479">2479</a></td></tr
><tr id="gr_svn119_2480"

><td id="2480"><a href="#2480">2480</a></td></tr
><tr id="gr_svn119_2481"

><td id="2481"><a href="#2481">2481</a></td></tr
><tr id="gr_svn119_2482"

><td id="2482"><a href="#2482">2482</a></td></tr
><tr id="gr_svn119_2483"

><td id="2483"><a href="#2483">2483</a></td></tr
><tr id="gr_svn119_2484"

><td id="2484"><a href="#2484">2484</a></td></tr
><tr id="gr_svn119_2485"

><td id="2485"><a href="#2485">2485</a></td></tr
><tr id="gr_svn119_2486"

><td id="2486"><a href="#2486">2486</a></td></tr
><tr id="gr_svn119_2487"

><td id="2487"><a href="#2487">2487</a></td></tr
><tr id="gr_svn119_2488"

><td id="2488"><a href="#2488">2488</a></td></tr
><tr id="gr_svn119_2489"

><td id="2489"><a href="#2489">2489</a></td></tr
><tr id="gr_svn119_2490"

><td id="2490"><a href="#2490">2490</a></td></tr
><tr id="gr_svn119_2491"

><td id="2491"><a href="#2491">2491</a></td></tr
><tr id="gr_svn119_2492"

><td id="2492"><a href="#2492">2492</a></td></tr
><tr id="gr_svn119_2493"

><td id="2493"><a href="#2493">2493</a></td></tr
><tr id="gr_svn119_2494"

><td id="2494"><a href="#2494">2494</a></td></tr
><tr id="gr_svn119_2495"

><td id="2495"><a href="#2495">2495</a></td></tr
><tr id="gr_svn119_2496"

><td id="2496"><a href="#2496">2496</a></td></tr
><tr id="gr_svn119_2497"

><td id="2497"><a href="#2497">2497</a></td></tr
><tr id="gr_svn119_2498"

><td id="2498"><a href="#2498">2498</a></td></tr
><tr id="gr_svn119_2499"

><td id="2499"><a href="#2499">2499</a></td></tr
><tr id="gr_svn119_2500"

><td id="2500"><a href="#2500">2500</a></td></tr
><tr id="gr_svn119_2501"

><td id="2501"><a href="#2501">2501</a></td></tr
><tr id="gr_svn119_2502"

><td id="2502"><a href="#2502">2502</a></td></tr
><tr id="gr_svn119_2503"

><td id="2503"><a href="#2503">2503</a></td></tr
><tr id="gr_svn119_2504"

><td id="2504"><a href="#2504">2504</a></td></tr
><tr id="gr_svn119_2505"

><td id="2505"><a href="#2505">2505</a></td></tr
><tr id="gr_svn119_2506"

><td id="2506"><a href="#2506">2506</a></td></tr
><tr id="gr_svn119_2507"

><td id="2507"><a href="#2507">2507</a></td></tr
><tr id="gr_svn119_2508"

><td id="2508"><a href="#2508">2508</a></td></tr
><tr id="gr_svn119_2509"

><td id="2509"><a href="#2509">2509</a></td></tr
><tr id="gr_svn119_2510"

><td id="2510"><a href="#2510">2510</a></td></tr
><tr id="gr_svn119_2511"

><td id="2511"><a href="#2511">2511</a></td></tr
><tr id="gr_svn119_2512"

><td id="2512"><a href="#2512">2512</a></td></tr
><tr id="gr_svn119_2513"

><td id="2513"><a href="#2513">2513</a></td></tr
><tr id="gr_svn119_2514"

><td id="2514"><a href="#2514">2514</a></td></tr
><tr id="gr_svn119_2515"

><td id="2515"><a href="#2515">2515</a></td></tr
><tr id="gr_svn119_2516"

><td id="2516"><a href="#2516">2516</a></td></tr
><tr id="gr_svn119_2517"

><td id="2517"><a href="#2517">2517</a></td></tr
><tr id="gr_svn119_2518"

><td id="2518"><a href="#2518">2518</a></td></tr
><tr id="gr_svn119_2519"

><td id="2519"><a href="#2519">2519</a></td></tr
><tr id="gr_svn119_2520"

><td id="2520"><a href="#2520">2520</a></td></tr
><tr id="gr_svn119_2521"

><td id="2521"><a href="#2521">2521</a></td></tr
><tr id="gr_svn119_2522"

><td id="2522"><a href="#2522">2522</a></td></tr
><tr id="gr_svn119_2523"

><td id="2523"><a href="#2523">2523</a></td></tr
><tr id="gr_svn119_2524"

><td id="2524"><a href="#2524">2524</a></td></tr
><tr id="gr_svn119_2525"

><td id="2525"><a href="#2525">2525</a></td></tr
><tr id="gr_svn119_2526"

><td id="2526"><a href="#2526">2526</a></td></tr
><tr id="gr_svn119_2527"

><td id="2527"><a href="#2527">2527</a></td></tr
><tr id="gr_svn119_2528"

><td id="2528"><a href="#2528">2528</a></td></tr
><tr id="gr_svn119_2529"

><td id="2529"><a href="#2529">2529</a></td></tr
><tr id="gr_svn119_2530"

><td id="2530"><a href="#2530">2530</a></td></tr
><tr id="gr_svn119_2531"

><td id="2531"><a href="#2531">2531</a></td></tr
><tr id="gr_svn119_2532"

><td id="2532"><a href="#2532">2532</a></td></tr
><tr id="gr_svn119_2533"

><td id="2533"><a href="#2533">2533</a></td></tr
><tr id="gr_svn119_2534"

><td id="2534"><a href="#2534">2534</a></td></tr
><tr id="gr_svn119_2535"

><td id="2535"><a href="#2535">2535</a></td></tr
><tr id="gr_svn119_2536"

><td id="2536"><a href="#2536">2536</a></td></tr
><tr id="gr_svn119_2537"

><td id="2537"><a href="#2537">2537</a></td></tr
><tr id="gr_svn119_2538"

><td id="2538"><a href="#2538">2538</a></td></tr
><tr id="gr_svn119_2539"

><td id="2539"><a href="#2539">2539</a></td></tr
><tr id="gr_svn119_2540"

><td id="2540"><a href="#2540">2540</a></td></tr
><tr id="gr_svn119_2541"

><td id="2541"><a href="#2541">2541</a></td></tr
><tr id="gr_svn119_2542"

><td id="2542"><a href="#2542">2542</a></td></tr
><tr id="gr_svn119_2543"

><td id="2543"><a href="#2543">2543</a></td></tr
><tr id="gr_svn119_2544"

><td id="2544"><a href="#2544">2544</a></td></tr
><tr id="gr_svn119_2545"

><td id="2545"><a href="#2545">2545</a></td></tr
><tr id="gr_svn119_2546"

><td id="2546"><a href="#2546">2546</a></td></tr
><tr id="gr_svn119_2547"

><td id="2547"><a href="#2547">2547</a></td></tr
><tr id="gr_svn119_2548"

><td id="2548"><a href="#2548">2548</a></td></tr
><tr id="gr_svn119_2549"

><td id="2549"><a href="#2549">2549</a></td></tr
><tr id="gr_svn119_2550"

><td id="2550"><a href="#2550">2550</a></td></tr
><tr id="gr_svn119_2551"

><td id="2551"><a href="#2551">2551</a></td></tr
><tr id="gr_svn119_2552"

><td id="2552"><a href="#2552">2552</a></td></tr
><tr id="gr_svn119_2553"

><td id="2553"><a href="#2553">2553</a></td></tr
><tr id="gr_svn119_2554"

><td id="2554"><a href="#2554">2554</a></td></tr
><tr id="gr_svn119_2555"

><td id="2555"><a href="#2555">2555</a></td></tr
><tr id="gr_svn119_2556"

><td id="2556"><a href="#2556">2556</a></td></tr
><tr id="gr_svn119_2557"

><td id="2557"><a href="#2557">2557</a></td></tr
><tr id="gr_svn119_2558"

><td id="2558"><a href="#2558">2558</a></td></tr
><tr id="gr_svn119_2559"

><td id="2559"><a href="#2559">2559</a></td></tr
><tr id="gr_svn119_2560"

><td id="2560"><a href="#2560">2560</a></td></tr
><tr id="gr_svn119_2561"

><td id="2561"><a href="#2561">2561</a></td></tr
><tr id="gr_svn119_2562"

><td id="2562"><a href="#2562">2562</a></td></tr
><tr id="gr_svn119_2563"

><td id="2563"><a href="#2563">2563</a></td></tr
><tr id="gr_svn119_2564"

><td id="2564"><a href="#2564">2564</a></td></tr
><tr id="gr_svn119_2565"

><td id="2565"><a href="#2565">2565</a></td></tr
><tr id="gr_svn119_2566"

><td id="2566"><a href="#2566">2566</a></td></tr
><tr id="gr_svn119_2567"

><td id="2567"><a href="#2567">2567</a></td></tr
><tr id="gr_svn119_2568"

><td id="2568"><a href="#2568">2568</a></td></tr
><tr id="gr_svn119_2569"

><td id="2569"><a href="#2569">2569</a></td></tr
><tr id="gr_svn119_2570"

><td id="2570"><a href="#2570">2570</a></td></tr
><tr id="gr_svn119_2571"

><td id="2571"><a href="#2571">2571</a></td></tr
><tr id="gr_svn119_2572"

><td id="2572"><a href="#2572">2572</a></td></tr
><tr id="gr_svn119_2573"

><td id="2573"><a href="#2573">2573</a></td></tr
><tr id="gr_svn119_2574"

><td id="2574"><a href="#2574">2574</a></td></tr
><tr id="gr_svn119_2575"

><td id="2575"><a href="#2575">2575</a></td></tr
><tr id="gr_svn119_2576"

><td id="2576"><a href="#2576">2576</a></td></tr
><tr id="gr_svn119_2577"

><td id="2577"><a href="#2577">2577</a></td></tr
><tr id="gr_svn119_2578"

><td id="2578"><a href="#2578">2578</a></td></tr
><tr id="gr_svn119_2579"

><td id="2579"><a href="#2579">2579</a></td></tr
><tr id="gr_svn119_2580"

><td id="2580"><a href="#2580">2580</a></td></tr
><tr id="gr_svn119_2581"

><td id="2581"><a href="#2581">2581</a></td></tr
><tr id="gr_svn119_2582"

><td id="2582"><a href="#2582">2582</a></td></tr
><tr id="gr_svn119_2583"

><td id="2583"><a href="#2583">2583</a></td></tr
><tr id="gr_svn119_2584"

><td id="2584"><a href="#2584">2584</a></td></tr
><tr id="gr_svn119_2585"

><td id="2585"><a href="#2585">2585</a></td></tr
><tr id="gr_svn119_2586"

><td id="2586"><a href="#2586">2586</a></td></tr
><tr id="gr_svn119_2587"

><td id="2587"><a href="#2587">2587</a></td></tr
><tr id="gr_svn119_2588"

><td id="2588"><a href="#2588">2588</a></td></tr
><tr id="gr_svn119_2589"

><td id="2589"><a href="#2589">2589</a></td></tr
><tr id="gr_svn119_2590"

><td id="2590"><a href="#2590">2590</a></td></tr
><tr id="gr_svn119_2591"

><td id="2591"><a href="#2591">2591</a></td></tr
><tr id="gr_svn119_2592"

><td id="2592"><a href="#2592">2592</a></td></tr
><tr id="gr_svn119_2593"

><td id="2593"><a href="#2593">2593</a></td></tr
><tr id="gr_svn119_2594"

><td id="2594"><a href="#2594">2594</a></td></tr
><tr id="gr_svn119_2595"

><td id="2595"><a href="#2595">2595</a></td></tr
><tr id="gr_svn119_2596"

><td id="2596"><a href="#2596">2596</a></td></tr
><tr id="gr_svn119_2597"

><td id="2597"><a href="#2597">2597</a></td></tr
><tr id="gr_svn119_2598"

><td id="2598"><a href="#2598">2598</a></td></tr
><tr id="gr_svn119_2599"

><td id="2599"><a href="#2599">2599</a></td></tr
><tr id="gr_svn119_2600"

><td id="2600"><a href="#2600">2600</a></td></tr
><tr id="gr_svn119_2601"

><td id="2601"><a href="#2601">2601</a></td></tr
><tr id="gr_svn119_2602"

><td id="2602"><a href="#2602">2602</a></td></tr
><tr id="gr_svn119_2603"

><td id="2603"><a href="#2603">2603</a></td></tr
><tr id="gr_svn119_2604"

><td id="2604"><a href="#2604">2604</a></td></tr
><tr id="gr_svn119_2605"

><td id="2605"><a href="#2605">2605</a></td></tr
><tr id="gr_svn119_2606"

><td id="2606"><a href="#2606">2606</a></td></tr
><tr id="gr_svn119_2607"

><td id="2607"><a href="#2607">2607</a></td></tr
><tr id="gr_svn119_2608"

><td id="2608"><a href="#2608">2608</a></td></tr
><tr id="gr_svn119_2609"

><td id="2609"><a href="#2609">2609</a></td></tr
><tr id="gr_svn119_2610"

><td id="2610"><a href="#2610">2610</a></td></tr
><tr id="gr_svn119_2611"

><td id="2611"><a href="#2611">2611</a></td></tr
><tr id="gr_svn119_2612"

><td id="2612"><a href="#2612">2612</a></td></tr
><tr id="gr_svn119_2613"

><td id="2613"><a href="#2613">2613</a></td></tr
><tr id="gr_svn119_2614"

><td id="2614"><a href="#2614">2614</a></td></tr
><tr id="gr_svn119_2615"

><td id="2615"><a href="#2615">2615</a></td></tr
><tr id="gr_svn119_2616"

><td id="2616"><a href="#2616">2616</a></td></tr
><tr id="gr_svn119_2617"

><td id="2617"><a href="#2617">2617</a></td></tr
><tr id="gr_svn119_2618"

><td id="2618"><a href="#2618">2618</a></td></tr
><tr id="gr_svn119_2619"

><td id="2619"><a href="#2619">2619</a></td></tr
><tr id="gr_svn119_2620"

><td id="2620"><a href="#2620">2620</a></td></tr
><tr id="gr_svn119_2621"

><td id="2621"><a href="#2621">2621</a></td></tr
><tr id="gr_svn119_2622"

><td id="2622"><a href="#2622">2622</a></td></tr
><tr id="gr_svn119_2623"

><td id="2623"><a href="#2623">2623</a></td></tr
><tr id="gr_svn119_2624"

><td id="2624"><a href="#2624">2624</a></td></tr
><tr id="gr_svn119_2625"

><td id="2625"><a href="#2625">2625</a></td></tr
><tr id="gr_svn119_2626"

><td id="2626"><a href="#2626">2626</a></td></tr
><tr id="gr_svn119_2627"

><td id="2627"><a href="#2627">2627</a></td></tr
><tr id="gr_svn119_2628"

><td id="2628"><a href="#2628">2628</a></td></tr
><tr id="gr_svn119_2629"

><td id="2629"><a href="#2629">2629</a></td></tr
><tr id="gr_svn119_2630"

><td id="2630"><a href="#2630">2630</a></td></tr
><tr id="gr_svn119_2631"

><td id="2631"><a href="#2631">2631</a></td></tr
><tr id="gr_svn119_2632"

><td id="2632"><a href="#2632">2632</a></td></tr
><tr id="gr_svn119_2633"

><td id="2633"><a href="#2633">2633</a></td></tr
><tr id="gr_svn119_2634"

><td id="2634"><a href="#2634">2634</a></td></tr
><tr id="gr_svn119_2635"

><td id="2635"><a href="#2635">2635</a></td></tr
><tr id="gr_svn119_2636"

><td id="2636"><a href="#2636">2636</a></td></tr
><tr id="gr_svn119_2637"

><td id="2637"><a href="#2637">2637</a></td></tr
><tr id="gr_svn119_2638"

><td id="2638"><a href="#2638">2638</a></td></tr
><tr id="gr_svn119_2639"

><td id="2639"><a href="#2639">2639</a></td></tr
><tr id="gr_svn119_2640"

><td id="2640"><a href="#2640">2640</a></td></tr
><tr id="gr_svn119_2641"

><td id="2641"><a href="#2641">2641</a></td></tr
><tr id="gr_svn119_2642"

><td id="2642"><a href="#2642">2642</a></td></tr
><tr id="gr_svn119_2643"

><td id="2643"><a href="#2643">2643</a></td></tr
><tr id="gr_svn119_2644"

><td id="2644"><a href="#2644">2644</a></td></tr
><tr id="gr_svn119_2645"

><td id="2645"><a href="#2645">2645</a></td></tr
><tr id="gr_svn119_2646"

><td id="2646"><a href="#2646">2646</a></td></tr
><tr id="gr_svn119_2647"

><td id="2647"><a href="#2647">2647</a></td></tr
><tr id="gr_svn119_2648"

><td id="2648"><a href="#2648">2648</a></td></tr
><tr id="gr_svn119_2649"

><td id="2649"><a href="#2649">2649</a></td></tr
><tr id="gr_svn119_2650"

><td id="2650"><a href="#2650">2650</a></td></tr
><tr id="gr_svn119_2651"

><td id="2651"><a href="#2651">2651</a></td></tr
><tr id="gr_svn119_2652"

><td id="2652"><a href="#2652">2652</a></td></tr
><tr id="gr_svn119_2653"

><td id="2653"><a href="#2653">2653</a></td></tr
><tr id="gr_svn119_2654"

><td id="2654"><a href="#2654">2654</a></td></tr
><tr id="gr_svn119_2655"

><td id="2655"><a href="#2655">2655</a></td></tr
><tr id="gr_svn119_2656"

><td id="2656"><a href="#2656">2656</a></td></tr
><tr id="gr_svn119_2657"

><td id="2657"><a href="#2657">2657</a></td></tr
><tr id="gr_svn119_2658"

><td id="2658"><a href="#2658">2658</a></td></tr
><tr id="gr_svn119_2659"

><td id="2659"><a href="#2659">2659</a></td></tr
><tr id="gr_svn119_2660"

><td id="2660"><a href="#2660">2660</a></td></tr
><tr id="gr_svn119_2661"

><td id="2661"><a href="#2661">2661</a></td></tr
><tr id="gr_svn119_2662"

><td id="2662"><a href="#2662">2662</a></td></tr
><tr id="gr_svn119_2663"

><td id="2663"><a href="#2663">2663</a></td></tr
><tr id="gr_svn119_2664"

><td id="2664"><a href="#2664">2664</a></td></tr
><tr id="gr_svn119_2665"

><td id="2665"><a href="#2665">2665</a></td></tr
><tr id="gr_svn119_2666"

><td id="2666"><a href="#2666">2666</a></td></tr
><tr id="gr_svn119_2667"

><td id="2667"><a href="#2667">2667</a></td></tr
><tr id="gr_svn119_2668"

><td id="2668"><a href="#2668">2668</a></td></tr
><tr id="gr_svn119_2669"

><td id="2669"><a href="#2669">2669</a></td></tr
><tr id="gr_svn119_2670"

><td id="2670"><a href="#2670">2670</a></td></tr
><tr id="gr_svn119_2671"

><td id="2671"><a href="#2671">2671</a></td></tr
><tr id="gr_svn119_2672"

><td id="2672"><a href="#2672">2672</a></td></tr
><tr id="gr_svn119_2673"

><td id="2673"><a href="#2673">2673</a></td></tr
><tr id="gr_svn119_2674"

><td id="2674"><a href="#2674">2674</a></td></tr
><tr id="gr_svn119_2675"

><td id="2675"><a href="#2675">2675</a></td></tr
><tr id="gr_svn119_2676"

><td id="2676"><a href="#2676">2676</a></td></tr
><tr id="gr_svn119_2677"

><td id="2677"><a href="#2677">2677</a></td></tr
><tr id="gr_svn119_2678"

><td id="2678"><a href="#2678">2678</a></td></tr
><tr id="gr_svn119_2679"

><td id="2679"><a href="#2679">2679</a></td></tr
><tr id="gr_svn119_2680"

><td id="2680"><a href="#2680">2680</a></td></tr
><tr id="gr_svn119_2681"

><td id="2681"><a href="#2681">2681</a></td></tr
><tr id="gr_svn119_2682"

><td id="2682"><a href="#2682">2682</a></td></tr
><tr id="gr_svn119_2683"

><td id="2683"><a href="#2683">2683</a></td></tr
><tr id="gr_svn119_2684"

><td id="2684"><a href="#2684">2684</a></td></tr
><tr id="gr_svn119_2685"

><td id="2685"><a href="#2685">2685</a></td></tr
><tr id="gr_svn119_2686"

><td id="2686"><a href="#2686">2686</a></td></tr
><tr id="gr_svn119_2687"

><td id="2687"><a href="#2687">2687</a></td></tr
><tr id="gr_svn119_2688"

><td id="2688"><a href="#2688">2688</a></td></tr
><tr id="gr_svn119_2689"

><td id="2689"><a href="#2689">2689</a></td></tr
><tr id="gr_svn119_2690"

><td id="2690"><a href="#2690">2690</a></td></tr
><tr id="gr_svn119_2691"

><td id="2691"><a href="#2691">2691</a></td></tr
><tr id="gr_svn119_2692"

><td id="2692"><a href="#2692">2692</a></td></tr
><tr id="gr_svn119_2693"

><td id="2693"><a href="#2693">2693</a></td></tr
><tr id="gr_svn119_2694"

><td id="2694"><a href="#2694">2694</a></td></tr
><tr id="gr_svn119_2695"

><td id="2695"><a href="#2695">2695</a></td></tr
><tr id="gr_svn119_2696"

><td id="2696"><a href="#2696">2696</a></td></tr
><tr id="gr_svn119_2697"

><td id="2697"><a href="#2697">2697</a></td></tr
><tr id="gr_svn119_2698"

><td id="2698"><a href="#2698">2698</a></td></tr
><tr id="gr_svn119_2699"

><td id="2699"><a href="#2699">2699</a></td></tr
><tr id="gr_svn119_2700"

><td id="2700"><a href="#2700">2700</a></td></tr
><tr id="gr_svn119_2701"

><td id="2701"><a href="#2701">2701</a></td></tr
><tr id="gr_svn119_2702"

><td id="2702"><a href="#2702">2702</a></td></tr
><tr id="gr_svn119_2703"

><td id="2703"><a href="#2703">2703</a></td></tr
><tr id="gr_svn119_2704"

><td id="2704"><a href="#2704">2704</a></td></tr
><tr id="gr_svn119_2705"

><td id="2705"><a href="#2705">2705</a></td></tr
><tr id="gr_svn119_2706"

><td id="2706"><a href="#2706">2706</a></td></tr
><tr id="gr_svn119_2707"

><td id="2707"><a href="#2707">2707</a></td></tr
><tr id="gr_svn119_2708"

><td id="2708"><a href="#2708">2708</a></td></tr
><tr id="gr_svn119_2709"

><td id="2709"><a href="#2709">2709</a></td></tr
><tr id="gr_svn119_2710"

><td id="2710"><a href="#2710">2710</a></td></tr
><tr id="gr_svn119_2711"

><td id="2711"><a href="#2711">2711</a></td></tr
><tr id="gr_svn119_2712"

><td id="2712"><a href="#2712">2712</a></td></tr
><tr id="gr_svn119_2713"

><td id="2713"><a href="#2713">2713</a></td></tr
><tr id="gr_svn119_2714"

><td id="2714"><a href="#2714">2714</a></td></tr
><tr id="gr_svn119_2715"

><td id="2715"><a href="#2715">2715</a></td></tr
><tr id="gr_svn119_2716"

><td id="2716"><a href="#2716">2716</a></td></tr
><tr id="gr_svn119_2717"

><td id="2717"><a href="#2717">2717</a></td></tr
><tr id="gr_svn119_2718"

><td id="2718"><a href="#2718">2718</a></td></tr
><tr id="gr_svn119_2719"

><td id="2719"><a href="#2719">2719</a></td></tr
><tr id="gr_svn119_2720"

><td id="2720"><a href="#2720">2720</a></td></tr
><tr id="gr_svn119_2721"

><td id="2721"><a href="#2721">2721</a></td></tr
><tr id="gr_svn119_2722"

><td id="2722"><a href="#2722">2722</a></td></tr
><tr id="gr_svn119_2723"

><td id="2723"><a href="#2723">2723</a></td></tr
><tr id="gr_svn119_2724"

><td id="2724"><a href="#2724">2724</a></td></tr
><tr id="gr_svn119_2725"

><td id="2725"><a href="#2725">2725</a></td></tr
><tr id="gr_svn119_2726"

><td id="2726"><a href="#2726">2726</a></td></tr
><tr id="gr_svn119_2727"

><td id="2727"><a href="#2727">2727</a></td></tr
><tr id="gr_svn119_2728"

><td id="2728"><a href="#2728">2728</a></td></tr
><tr id="gr_svn119_2729"

><td id="2729"><a href="#2729">2729</a></td></tr
><tr id="gr_svn119_2730"

><td id="2730"><a href="#2730">2730</a></td></tr
><tr id="gr_svn119_2731"

><td id="2731"><a href="#2731">2731</a></td></tr
><tr id="gr_svn119_2732"

><td id="2732"><a href="#2732">2732</a></td></tr
><tr id="gr_svn119_2733"

><td id="2733"><a href="#2733">2733</a></td></tr
><tr id="gr_svn119_2734"

><td id="2734"><a href="#2734">2734</a></td></tr
><tr id="gr_svn119_2735"

><td id="2735"><a href="#2735">2735</a></td></tr
><tr id="gr_svn119_2736"

><td id="2736"><a href="#2736">2736</a></td></tr
><tr id="gr_svn119_2737"

><td id="2737"><a href="#2737">2737</a></td></tr
><tr id="gr_svn119_2738"

><td id="2738"><a href="#2738">2738</a></td></tr
><tr id="gr_svn119_2739"

><td id="2739"><a href="#2739">2739</a></td></tr
><tr id="gr_svn119_2740"

><td id="2740"><a href="#2740">2740</a></td></tr
><tr id="gr_svn119_2741"

><td id="2741"><a href="#2741">2741</a></td></tr
><tr id="gr_svn119_2742"

><td id="2742"><a href="#2742">2742</a></td></tr
><tr id="gr_svn119_2743"

><td id="2743"><a href="#2743">2743</a></td></tr
><tr id="gr_svn119_2744"

><td id="2744"><a href="#2744">2744</a></td></tr
><tr id="gr_svn119_2745"

><td id="2745"><a href="#2745">2745</a></td></tr
><tr id="gr_svn119_2746"

><td id="2746"><a href="#2746">2746</a></td></tr
><tr id="gr_svn119_2747"

><td id="2747"><a href="#2747">2747</a></td></tr
><tr id="gr_svn119_2748"

><td id="2748"><a href="#2748">2748</a></td></tr
><tr id="gr_svn119_2749"

><td id="2749"><a href="#2749">2749</a></td></tr
><tr id="gr_svn119_2750"

><td id="2750"><a href="#2750">2750</a></td></tr
><tr id="gr_svn119_2751"

><td id="2751"><a href="#2751">2751</a></td></tr
><tr id="gr_svn119_2752"

><td id="2752"><a href="#2752">2752</a></td></tr
><tr id="gr_svn119_2753"

><td id="2753"><a href="#2753">2753</a></td></tr
><tr id="gr_svn119_2754"

><td id="2754"><a href="#2754">2754</a></td></tr
><tr id="gr_svn119_2755"

><td id="2755"><a href="#2755">2755</a></td></tr
><tr id="gr_svn119_2756"

><td id="2756"><a href="#2756">2756</a></td></tr
><tr id="gr_svn119_2757"

><td id="2757"><a href="#2757">2757</a></td></tr
><tr id="gr_svn119_2758"

><td id="2758"><a href="#2758">2758</a></td></tr
><tr id="gr_svn119_2759"

><td id="2759"><a href="#2759">2759</a></td></tr
><tr id="gr_svn119_2760"

><td id="2760"><a href="#2760">2760</a></td></tr
><tr id="gr_svn119_2761"

><td id="2761"><a href="#2761">2761</a></td></tr
><tr id="gr_svn119_2762"

><td id="2762"><a href="#2762">2762</a></td></tr
><tr id="gr_svn119_2763"

><td id="2763"><a href="#2763">2763</a></td></tr
><tr id="gr_svn119_2764"

><td id="2764"><a href="#2764">2764</a></td></tr
><tr id="gr_svn119_2765"

><td id="2765"><a href="#2765">2765</a></td></tr
><tr id="gr_svn119_2766"

><td id="2766"><a href="#2766">2766</a></td></tr
><tr id="gr_svn119_2767"

><td id="2767"><a href="#2767">2767</a></td></tr
><tr id="gr_svn119_2768"

><td id="2768"><a href="#2768">2768</a></td></tr
><tr id="gr_svn119_2769"

><td id="2769"><a href="#2769">2769</a></td></tr
><tr id="gr_svn119_2770"

><td id="2770"><a href="#2770">2770</a></td></tr
><tr id="gr_svn119_2771"

><td id="2771"><a href="#2771">2771</a></td></tr
><tr id="gr_svn119_2772"

><td id="2772"><a href="#2772">2772</a></td></tr
><tr id="gr_svn119_2773"

><td id="2773"><a href="#2773">2773</a></td></tr
><tr id="gr_svn119_2774"

><td id="2774"><a href="#2774">2774</a></td></tr
><tr id="gr_svn119_2775"

><td id="2775"><a href="#2775">2775</a></td></tr
><tr id="gr_svn119_2776"

><td id="2776"><a href="#2776">2776</a></td></tr
><tr id="gr_svn119_2777"

><td id="2777"><a href="#2777">2777</a></td></tr
><tr id="gr_svn119_2778"

><td id="2778"><a href="#2778">2778</a></td></tr
><tr id="gr_svn119_2779"

><td id="2779"><a href="#2779">2779</a></td></tr
><tr id="gr_svn119_2780"

><td id="2780"><a href="#2780">2780</a></td></tr
><tr id="gr_svn119_2781"

><td id="2781"><a href="#2781">2781</a></td></tr
><tr id="gr_svn119_2782"

><td id="2782"><a href="#2782">2782</a></td></tr
><tr id="gr_svn119_2783"

><td id="2783"><a href="#2783">2783</a></td></tr
><tr id="gr_svn119_2784"

><td id="2784"><a href="#2784">2784</a></td></tr
><tr id="gr_svn119_2785"

><td id="2785"><a href="#2785">2785</a></td></tr
><tr id="gr_svn119_2786"

><td id="2786"><a href="#2786">2786</a></td></tr
><tr id="gr_svn119_2787"

><td id="2787"><a href="#2787">2787</a></td></tr
><tr id="gr_svn119_2788"

><td id="2788"><a href="#2788">2788</a></td></tr
><tr id="gr_svn119_2789"

><td id="2789"><a href="#2789">2789</a></td></tr
><tr id="gr_svn119_2790"

><td id="2790"><a href="#2790">2790</a></td></tr
><tr id="gr_svn119_2791"

><td id="2791"><a href="#2791">2791</a></td></tr
><tr id="gr_svn119_2792"

><td id="2792"><a href="#2792">2792</a></td></tr
><tr id="gr_svn119_2793"

><td id="2793"><a href="#2793">2793</a></td></tr
><tr id="gr_svn119_2794"

><td id="2794"><a href="#2794">2794</a></td></tr
><tr id="gr_svn119_2795"

><td id="2795"><a href="#2795">2795</a></td></tr
><tr id="gr_svn119_2796"

><td id="2796"><a href="#2796">2796</a></td></tr
><tr id="gr_svn119_2797"

><td id="2797"><a href="#2797">2797</a></td></tr
><tr id="gr_svn119_2798"

><td id="2798"><a href="#2798">2798</a></td></tr
><tr id="gr_svn119_2799"

><td id="2799"><a href="#2799">2799</a></td></tr
><tr id="gr_svn119_2800"

><td id="2800"><a href="#2800">2800</a></td></tr
><tr id="gr_svn119_2801"

><td id="2801"><a href="#2801">2801</a></td></tr
><tr id="gr_svn119_2802"

><td id="2802"><a href="#2802">2802</a></td></tr
><tr id="gr_svn119_2803"

><td id="2803"><a href="#2803">2803</a></td></tr
><tr id="gr_svn119_2804"

><td id="2804"><a href="#2804">2804</a></td></tr
><tr id="gr_svn119_2805"

><td id="2805"><a href="#2805">2805</a></td></tr
><tr id="gr_svn119_2806"

><td id="2806"><a href="#2806">2806</a></td></tr
><tr id="gr_svn119_2807"

><td id="2807"><a href="#2807">2807</a></td></tr
><tr id="gr_svn119_2808"

><td id="2808"><a href="#2808">2808</a></td></tr
><tr id="gr_svn119_2809"

><td id="2809"><a href="#2809">2809</a></td></tr
><tr id="gr_svn119_2810"

><td id="2810"><a href="#2810">2810</a></td></tr
><tr id="gr_svn119_2811"

><td id="2811"><a href="#2811">2811</a></td></tr
><tr id="gr_svn119_2812"

><td id="2812"><a href="#2812">2812</a></td></tr
><tr id="gr_svn119_2813"

><td id="2813"><a href="#2813">2813</a></td></tr
><tr id="gr_svn119_2814"

><td id="2814"><a href="#2814">2814</a></td></tr
><tr id="gr_svn119_2815"

><td id="2815"><a href="#2815">2815</a></td></tr
><tr id="gr_svn119_2816"

><td id="2816"><a href="#2816">2816</a></td></tr
><tr id="gr_svn119_2817"

><td id="2817"><a href="#2817">2817</a></td></tr
><tr id="gr_svn119_2818"

><td id="2818"><a href="#2818">2818</a></td></tr
><tr id="gr_svn119_2819"

><td id="2819"><a href="#2819">2819</a></td></tr
><tr id="gr_svn119_2820"

><td id="2820"><a href="#2820">2820</a></td></tr
><tr id="gr_svn119_2821"

><td id="2821"><a href="#2821">2821</a></td></tr
><tr id="gr_svn119_2822"

><td id="2822"><a href="#2822">2822</a></td></tr
><tr id="gr_svn119_2823"

><td id="2823"><a href="#2823">2823</a></td></tr
><tr id="gr_svn119_2824"

><td id="2824"><a href="#2824">2824</a></td></tr
><tr id="gr_svn119_2825"

><td id="2825"><a href="#2825">2825</a></td></tr
><tr id="gr_svn119_2826"

><td id="2826"><a href="#2826">2826</a></td></tr
><tr id="gr_svn119_2827"

><td id="2827"><a href="#2827">2827</a></td></tr
><tr id="gr_svn119_2828"

><td id="2828"><a href="#2828">2828</a></td></tr
><tr id="gr_svn119_2829"

><td id="2829"><a href="#2829">2829</a></td></tr
><tr id="gr_svn119_2830"

><td id="2830"><a href="#2830">2830</a></td></tr
><tr id="gr_svn119_2831"

><td id="2831"><a href="#2831">2831</a></td></tr
><tr id="gr_svn119_2832"

><td id="2832"><a href="#2832">2832</a></td></tr
><tr id="gr_svn119_2833"

><td id="2833"><a href="#2833">2833</a></td></tr
><tr id="gr_svn119_2834"

><td id="2834"><a href="#2834">2834</a></td></tr
><tr id="gr_svn119_2835"

><td id="2835"><a href="#2835">2835</a></td></tr
><tr id="gr_svn119_2836"

><td id="2836"><a href="#2836">2836</a></td></tr
><tr id="gr_svn119_2837"

><td id="2837"><a href="#2837">2837</a></td></tr
><tr id="gr_svn119_2838"

><td id="2838"><a href="#2838">2838</a></td></tr
><tr id="gr_svn119_2839"

><td id="2839"><a href="#2839">2839</a></td></tr
><tr id="gr_svn119_2840"

><td id="2840"><a href="#2840">2840</a></td></tr
><tr id="gr_svn119_2841"

><td id="2841"><a href="#2841">2841</a></td></tr
><tr id="gr_svn119_2842"

><td id="2842"><a href="#2842">2842</a></td></tr
><tr id="gr_svn119_2843"

><td id="2843"><a href="#2843">2843</a></td></tr
><tr id="gr_svn119_2844"

><td id="2844"><a href="#2844">2844</a></td></tr
><tr id="gr_svn119_2845"

><td id="2845"><a href="#2845">2845</a></td></tr
><tr id="gr_svn119_2846"

><td id="2846"><a href="#2846">2846</a></td></tr
><tr id="gr_svn119_2847"

><td id="2847"><a href="#2847">2847</a></td></tr
><tr id="gr_svn119_2848"

><td id="2848"><a href="#2848">2848</a></td></tr
><tr id="gr_svn119_2849"

><td id="2849"><a href="#2849">2849</a></td></tr
><tr id="gr_svn119_2850"

><td id="2850"><a href="#2850">2850</a></td></tr
><tr id="gr_svn119_2851"

><td id="2851"><a href="#2851">2851</a></td></tr
><tr id="gr_svn119_2852"

><td id="2852"><a href="#2852">2852</a></td></tr
><tr id="gr_svn119_2853"

><td id="2853"><a href="#2853">2853</a></td></tr
><tr id="gr_svn119_2854"

><td id="2854"><a href="#2854">2854</a></td></tr
><tr id="gr_svn119_2855"

><td id="2855"><a href="#2855">2855</a></td></tr
><tr id="gr_svn119_2856"

><td id="2856"><a href="#2856">2856</a></td></tr
><tr id="gr_svn119_2857"

><td id="2857"><a href="#2857">2857</a></td></tr
><tr id="gr_svn119_2858"

><td id="2858"><a href="#2858">2858</a></td></tr
><tr id="gr_svn119_2859"

><td id="2859"><a href="#2859">2859</a></td></tr
><tr id="gr_svn119_2860"

><td id="2860"><a href="#2860">2860</a></td></tr
><tr id="gr_svn119_2861"

><td id="2861"><a href="#2861">2861</a></td></tr
><tr id="gr_svn119_2862"

><td id="2862"><a href="#2862">2862</a></td></tr
><tr id="gr_svn119_2863"

><td id="2863"><a href="#2863">2863</a></td></tr
><tr id="gr_svn119_2864"

><td id="2864"><a href="#2864">2864</a></td></tr
><tr id="gr_svn119_2865"

><td id="2865"><a href="#2865">2865</a></td></tr
><tr id="gr_svn119_2866"

><td id="2866"><a href="#2866">2866</a></td></tr
><tr id="gr_svn119_2867"

><td id="2867"><a href="#2867">2867</a></td></tr
><tr id="gr_svn119_2868"

><td id="2868"><a href="#2868">2868</a></td></tr
><tr id="gr_svn119_2869"

><td id="2869"><a href="#2869">2869</a></td></tr
><tr id="gr_svn119_2870"

><td id="2870"><a href="#2870">2870</a></td></tr
><tr id="gr_svn119_2871"

><td id="2871"><a href="#2871">2871</a></td></tr
><tr id="gr_svn119_2872"

><td id="2872"><a href="#2872">2872</a></td></tr
><tr id="gr_svn119_2873"

><td id="2873"><a href="#2873">2873</a></td></tr
><tr id="gr_svn119_2874"

><td id="2874"><a href="#2874">2874</a></td></tr
><tr id="gr_svn119_2875"

><td id="2875"><a href="#2875">2875</a></td></tr
><tr id="gr_svn119_2876"

><td id="2876"><a href="#2876">2876</a></td></tr
><tr id="gr_svn119_2877"

><td id="2877"><a href="#2877">2877</a></td></tr
><tr id="gr_svn119_2878"

><td id="2878"><a href="#2878">2878</a></td></tr
><tr id="gr_svn119_2879"

><td id="2879"><a href="#2879">2879</a></td></tr
><tr id="gr_svn119_2880"

><td id="2880"><a href="#2880">2880</a></td></tr
><tr id="gr_svn119_2881"

><td id="2881"><a href="#2881">2881</a></td></tr
><tr id="gr_svn119_2882"

><td id="2882"><a href="#2882">2882</a></td></tr
><tr id="gr_svn119_2883"

><td id="2883"><a href="#2883">2883</a></td></tr
><tr id="gr_svn119_2884"

><td id="2884"><a href="#2884">2884</a></td></tr
><tr id="gr_svn119_2885"

><td id="2885"><a href="#2885">2885</a></td></tr
><tr id="gr_svn119_2886"

><td id="2886"><a href="#2886">2886</a></td></tr
><tr id="gr_svn119_2887"

><td id="2887"><a href="#2887">2887</a></td></tr
><tr id="gr_svn119_2888"

><td id="2888"><a href="#2888">2888</a></td></tr
><tr id="gr_svn119_2889"

><td id="2889"><a href="#2889">2889</a></td></tr
><tr id="gr_svn119_2890"

><td id="2890"><a href="#2890">2890</a></td></tr
><tr id="gr_svn119_2891"

><td id="2891"><a href="#2891">2891</a></td></tr
><tr id="gr_svn119_2892"

><td id="2892"><a href="#2892">2892</a></td></tr
><tr id="gr_svn119_2893"

><td id="2893"><a href="#2893">2893</a></td></tr
><tr id="gr_svn119_2894"

><td id="2894"><a href="#2894">2894</a></td></tr
><tr id="gr_svn119_2895"

><td id="2895"><a href="#2895">2895</a></td></tr
><tr id="gr_svn119_2896"

><td id="2896"><a href="#2896">2896</a></td></tr
><tr id="gr_svn119_2897"

><td id="2897"><a href="#2897">2897</a></td></tr
><tr id="gr_svn119_2898"

><td id="2898"><a href="#2898">2898</a></td></tr
><tr id="gr_svn119_2899"

><td id="2899"><a href="#2899">2899</a></td></tr
><tr id="gr_svn119_2900"

><td id="2900"><a href="#2900">2900</a></td></tr
><tr id="gr_svn119_2901"

><td id="2901"><a href="#2901">2901</a></td></tr
><tr id="gr_svn119_2902"

><td id="2902"><a href="#2902">2902</a></td></tr
><tr id="gr_svn119_2903"

><td id="2903"><a href="#2903">2903</a></td></tr
><tr id="gr_svn119_2904"

><td id="2904"><a href="#2904">2904</a></td></tr
><tr id="gr_svn119_2905"

><td id="2905"><a href="#2905">2905</a></td></tr
><tr id="gr_svn119_2906"

><td id="2906"><a href="#2906">2906</a></td></tr
><tr id="gr_svn119_2907"

><td id="2907"><a href="#2907">2907</a></td></tr
><tr id="gr_svn119_2908"

><td id="2908"><a href="#2908">2908</a></td></tr
><tr id="gr_svn119_2909"

><td id="2909"><a href="#2909">2909</a></td></tr
><tr id="gr_svn119_2910"

><td id="2910"><a href="#2910">2910</a></td></tr
><tr id="gr_svn119_2911"

><td id="2911"><a href="#2911">2911</a></td></tr
><tr id="gr_svn119_2912"

><td id="2912"><a href="#2912">2912</a></td></tr
><tr id="gr_svn119_2913"

><td id="2913"><a href="#2913">2913</a></td></tr
><tr id="gr_svn119_2914"

><td id="2914"><a href="#2914">2914</a></td></tr
><tr id="gr_svn119_2915"

><td id="2915"><a href="#2915">2915</a></td></tr
><tr id="gr_svn119_2916"

><td id="2916"><a href="#2916">2916</a></td></tr
><tr id="gr_svn119_2917"

><td id="2917"><a href="#2917">2917</a></td></tr
><tr id="gr_svn119_2918"

><td id="2918"><a href="#2918">2918</a></td></tr
><tr id="gr_svn119_2919"

><td id="2919"><a href="#2919">2919</a></td></tr
><tr id="gr_svn119_2920"

><td id="2920"><a href="#2920">2920</a></td></tr
><tr id="gr_svn119_2921"

><td id="2921"><a href="#2921">2921</a></td></tr
><tr id="gr_svn119_2922"

><td id="2922"><a href="#2922">2922</a></td></tr
><tr id="gr_svn119_2923"

><td id="2923"><a href="#2923">2923</a></td></tr
><tr id="gr_svn119_2924"

><td id="2924"><a href="#2924">2924</a></td></tr
><tr id="gr_svn119_2925"

><td id="2925"><a href="#2925">2925</a></td></tr
><tr id="gr_svn119_2926"

><td id="2926"><a href="#2926">2926</a></td></tr
><tr id="gr_svn119_2927"

><td id="2927"><a href="#2927">2927</a></td></tr
><tr id="gr_svn119_2928"

><td id="2928"><a href="#2928">2928</a></td></tr
><tr id="gr_svn119_2929"

><td id="2929"><a href="#2929">2929</a></td></tr
><tr id="gr_svn119_2930"

><td id="2930"><a href="#2930">2930</a></td></tr
><tr id="gr_svn119_2931"

><td id="2931"><a href="#2931">2931</a></td></tr
><tr id="gr_svn119_2932"

><td id="2932"><a href="#2932">2932</a></td></tr
><tr id="gr_svn119_2933"

><td id="2933"><a href="#2933">2933</a></td></tr
><tr id="gr_svn119_2934"

><td id="2934"><a href="#2934">2934</a></td></tr
><tr id="gr_svn119_2935"

><td id="2935"><a href="#2935">2935</a></td></tr
><tr id="gr_svn119_2936"

><td id="2936"><a href="#2936">2936</a></td></tr
><tr id="gr_svn119_2937"

><td id="2937"><a href="#2937">2937</a></td></tr
><tr id="gr_svn119_2938"

><td id="2938"><a href="#2938">2938</a></td></tr
><tr id="gr_svn119_2939"

><td id="2939"><a href="#2939">2939</a></td></tr
><tr id="gr_svn119_2940"

><td id="2940"><a href="#2940">2940</a></td></tr
><tr id="gr_svn119_2941"

><td id="2941"><a href="#2941">2941</a></td></tr
><tr id="gr_svn119_2942"

><td id="2942"><a href="#2942">2942</a></td></tr
><tr id="gr_svn119_2943"

><td id="2943"><a href="#2943">2943</a></td></tr
><tr id="gr_svn119_2944"

><td id="2944"><a href="#2944">2944</a></td></tr
><tr id="gr_svn119_2945"

><td id="2945"><a href="#2945">2945</a></td></tr
><tr id="gr_svn119_2946"

><td id="2946"><a href="#2946">2946</a></td></tr
><tr id="gr_svn119_2947"

><td id="2947"><a href="#2947">2947</a></td></tr
><tr id="gr_svn119_2948"

><td id="2948"><a href="#2948">2948</a></td></tr
><tr id="gr_svn119_2949"

><td id="2949"><a href="#2949">2949</a></td></tr
><tr id="gr_svn119_2950"

><td id="2950"><a href="#2950">2950</a></td></tr
><tr id="gr_svn119_2951"

><td id="2951"><a href="#2951">2951</a></td></tr
><tr id="gr_svn119_2952"

><td id="2952"><a href="#2952">2952</a></td></tr
><tr id="gr_svn119_2953"

><td id="2953"><a href="#2953">2953</a></td></tr
><tr id="gr_svn119_2954"

><td id="2954"><a href="#2954">2954</a></td></tr
><tr id="gr_svn119_2955"

><td id="2955"><a href="#2955">2955</a></td></tr
><tr id="gr_svn119_2956"

><td id="2956"><a href="#2956">2956</a></td></tr
><tr id="gr_svn119_2957"

><td id="2957"><a href="#2957">2957</a></td></tr
><tr id="gr_svn119_2958"

><td id="2958"><a href="#2958">2958</a></td></tr
><tr id="gr_svn119_2959"

><td id="2959"><a href="#2959">2959</a></td></tr
><tr id="gr_svn119_2960"

><td id="2960"><a href="#2960">2960</a></td></tr
><tr id="gr_svn119_2961"

><td id="2961"><a href="#2961">2961</a></td></tr
><tr id="gr_svn119_2962"

><td id="2962"><a href="#2962">2962</a></td></tr
><tr id="gr_svn119_2963"

><td id="2963"><a href="#2963">2963</a></td></tr
><tr id="gr_svn119_2964"

><td id="2964"><a href="#2964">2964</a></td></tr
><tr id="gr_svn119_2965"

><td id="2965"><a href="#2965">2965</a></td></tr
><tr id="gr_svn119_2966"

><td id="2966"><a href="#2966">2966</a></td></tr
><tr id="gr_svn119_2967"

><td id="2967"><a href="#2967">2967</a></td></tr
><tr id="gr_svn119_2968"

><td id="2968"><a href="#2968">2968</a></td></tr
><tr id="gr_svn119_2969"

><td id="2969"><a href="#2969">2969</a></td></tr
><tr id="gr_svn119_2970"

><td id="2970"><a href="#2970">2970</a></td></tr
><tr id="gr_svn119_2971"

><td id="2971"><a href="#2971">2971</a></td></tr
><tr id="gr_svn119_2972"

><td id="2972"><a href="#2972">2972</a></td></tr
><tr id="gr_svn119_2973"

><td id="2973"><a href="#2973">2973</a></td></tr
><tr id="gr_svn119_2974"

><td id="2974"><a href="#2974">2974</a></td></tr
><tr id="gr_svn119_2975"

><td id="2975"><a href="#2975">2975</a></td></tr
><tr id="gr_svn119_2976"

><td id="2976"><a href="#2976">2976</a></td></tr
><tr id="gr_svn119_2977"

><td id="2977"><a href="#2977">2977</a></td></tr
><tr id="gr_svn119_2978"

><td id="2978"><a href="#2978">2978</a></td></tr
><tr id="gr_svn119_2979"

><td id="2979"><a href="#2979">2979</a></td></tr
><tr id="gr_svn119_2980"

><td id="2980"><a href="#2980">2980</a></td></tr
><tr id="gr_svn119_2981"

><td id="2981"><a href="#2981">2981</a></td></tr
><tr id="gr_svn119_2982"

><td id="2982"><a href="#2982">2982</a></td></tr
><tr id="gr_svn119_2983"

><td id="2983"><a href="#2983">2983</a></td></tr
><tr id="gr_svn119_2984"

><td id="2984"><a href="#2984">2984</a></td></tr
><tr id="gr_svn119_2985"

><td id="2985"><a href="#2985">2985</a></td></tr
><tr id="gr_svn119_2986"

><td id="2986"><a href="#2986">2986</a></td></tr
><tr id="gr_svn119_2987"

><td id="2987"><a href="#2987">2987</a></td></tr
><tr id="gr_svn119_2988"

><td id="2988"><a href="#2988">2988</a></td></tr
><tr id="gr_svn119_2989"

><td id="2989"><a href="#2989">2989</a></td></tr
><tr id="gr_svn119_2990"

><td id="2990"><a href="#2990">2990</a></td></tr
><tr id="gr_svn119_2991"

><td id="2991"><a href="#2991">2991</a></td></tr
><tr id="gr_svn119_2992"

><td id="2992"><a href="#2992">2992</a></td></tr
><tr id="gr_svn119_2993"

><td id="2993"><a href="#2993">2993</a></td></tr
><tr id="gr_svn119_2994"

><td id="2994"><a href="#2994">2994</a></td></tr
><tr id="gr_svn119_2995"

><td id="2995"><a href="#2995">2995</a></td></tr
><tr id="gr_svn119_2996"

><td id="2996"><a href="#2996">2996</a></td></tr
><tr id="gr_svn119_2997"

><td id="2997"><a href="#2997">2997</a></td></tr
><tr id="gr_svn119_2998"

><td id="2998"><a href="#2998">2998</a></td></tr
><tr id="gr_svn119_2999"

><td id="2999"><a href="#2999">2999</a></td></tr
><tr id="gr_svn119_3000"

><td id="3000"><a href="#3000">3000</a></td></tr
><tr id="gr_svn119_3001"

><td id="3001"><a href="#3001">3001</a></td></tr
><tr id="gr_svn119_3002"

><td id="3002"><a href="#3002">3002</a></td></tr
><tr id="gr_svn119_3003"

><td id="3003"><a href="#3003">3003</a></td></tr
><tr id="gr_svn119_3004"

><td id="3004"><a href="#3004">3004</a></td></tr
><tr id="gr_svn119_3005"

><td id="3005"><a href="#3005">3005</a></td></tr
><tr id="gr_svn119_3006"

><td id="3006"><a href="#3006">3006</a></td></tr
><tr id="gr_svn119_3007"

><td id="3007"><a href="#3007">3007</a></td></tr
><tr id="gr_svn119_3008"

><td id="3008"><a href="#3008">3008</a></td></tr
><tr id="gr_svn119_3009"

><td id="3009"><a href="#3009">3009</a></td></tr
><tr id="gr_svn119_3010"

><td id="3010"><a href="#3010">3010</a></td></tr
><tr id="gr_svn119_3011"

><td id="3011"><a href="#3011">3011</a></td></tr
><tr id="gr_svn119_3012"

><td id="3012"><a href="#3012">3012</a></td></tr
><tr id="gr_svn119_3013"

><td id="3013"><a href="#3013">3013</a></td></tr
><tr id="gr_svn119_3014"

><td id="3014"><a href="#3014">3014</a></td></tr
><tr id="gr_svn119_3015"

><td id="3015"><a href="#3015">3015</a></td></tr
><tr id="gr_svn119_3016"

><td id="3016"><a href="#3016">3016</a></td></tr
><tr id="gr_svn119_3017"

><td id="3017"><a href="#3017">3017</a></td></tr
><tr id="gr_svn119_3018"

><td id="3018"><a href="#3018">3018</a></td></tr
><tr id="gr_svn119_3019"

><td id="3019"><a href="#3019">3019</a></td></tr
><tr id="gr_svn119_3020"

><td id="3020"><a href="#3020">3020</a></td></tr
><tr id="gr_svn119_3021"

><td id="3021"><a href="#3021">3021</a></td></tr
><tr id="gr_svn119_3022"

><td id="3022"><a href="#3022">3022</a></td></tr
><tr id="gr_svn119_3023"

><td id="3023"><a href="#3023">3023</a></td></tr
><tr id="gr_svn119_3024"

><td id="3024"><a href="#3024">3024</a></td></tr
><tr id="gr_svn119_3025"

><td id="3025"><a href="#3025">3025</a></td></tr
><tr id="gr_svn119_3026"

><td id="3026"><a href="#3026">3026</a></td></tr
><tr id="gr_svn119_3027"

><td id="3027"><a href="#3027">3027</a></td></tr
><tr id="gr_svn119_3028"

><td id="3028"><a href="#3028">3028</a></td></tr
><tr id="gr_svn119_3029"

><td id="3029"><a href="#3029">3029</a></td></tr
><tr id="gr_svn119_3030"

><td id="3030"><a href="#3030">3030</a></td></tr
><tr id="gr_svn119_3031"

><td id="3031"><a href="#3031">3031</a></td></tr
><tr id="gr_svn119_3032"

><td id="3032"><a href="#3032">3032</a></td></tr
><tr id="gr_svn119_3033"

><td id="3033"><a href="#3033">3033</a></td></tr
><tr id="gr_svn119_3034"

><td id="3034"><a href="#3034">3034</a></td></tr
><tr id="gr_svn119_3035"

><td id="3035"><a href="#3035">3035</a></td></tr
><tr id="gr_svn119_3036"

><td id="3036"><a href="#3036">3036</a></td></tr
><tr id="gr_svn119_3037"

><td id="3037"><a href="#3037">3037</a></td></tr
><tr id="gr_svn119_3038"

><td id="3038"><a href="#3038">3038</a></td></tr
><tr id="gr_svn119_3039"

><td id="3039"><a href="#3039">3039</a></td></tr
><tr id="gr_svn119_3040"

><td id="3040"><a href="#3040">3040</a></td></tr
><tr id="gr_svn119_3041"

><td id="3041"><a href="#3041">3041</a></td></tr
><tr id="gr_svn119_3042"

><td id="3042"><a href="#3042">3042</a></td></tr
><tr id="gr_svn119_3043"

><td id="3043"><a href="#3043">3043</a></td></tr
><tr id="gr_svn119_3044"

><td id="3044"><a href="#3044">3044</a></td></tr
><tr id="gr_svn119_3045"

><td id="3045"><a href="#3045">3045</a></td></tr
><tr id="gr_svn119_3046"

><td id="3046"><a href="#3046">3046</a></td></tr
><tr id="gr_svn119_3047"

><td id="3047"><a href="#3047">3047</a></td></tr
><tr id="gr_svn119_3048"

><td id="3048"><a href="#3048">3048</a></td></tr
><tr id="gr_svn119_3049"

><td id="3049"><a href="#3049">3049</a></td></tr
><tr id="gr_svn119_3050"

><td id="3050"><a href="#3050">3050</a></td></tr
><tr id="gr_svn119_3051"

><td id="3051"><a href="#3051">3051</a></td></tr
><tr id="gr_svn119_3052"

><td id="3052"><a href="#3052">3052</a></td></tr
><tr id="gr_svn119_3053"

><td id="3053"><a href="#3053">3053</a></td></tr
><tr id="gr_svn119_3054"

><td id="3054"><a href="#3054">3054</a></td></tr
><tr id="gr_svn119_3055"

><td id="3055"><a href="#3055">3055</a></td></tr
><tr id="gr_svn119_3056"

><td id="3056"><a href="#3056">3056</a></td></tr
><tr id="gr_svn119_3057"

><td id="3057"><a href="#3057">3057</a></td></tr
><tr id="gr_svn119_3058"

><td id="3058"><a href="#3058">3058</a></td></tr
><tr id="gr_svn119_3059"

><td id="3059"><a href="#3059">3059</a></td></tr
><tr id="gr_svn119_3060"

><td id="3060"><a href="#3060">3060</a></td></tr
><tr id="gr_svn119_3061"

><td id="3061"><a href="#3061">3061</a></td></tr
><tr id="gr_svn119_3062"

><td id="3062"><a href="#3062">3062</a></td></tr
><tr id="gr_svn119_3063"

><td id="3063"><a href="#3063">3063</a></td></tr
><tr id="gr_svn119_3064"

><td id="3064"><a href="#3064">3064</a></td></tr
><tr id="gr_svn119_3065"

><td id="3065"><a href="#3065">3065</a></td></tr
><tr id="gr_svn119_3066"

><td id="3066"><a href="#3066">3066</a></td></tr
><tr id="gr_svn119_3067"

><td id="3067"><a href="#3067">3067</a></td></tr
><tr id="gr_svn119_3068"

><td id="3068"><a href="#3068">3068</a></td></tr
><tr id="gr_svn119_3069"

><td id="3069"><a href="#3069">3069</a></td></tr
><tr id="gr_svn119_3070"

><td id="3070"><a href="#3070">3070</a></td></tr
><tr id="gr_svn119_3071"

><td id="3071"><a href="#3071">3071</a></td></tr
><tr id="gr_svn119_3072"

><td id="3072"><a href="#3072">3072</a></td></tr
><tr id="gr_svn119_3073"

><td id="3073"><a href="#3073">3073</a></td></tr
><tr id="gr_svn119_3074"

><td id="3074"><a href="#3074">3074</a></td></tr
><tr id="gr_svn119_3075"

><td id="3075"><a href="#3075">3075</a></td></tr
><tr id="gr_svn119_3076"

><td id="3076"><a href="#3076">3076</a></td></tr
><tr id="gr_svn119_3077"

><td id="3077"><a href="#3077">3077</a></td></tr
><tr id="gr_svn119_3078"

><td id="3078"><a href="#3078">3078</a></td></tr
><tr id="gr_svn119_3079"

><td id="3079"><a href="#3079">3079</a></td></tr
><tr id="gr_svn119_3080"

><td id="3080"><a href="#3080">3080</a></td></tr
><tr id="gr_svn119_3081"

><td id="3081"><a href="#3081">3081</a></td></tr
><tr id="gr_svn119_3082"

><td id="3082"><a href="#3082">3082</a></td></tr
><tr id="gr_svn119_3083"

><td id="3083"><a href="#3083">3083</a></td></tr
><tr id="gr_svn119_3084"

><td id="3084"><a href="#3084">3084</a></td></tr
><tr id="gr_svn119_3085"

><td id="3085"><a href="#3085">3085</a></td></tr
><tr id="gr_svn119_3086"

><td id="3086"><a href="#3086">3086</a></td></tr
><tr id="gr_svn119_3087"

><td id="3087"><a href="#3087">3087</a></td></tr
><tr id="gr_svn119_3088"

><td id="3088"><a href="#3088">3088</a></td></tr
><tr id="gr_svn119_3089"

><td id="3089"><a href="#3089">3089</a></td></tr
><tr id="gr_svn119_3090"

><td id="3090"><a href="#3090">3090</a></td></tr
><tr id="gr_svn119_3091"

><td id="3091"><a href="#3091">3091</a></td></tr
><tr id="gr_svn119_3092"

><td id="3092"><a href="#3092">3092</a></td></tr
><tr id="gr_svn119_3093"

><td id="3093"><a href="#3093">3093</a></td></tr
><tr id="gr_svn119_3094"

><td id="3094"><a href="#3094">3094</a></td></tr
><tr id="gr_svn119_3095"

><td id="3095"><a href="#3095">3095</a></td></tr
><tr id="gr_svn119_3096"

><td id="3096"><a href="#3096">3096</a></td></tr
><tr id="gr_svn119_3097"

><td id="3097"><a href="#3097">3097</a></td></tr
><tr id="gr_svn119_3098"

><td id="3098"><a href="#3098">3098</a></td></tr
><tr id="gr_svn119_3099"

><td id="3099"><a href="#3099">3099</a></td></tr
><tr id="gr_svn119_3100"

><td id="3100"><a href="#3100">3100</a></td></tr
><tr id="gr_svn119_3101"

><td id="3101"><a href="#3101">3101</a></td></tr
><tr id="gr_svn119_3102"

><td id="3102"><a href="#3102">3102</a></td></tr
><tr id="gr_svn119_3103"

><td id="3103"><a href="#3103">3103</a></td></tr
><tr id="gr_svn119_3104"

><td id="3104"><a href="#3104">3104</a></td></tr
><tr id="gr_svn119_3105"

><td id="3105"><a href="#3105">3105</a></td></tr
><tr id="gr_svn119_3106"

><td id="3106"><a href="#3106">3106</a></td></tr
><tr id="gr_svn119_3107"

><td id="3107"><a href="#3107">3107</a></td></tr
><tr id="gr_svn119_3108"

><td id="3108"><a href="#3108">3108</a></td></tr
><tr id="gr_svn119_3109"

><td id="3109"><a href="#3109">3109</a></td></tr
><tr id="gr_svn119_3110"

><td id="3110"><a href="#3110">3110</a></td></tr
><tr id="gr_svn119_3111"

><td id="3111"><a href="#3111">3111</a></td></tr
><tr id="gr_svn119_3112"

><td id="3112"><a href="#3112">3112</a></td></tr
><tr id="gr_svn119_3113"

><td id="3113"><a href="#3113">3113</a></td></tr
><tr id="gr_svn119_3114"

><td id="3114"><a href="#3114">3114</a></td></tr
><tr id="gr_svn119_3115"

><td id="3115"><a href="#3115">3115</a></td></tr
><tr id="gr_svn119_3116"

><td id="3116"><a href="#3116">3116</a></td></tr
><tr id="gr_svn119_3117"

><td id="3117"><a href="#3117">3117</a></td></tr
><tr id="gr_svn119_3118"

><td id="3118"><a href="#3118">3118</a></td></tr
><tr id="gr_svn119_3119"

><td id="3119"><a href="#3119">3119</a></td></tr
><tr id="gr_svn119_3120"

><td id="3120"><a href="#3120">3120</a></td></tr
><tr id="gr_svn119_3121"

><td id="3121"><a href="#3121">3121</a></td></tr
><tr id="gr_svn119_3122"

><td id="3122"><a href="#3122">3122</a></td></tr
><tr id="gr_svn119_3123"

><td id="3123"><a href="#3123">3123</a></td></tr
><tr id="gr_svn119_3124"

><td id="3124"><a href="#3124">3124</a></td></tr
><tr id="gr_svn119_3125"

><td id="3125"><a href="#3125">3125</a></td></tr
><tr id="gr_svn119_3126"

><td id="3126"><a href="#3126">3126</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre ><table id="src_table_0"><tr
id=sl_svn119_1

><td class="source">// VT100.js -- JavaScript based terminal emulator<br></td></tr
><tr
id=sl_svn119_2

><td class="source">// Copyright (C) 2008-2009 Markus Gutschke &lt;markus@shellinabox.com&gt;<br></td></tr
><tr
id=sl_svn119_3

><td class="source">//<br></td></tr
><tr
id=sl_svn119_4

><td class="source">// This program is free software; you can redistribute it and/or modify<br></td></tr
><tr
id=sl_svn119_5

><td class="source">// it under the terms of the GNU General Public License version 2 as<br></td></tr
><tr
id=sl_svn119_6

><td class="source">// published by the Free Software Foundation.<br></td></tr
><tr
id=sl_svn119_7

><td class="source">//<br></td></tr
><tr
id=sl_svn119_8

><td class="source">// This program is distributed in the hope that it will be useful,<br></td></tr
><tr
id=sl_svn119_9

><td class="source">// but WITHOUT ANY WARRANTY; without even the implied warranty of<br></td></tr
><tr
id=sl_svn119_10

><td class="source">// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the<br></td></tr
><tr
id=sl_svn119_11

><td class="source">// GNU General Public License for more details.<br></td></tr
><tr
id=sl_svn119_12

><td class="source">//<br></td></tr
><tr
id=sl_svn119_13

><td class="source">// You should have received a copy of the GNU General Public License along<br></td></tr
><tr
id=sl_svn119_14

><td class="source">// with this program; if not, write to the Free Software Foundation, Inc.,<br></td></tr
><tr
id=sl_svn119_15

><td class="source">// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.<br></td></tr
><tr
id=sl_svn119_16

><td class="source">//<br></td></tr
><tr
id=sl_svn119_17

><td class="source">// In addition to these license terms, the author grants the following<br></td></tr
><tr
id=sl_svn119_18

><td class="source">// additional rights:<br></td></tr
><tr
id=sl_svn119_19

><td class="source">//<br></td></tr
><tr
id=sl_svn119_20

><td class="source">// If you modify this program, or any covered work, by linking or<br></td></tr
><tr
id=sl_svn119_21

><td class="source">// combining it with the OpenSSL project&#39;s OpenSSL library (or a<br></td></tr
><tr
id=sl_svn119_22

><td class="source">// modified version of that library), containing parts covered by the<br></td></tr
><tr
id=sl_svn119_23

><td class="source">// terms of the OpenSSL or SSLeay licenses, the author<br></td></tr
><tr
id=sl_svn119_24

><td class="source">// grants you additional permission to convey the resulting work.<br></td></tr
><tr
id=sl_svn119_25

><td class="source">// Corresponding Source for a non-source form of such a combination<br></td></tr
><tr
id=sl_svn119_26

><td class="source">// shall include the source code for the parts of OpenSSL used as well<br></td></tr
><tr
id=sl_svn119_27

><td class="source">// as that of the covered work.<br></td></tr
><tr
id=sl_svn119_28

><td class="source">//<br></td></tr
><tr
id=sl_svn119_29

><td class="source">// You may at your option choose to remove this additional permission from<br></td></tr
><tr
id=sl_svn119_30

><td class="source">// the work, or from any part of it.<br></td></tr
><tr
id=sl_svn119_31

><td class="source">//<br></td></tr
><tr
id=sl_svn119_32

><td class="source">// It is possible to build this program in a way that it loads OpenSSL<br></td></tr
><tr
id=sl_svn119_33

><td class="source">// libraries at run-time. If doing so, the following notices are required<br></td></tr
><tr
id=sl_svn119_34

><td class="source">// by the OpenSSL and SSLeay licenses:<br></td></tr
><tr
id=sl_svn119_35

><td class="source">//<br></td></tr
><tr
id=sl_svn119_36

><td class="source">// This product includes software developed by the OpenSSL Project<br></td></tr
><tr
id=sl_svn119_37

><td class="source">// for use in the OpenSSL Toolkit. (http://www.openssl.org/)<br></td></tr
><tr
id=sl_svn119_38

><td class="source">//<br></td></tr
><tr
id=sl_svn119_39

><td class="source">// This product includes cryptographic software written by Eric Young<br></td></tr
><tr
id=sl_svn119_40

><td class="source">// (eay@cryptsoft.com)<br></td></tr
><tr
id=sl_svn119_41

><td class="source">//<br></td></tr
><tr
id=sl_svn119_42

><td class="source">//<br></td></tr
><tr
id=sl_svn119_43

><td class="source">// The most up-to-date version of this program is always available from<br></td></tr
><tr
id=sl_svn119_44

><td class="source">// http://shellinabox.com<br></td></tr
><tr
id=sl_svn119_45

><td class="source">//<br></td></tr
><tr
id=sl_svn119_46

><td class="source">//<br></td></tr
><tr
id=sl_svn119_47

><td class="source">// Notes:<br></td></tr
><tr
id=sl_svn119_48

><td class="source">//<br></td></tr
><tr
id=sl_svn119_49

><td class="source">// The author believes that for the purposes of this license, you meet the<br></td></tr
><tr
id=sl_svn119_50

><td class="source">// requirements for publishing the source code, if your web server publishes<br></td></tr
><tr
id=sl_svn119_51

><td class="source">// the source in unmodified form (i.e. with licensing information, comments,<br></td></tr
><tr
id=sl_svn119_52

><td class="source">// formatting, and identifier names intact). If there are technical reasons<br></td></tr
><tr
id=sl_svn119_53

><td class="source">// that require you to make changes to the source code when serving the<br></td></tr
><tr
id=sl_svn119_54

><td class="source">// JavaScript (e.g to remove pre-processor directives from the source), these<br></td></tr
><tr
id=sl_svn119_55

><td class="source">// changes should be done in a reversible fashion.<br></td></tr
><tr
id=sl_svn119_56

><td class="source">//<br></td></tr
><tr
id=sl_svn119_57

><td class="source">// The author does not consider websites that reference this script in<br></td></tr
><tr
id=sl_svn119_58

><td class="source">// unmodified form, and web servers that serve this script in unmodified form<br></td></tr
><tr
id=sl_svn119_59

><td class="source">// to be derived works. As such, they are believed to be outside of the<br></td></tr
><tr
id=sl_svn119_60

><td class="source">// scope of this license and not subject to the rights or restrictions of the<br></td></tr
><tr
id=sl_svn119_61

><td class="source">// GNU General Public License.<br></td></tr
><tr
id=sl_svn119_62

><td class="source">//<br></td></tr
><tr
id=sl_svn119_63

><td class="source">// If in doubt, consult a legal professional familiar with the laws that<br></td></tr
><tr
id=sl_svn119_64

><td class="source">// apply in your country.<br></td></tr
><tr
id=sl_svn119_65

><td class="source"><br></td></tr
><tr
id=sl_svn119_66

><td class="source">// #define ESnormal        0<br></td></tr
><tr
id=sl_svn119_67

><td class="source">// #define ESesc           1<br></td></tr
><tr
id=sl_svn119_68

><td class="source">// #define ESsquare        2<br></td></tr
><tr
id=sl_svn119_69

><td class="source">// #define ESgetpars       3<br></td></tr
><tr
id=sl_svn119_70

><td class="source">// #define ESgotpars       4<br></td></tr
><tr
id=sl_svn119_71

><td class="source">// #define ESdeviceattr    5<br></td></tr
><tr
id=sl_svn119_72

><td class="source">// #define ESfunckey       6<br></td></tr
><tr
id=sl_svn119_73

><td class="source">// #define EShash          7<br></td></tr
><tr
id=sl_svn119_74

><td class="source">// #define ESsetG0         8<br></td></tr
><tr
id=sl_svn119_75

><td class="source">// #define ESsetG1         9<br></td></tr
><tr
id=sl_svn119_76

><td class="source">// #define ESsetG2        10<br></td></tr
><tr
id=sl_svn119_77

><td class="source">// #define ESsetG3        11<br></td></tr
><tr
id=sl_svn119_78

><td class="source">// #define ESbang         12<br></td></tr
><tr
id=sl_svn119_79

><td class="source">// #define ESpercent      13<br></td></tr
><tr
id=sl_svn119_80

><td class="source">// #define ESignore       14<br></td></tr
><tr
id=sl_svn119_81

><td class="source">// #define ESnonstd       15<br></td></tr
><tr
id=sl_svn119_82

><td class="source">// #define ESpalette      16<br></td></tr
><tr
id=sl_svn119_83

><td class="source">// #define ESstatus       17<br></td></tr
><tr
id=sl_svn119_84

><td class="source">// #define ESss2          18<br></td></tr
><tr
id=sl_svn119_85

><td class="source">// #define ESss3          19<br></td></tr
><tr
id=sl_svn119_86

><td class="source"><br></td></tr
><tr
id=sl_svn119_87

><td class="source">// #define ATTR_DEFAULT   0x00F0<br></td></tr
><tr
id=sl_svn119_88

><td class="source">// #define ATTR_REVERSE   0x0100<br></td></tr
><tr
id=sl_svn119_89

><td class="source">// #define ATTR_UNDERLINE 0x0200<br></td></tr
><tr
id=sl_svn119_90

><td class="source">// #define ATTR_DIM       0x0400<br></td></tr
><tr
id=sl_svn119_91

><td class="source">// #define ATTR_BRIGHT    0x0800<br></td></tr
><tr
id=sl_svn119_92

><td class="source">// #define ATTR_BLINK     0x1000<br></td></tr
><tr
id=sl_svn119_93

><td class="source"><br></td></tr
><tr
id=sl_svn119_94

><td class="source">// #define MOUSE_DOWN     0<br></td></tr
><tr
id=sl_svn119_95

><td class="source">// #define MOUSE_UP       1<br></td></tr
><tr
id=sl_svn119_96

><td class="source">// #define MOUSE_CLICK    2<br></td></tr
><tr
id=sl_svn119_97

><td class="source"><br></td></tr
><tr
id=sl_svn119_98

><td class="source">function VT100(container) {<br></td></tr
><tr
id=sl_svn119_99

><td class="source">  this.initializeElements(container);<br></td></tr
><tr
id=sl_svn119_100

><td class="source">  this.initializeAnsiColors();<br></td></tr
><tr
id=sl_svn119_101

><td class="source">  this.maxScrollbackLines = 500;<br></td></tr
><tr
id=sl_svn119_102

><td class="source">  this.npar               = 0;<br></td></tr
><tr
id=sl_svn119_103

><td class="source">  this.par                = [ ];<br></td></tr
><tr
id=sl_svn119_104

><td class="source">  this.isQuestionMark     = false;<br></td></tr
><tr
id=sl_svn119_105

><td class="source">  this.savedX             = [ ];<br></td></tr
><tr
id=sl_svn119_106

><td class="source">  this.savedY             = [ ];<br></td></tr
><tr
id=sl_svn119_107

><td class="source">  this.savedAttr          = [ ];<br></td></tr
><tr
id=sl_svn119_108

><td class="source">  this.savedUseGMap       = 0;<br></td></tr
><tr
id=sl_svn119_109

><td class="source">  this.savedGMap          = [ this.Latin1Map, this.VT100GraphicsMap,<br></td></tr
><tr
id=sl_svn119_110

><td class="source">                              this.CodePage437Map, this.DirectToFontMap ];<br></td></tr
><tr
id=sl_svn119_111

><td class="source">  this.savedValid         = [ ];<br></td></tr
><tr
id=sl_svn119_112

><td class="source">  this.respondString      = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_113

><td class="source">  this.statusString       = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_114

><td class="source">  this.internalClipboard  = undefined;<br></td></tr
><tr
id=sl_svn119_115

><td class="source">  this.reset(true);<br></td></tr
><tr
id=sl_svn119_116

><td class="source">}<br></td></tr
><tr
id=sl_svn119_117

><td class="source"><br></td></tr
><tr
id=sl_svn119_118

><td class="source">VT100.prototype.reset = function(clearHistory) {<br></td></tr
><tr
id=sl_svn119_119

><td class="source">  this.isEsc                            = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_120

><td class="source">  this.needWrap                         = false;<br></td></tr
><tr
id=sl_svn119_121

><td class="source">  this.autoWrapMode                     = true;<br></td></tr
><tr
id=sl_svn119_122

><td class="source">  this.dispCtrl                         = false;<br></td></tr
><tr
id=sl_svn119_123

><td class="source">  this.toggleMeta                       = false;<br></td></tr
><tr
id=sl_svn119_124

><td class="source">  this.insertMode                       = false;<br></td></tr
><tr
id=sl_svn119_125

><td class="source">  this.applKeyMode                      = false;<br></td></tr
><tr
id=sl_svn119_126

><td class="source">  this.cursorKeyMode                    = false;<br></td></tr
><tr
id=sl_svn119_127

><td class="source">  this.crLfMode                         = false;<br></td></tr
><tr
id=sl_svn119_128

><td class="source">  this.offsetMode                       = false;<br></td></tr
><tr
id=sl_svn119_129

><td class="source">  this.mouseReporting                   = false;<br></td></tr
><tr
id=sl_svn119_130

><td class="source">  this.utfEnabled                       = true;<br></td></tr
><tr
id=sl_svn119_131

><td class="source">  this.visualBell                       = typeof suppressAllAudio !=<br></td></tr
><tr
id=sl_svn119_132

><td class="source">                                          &#39;undefined&#39; &amp;&amp;<br></td></tr
><tr
id=sl_svn119_133

><td class="source">                                          suppressAllAudio;<br></td></tr
><tr
id=sl_svn119_134

><td class="source">  this.utfCount                         = 0;<br></td></tr
><tr
id=sl_svn119_135

><td class="source">  this.utfChar                          = 0;<br></td></tr
><tr
id=sl_svn119_136

><td class="source">  this.style                            = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_137

><td class="source">  this.attr                             = 0x00F0 /* ATTR_DEFAULT */;<br></td></tr
><tr
id=sl_svn119_138

><td class="source">  this.useGMap                          = 0;<br></td></tr
><tr
id=sl_svn119_139

><td class="source">  this.GMap                             = [ this.Latin1Map,<br></td></tr
><tr
id=sl_svn119_140

><td class="source">                                            this.VT100GraphicsMap,<br></td></tr
><tr
id=sl_svn119_141

><td class="source">                                            this.CodePage437Map,<br></td></tr
><tr
id=sl_svn119_142

><td class="source">                                            this.DirectToFontMap ];<br></td></tr
><tr
id=sl_svn119_143

><td class="source">  this.translate                        = this.GMap[this.useGMap];<br></td></tr
><tr
id=sl_svn119_144

><td class="source">  this.top                              = 0;<br></td></tr
><tr
id=sl_svn119_145

><td class="source">  this.bottom                           = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_146

><td class="source">  this.lastCharacter                    = &#39; &#39;;<br></td></tr
><tr
id=sl_svn119_147

><td class="source">  this.userTabStop                      = [ ];<br></td></tr
><tr
id=sl_svn119_148

><td class="source"><br></td></tr
><tr
id=sl_svn119_149

><td class="source">  if (clearHistory) {<br></td></tr
><tr
id=sl_svn119_150

><td class="source">    for (var i = 0; i &lt; 2; i++) {<br></td></tr
><tr
id=sl_svn119_151

><td class="source">      while (this.console[i].firstChild) {<br></td></tr
><tr
id=sl_svn119_152

><td class="source">        this.console[i].removeChild(this.console[i].firstChild);<br></td></tr
><tr
id=sl_svn119_153

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_154

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_155

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_156

><td class="source"><br></td></tr
><tr
id=sl_svn119_157

><td class="source">  this.enableAlternateScreen(false);<br></td></tr
><tr
id=sl_svn119_158

><td class="source">  this.gotoXY(0, 0);<br></td></tr
><tr
id=sl_svn119_159

><td class="source">  this.showCursor();<br></td></tr
><tr
id=sl_svn119_160

><td class="source">  this.isInverted                       = false;<br></td></tr
><tr
id=sl_svn119_161

><td class="source">  this.refreshInvertedState();<br></td></tr
><tr
id=sl_svn119_162

><td class="source">  this.clearRegion(0, 0, this.terminalWidth, this.terminalHeight, this.style);<br></td></tr
><tr
id=sl_svn119_163

><td class="source">};<br></td></tr
><tr
id=sl_svn119_164

><td class="source"><br></td></tr
><tr
id=sl_svn119_165

><td class="source">VT100.prototype.initializeAnsiColors = function() {<br></td></tr
><tr
id=sl_svn119_166

><td class="source">  var elem           = document.createElement(&#39;pre&#39;);<br></td></tr
><tr
id=sl_svn119_167

><td class="source">  this.container.appendChild(elem);<br></td></tr
><tr
id=sl_svn119_168

><td class="source">  this.setTextContent(elem, &#39; &#39;);<br></td></tr
><tr
id=sl_svn119_169

><td class="source">  this.ansi          = [ ];<br></td></tr
><tr
id=sl_svn119_170

><td class="source">  for (var i = 0; i &lt; 16; i++) {<br></td></tr
><tr
id=sl_svn119_171

><td class="source">    elem.id          = &#39;ansi&#39; + i;<br></td></tr
><tr
id=sl_svn119_172

><td class="source">    this.ansi[i]     = this.getCurrentComputedStyle(elem, &#39;backgroundColor&#39;);<br></td></tr
><tr
id=sl_svn119_173

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_174

><td class="source">  this.container.removeChild(elem);<br></td></tr
><tr
id=sl_svn119_175

><td class="source">};<br></td></tr
><tr
id=sl_svn119_176

><td class="source"><br></td></tr
><tr
id=sl_svn119_177

><td class="source">VT100.prototype.addListener = function(elem, event, listener) {<br></td></tr
><tr
id=sl_svn119_178

><td class="source">  if (elem.addEventListener) {<br></td></tr
><tr
id=sl_svn119_179

><td class="source">    elem.addEventListener(event, listener, false);<br></td></tr
><tr
id=sl_svn119_180

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_181

><td class="source">    elem.attachEvent(&#39;on&#39; + event, listener);<br></td></tr
><tr
id=sl_svn119_182

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_183

><td class="source">};<br></td></tr
><tr
id=sl_svn119_184

><td class="source"><br></td></tr
><tr
id=sl_svn119_185

><td class="source">VT100.prototype.initializeElements = function(container) {<br></td></tr
><tr
id=sl_svn119_186

><td class="source">  // If the necessary objects have not already been defined in the HTML<br></td></tr
><tr
id=sl_svn119_187

><td class="source">  // page, create them now.<br></td></tr
><tr
id=sl_svn119_188

><td class="source">  if (container) {<br></td></tr
><tr
id=sl_svn119_189

><td class="source">    this.container             = container;<br></td></tr
><tr
id=sl_svn119_190

><td class="source">  } else if (!(this.container  = document.getElementById(&#39;vt100&#39;))) {<br></td></tr
><tr
id=sl_svn119_191

><td class="source">    this.container             = document.createElement(&#39;div&#39;);<br></td></tr
><tr
id=sl_svn119_192

><td class="source">    this.container.id          = &#39;vt100&#39;;<br></td></tr
><tr
id=sl_svn119_193

><td class="source">    document.body.appendChild(this.container);<br></td></tr
><tr
id=sl_svn119_194

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_195

><td class="source"><br></td></tr
><tr
id=sl_svn119_196

><td class="source">  if (!this.getChildById(this.container, &#39;reconnect&#39;)   ||<br></td></tr
><tr
id=sl_svn119_197

><td class="source">      !this.getChildById(this.container, &#39;menu&#39;)        ||<br></td></tr
><tr
id=sl_svn119_198

><td class="source">      !this.getChildById(this.container, &#39;scrollable&#39;)  ||<br></td></tr
><tr
id=sl_svn119_199

><td class="source">      !this.getChildById(this.container, &#39;console&#39;)     ||<br></td></tr
><tr
id=sl_svn119_200

><td class="source">      !this.getChildById(this.container, &#39;alt_console&#39;) ||<br></td></tr
><tr
id=sl_svn119_201

><td class="source">      !this.getChildById(this.container, &#39;ieprobe&#39;)     ||<br></td></tr
><tr
id=sl_svn119_202

><td class="source">      !this.getChildById(this.container, &#39;padding&#39;)     ||<br></td></tr
><tr
id=sl_svn119_203

><td class="source">      !this.getChildById(this.container, &#39;cursor&#39;)      ||<br></td></tr
><tr
id=sl_svn119_204

><td class="source">      !this.getChildById(this.container, &#39;lineheight&#39;)  ||<br></td></tr
><tr
id=sl_svn119_205

><td class="source">      !this.getChildById(this.container, &#39;space&#39;)       ||<br></td></tr
><tr
id=sl_svn119_206

><td class="source">      !this.getChildById(this.container, &#39;input&#39;)       ||<br></td></tr
><tr
id=sl_svn119_207

><td class="source">      !this.getChildById(this.container, &#39;cliphelper&#39;)  ||<br></td></tr
><tr
id=sl_svn119_208

><td class="source">      !this.getChildById(this.container, &#39;attrib&#39;)) {<br></td></tr
><tr
id=sl_svn119_209

><td class="source">    // Only enable the &quot;embed&quot; object, if we have a suitable plugin. Otherwise,<br></td></tr
><tr
id=sl_svn119_210

><td class="source">    // we might get a pointless warning that a suitable plugin is not yet<br></td></tr
><tr
id=sl_svn119_211

><td class="source">    // installed. If in doubt, we&#39;d rather just stay silent.<br></td></tr
><tr
id=sl_svn119_212

><td class="source">    var embed                  = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_213

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_214

><td class="source">      if (typeof navigator.mimeTypes[&quot;audio/x-wav&quot;].enabledPlugin.name !=<br></td></tr
><tr
id=sl_svn119_215

><td class="source">          &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_216

><td class="source">        embed                  = typeof suppressAllAudio != &#39;undefined&#39; &amp;&amp;<br></td></tr
><tr
id=sl_svn119_217

><td class="source">                                 suppressAllAudio ? &quot;&quot; :<br></td></tr
><tr
id=sl_svn119_218

><td class="source">        &#39;&lt;embed classid=&quot;clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_219

><td class="source">                       &#39;id=&quot;beep_embed&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_220

><td class="source">                       &#39;src=&quot;beep.wav&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_221

><td class="source">                       &#39;autostart=&quot;false&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_222

><td class="source">                       &#39;volume=&quot;100&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_223

><td class="source">                       &#39;enablejavascript=&quot;true&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_224

><td class="source">                       &#39;type=&quot;audio/x-wav&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_225

><td class="source">                       &#39;height=&quot;16&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_226

><td class="source">                       &#39;width=&quot;200&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_227

><td class="source">                       &#39;style=&quot;position:absolute;left:-1000px;top:-1000px&quot; /&gt;&#39;;<br></td></tr
><tr
id=sl_svn119_228

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_229

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_230

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_231

><td class="source"><br></td></tr
><tr
id=sl_svn119_232

><td class="source">    this.container.innerHTML   =<br></td></tr
><tr
id=sl_svn119_233

><td class="source">                       &#39;&lt;div id=&quot;reconnect&quot; style=&quot;visibility: hidden&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_234

><td class="source">                         &#39;&lt;input type=&quot;button&quot; value=&quot;Connect&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_235

><td class="source">                                &#39;onsubmit=&quot;return false&quot; /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_236

><td class="source">                       &#39;&lt;/div&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_237

><td class="source">                       &#39;&lt;div id=&quot;menu&quot;&gt;&lt;/div&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_238

><td class="source">                       &#39;&lt;div id=&quot;scrollable&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_239

><td class="source">                         &#39;&lt;pre id=&quot;lineheight&quot;&gt;&amp;nbsp;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_240

><td class="source">                         &#39;&lt;pre id=&quot;console&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_241

><td class="source">                           &#39;&lt;pre&gt;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_242

><td class="source">                           &#39;&lt;div id=&quot;ieprobe&quot;&gt;&lt;span&gt;&amp;nbsp;&lt;/span&gt;&lt;/div&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_243

><td class="source">                         &#39;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_244

><td class="source">                         &#39;&lt;pre id=&quot;alt_console&quot; style=&quot;display: none&quot;&gt;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_245

><td class="source">                         &#39;&lt;div id=&quot;padding&quot;&gt;&lt;/div&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_246

><td class="source">                         &#39;&lt;pre id=&quot;cursor&quot;&gt;&amp;nbsp;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_247

><td class="source">                       &#39;&lt;/div&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_248

><td class="source">                       &#39;&lt;div class=&quot;hidden&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_249

><td class="source">                         &#39;&lt;pre&gt;&lt;div&gt;&lt;span id=&quot;space&quot;&gt;&lt;/span&gt;&lt;/div&gt;&lt;/pre&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_250

><td class="source">                         &#39;&lt;input type=&quot;textfield&quot; id=&quot;input&quot; /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_251

><td class="source">                         &#39;&lt;input type=&quot;textfield&quot; id=&quot;cliphelper&quot; /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_252

><td class="source">                         &#39;&lt;span id=&quot;attrib&quot;&gt;&amp;nbsp;&lt;/span&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_253

><td class="source">                         (typeof suppressAllAudio != &#39;undefined&#39; &amp;&amp;<br></td></tr
><tr
id=sl_svn119_254

><td class="source">                          suppressAllAudio ? &quot;&quot; :<br></td></tr
><tr
id=sl_svn119_255

><td class="source">                         embed + &#39;&lt;bgsound id=&quot;beep_bgsound&quot; loop=1 /&gt;&#39;) +<br></td></tr
><tr
id=sl_svn119_256

><td class="source">                        &#39;&lt;/div&gt;&#39;;<br></td></tr
><tr
id=sl_svn119_257

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_258

><td class="source"><br></td></tr
><tr
id=sl_svn119_259

><td class="source">  // Find the object used for playing the &quot;beep&quot; sound, if any.<br></td></tr
><tr
id=sl_svn119_260

><td class="source">  if (typeof suppressAllAudio != &#39;undefined&#39; &amp;&amp; suppressAllAudio) {<br></td></tr
><tr
id=sl_svn119_261

><td class="source">    this.beeper                = undefined;<br></td></tr
><tr
id=sl_svn119_262

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_263

><td class="source">    this.beeper                = this.getChildById(this.container,<br></td></tr
><tr
id=sl_svn119_264

><td class="source">                                                   &#39;beep_embed&#39;);<br></td></tr
><tr
id=sl_svn119_265

><td class="source">    if (!this.beeper || !this.beeper.Play) {<br></td></tr
><tr
id=sl_svn119_266

><td class="source">      this.beeper              = this.getChildById(this.container,<br></td></tr
><tr
id=sl_svn119_267

><td class="source">                                                   &#39;beep_bgsound&#39;);<br></td></tr
><tr
id=sl_svn119_268

><td class="source">      if (!this.beeper || typeof this.beeper.src == &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_269

><td class="source">        this.beeper            = undefined;<br></td></tr
><tr
id=sl_svn119_270

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_271

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_272

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_273

><td class="source"><br></td></tr
><tr
id=sl_svn119_274

><td class="source">  // Initialize the variables for finding the text console and the<br></td></tr
><tr
id=sl_svn119_275

><td class="source">  // cursor.<br></td></tr
><tr
id=sl_svn119_276

><td class="source">  this.reconnectBtn            = this.getChildById(this.container,&#39;reconnect&#39;);<br></td></tr
><tr
id=sl_svn119_277

><td class="source">  this.menu                    = this.getChildById(this.container, &#39;menu&#39;);<br></td></tr
><tr
id=sl_svn119_278

><td class="source">  this.scrollable              = this.getChildById(this.container,<br></td></tr
><tr
id=sl_svn119_279

><td class="source">                                                                 &#39;scrollable&#39;);<br></td></tr
><tr
id=sl_svn119_280

><td class="source">  this.lineheight              = this.getChildById(this.container,<br></td></tr
><tr
id=sl_svn119_281

><td class="source">                                                                 &#39;lineheight&#39;);<br></td></tr
><tr
id=sl_svn119_282

><td class="source">  this.console                 =<br></td></tr
><tr
id=sl_svn119_283

><td class="source">                          [ this.getChildById(this.container, &#39;console&#39;),<br></td></tr
><tr
id=sl_svn119_284

><td class="source">                            this.getChildById(this.container, &#39;alt_console&#39;) ];<br></td></tr
><tr
id=sl_svn119_285

><td class="source">  var ieProbe                  = this.getChildById(this.container, &#39;ieprobe&#39;);<br></td></tr
><tr
id=sl_svn119_286

><td class="source">  this.padding                 = this.getChildById(this.container, &#39;padding&#39;);<br></td></tr
><tr
id=sl_svn119_287

><td class="source">  this.cursor                  = this.getChildById(this.container, &#39;cursor&#39;);<br></td></tr
><tr
id=sl_svn119_288

><td class="source">  this.space                   = this.getChildById(this.container, &#39;space&#39;);<br></td></tr
><tr
id=sl_svn119_289

><td class="source">  this.input                   = this.getChildById(this.container, &#39;input&#39;);<br></td></tr
><tr
id=sl_svn119_290

><td class="source">  this.cliphelper              = this.getChildById(this.container,<br></td></tr
><tr
id=sl_svn119_291

><td class="source">                                                                 &#39;cliphelper&#39;);<br></td></tr
><tr
id=sl_svn119_292

><td class="source">  this.attributeHelper         = this.getChildById(this.container, &#39;attrib&#39;);<br></td></tr
><tr
id=sl_svn119_293

><td class="source"><br></td></tr
><tr
id=sl_svn119_294

><td class="source">  // Remember the dimensions of a standard character glyph. We would<br></td></tr
><tr
id=sl_svn119_295

><td class="source">  // expect that we could just check cursor.clientWidth/Height at any time,<br></td></tr
><tr
id=sl_svn119_296

><td class="source">  // but it turns out that browsers sometimes invalidate these values<br></td></tr
><tr
id=sl_svn119_297

><td class="source">  // (e.g. while displaying a print preview screen).<br></td></tr
><tr
id=sl_svn119_298

><td class="source">  this.cursorWidth             = this.cursor.clientWidth;<br></td></tr
><tr
id=sl_svn119_299

><td class="source">  this.cursorHeight            = this.lineheight.clientHeight;<br></td></tr
><tr
id=sl_svn119_300

><td class="source"><br></td></tr
><tr
id=sl_svn119_301

><td class="source">  // IE has a slightly different boxing model, that we need to compensate for<br></td></tr
><tr
id=sl_svn119_302

><td class="source">  this.isIE                    = ieProbe.offsetTop &gt; 1;<br></td></tr
><tr
id=sl_svn119_303

><td class="source">  ieProbe                      = undefined;<br></td></tr
><tr
id=sl_svn119_304

><td class="source">  this.console.innerHTML       = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_305

><td class="source"><br></td></tr
><tr
id=sl_svn119_306

><td class="source">  // Determine if the terminal window is positioned at the beginning of the<br></td></tr
><tr
id=sl_svn119_307

><td class="source">  // page, or if it is embedded somewhere else in the page. For full-screen<br></td></tr
><tr
id=sl_svn119_308

><td class="source">  // terminals, automatically resize whenever the browser window changes.<br></td></tr
><tr
id=sl_svn119_309

><td class="source">  var marginTop                = parseInt(this.getCurrentComputedStyle(<br></td></tr
><tr
id=sl_svn119_310

><td class="source">                                          document.body, &#39;marginTop&#39;));<br></td></tr
><tr
id=sl_svn119_311

><td class="source">  var marginLeft               = parseInt(this.getCurrentComputedStyle(<br></td></tr
><tr
id=sl_svn119_312

><td class="source">                                          document.body, &#39;marginLeft&#39;));<br></td></tr
><tr
id=sl_svn119_313

><td class="source">  var marginRight              = parseInt(this.getCurrentComputedStyle(<br></td></tr
><tr
id=sl_svn119_314

><td class="source">                                          document.body, &#39;marginRight&#39;));<br></td></tr
><tr
id=sl_svn119_315

><td class="source">  var x                        = this.container.offsetLeft;<br></td></tr
><tr
id=sl_svn119_316

><td class="source">  var y                        = this.container.offsetTop;<br></td></tr
><tr
id=sl_svn119_317

><td class="source">  for (var parent = this.container; parent = parent.offsetParent; ) {<br></td></tr
><tr
id=sl_svn119_318

><td class="source">    x                         += parent.offsetLeft;<br></td></tr
><tr
id=sl_svn119_319

><td class="source">    y                         += parent.offsetTop;<br></td></tr
><tr
id=sl_svn119_320

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_321

><td class="source">  this.isEmbedded              = marginTop != y ||<br></td></tr
><tr
id=sl_svn119_322

><td class="source">                                 marginLeft != x ||<br></td></tr
><tr
id=sl_svn119_323

><td class="source">                                 (window.innerWidth ||<br></td></tr
><tr
id=sl_svn119_324

><td class="source">                                  document.documentElement.clientWidth ||<br></td></tr
><tr
id=sl_svn119_325

><td class="source">                                  document.body.clientWidth) -<br></td></tr
><tr
id=sl_svn119_326

><td class="source">                                 marginRight != x + this.container.offsetWidth;<br></td></tr
><tr
id=sl_svn119_327

><td class="source">  if (!this.isEmbedded) {<br></td></tr
><tr
id=sl_svn119_328

><td class="source">    this.addListener(window, &#39;resize&#39;, <br></td></tr
><tr
id=sl_svn119_329

><td class="source">                     function(vt100) {<br></td></tr
><tr
id=sl_svn119_330

><td class="source">                       return function() {<br></td></tr
><tr
id=sl_svn119_331

><td class="source">                         vt100.hideContextMenu();<br></td></tr
><tr
id=sl_svn119_332

><td class="source">                         vt100.resizer();<br></td></tr
><tr
id=sl_svn119_333

><td class="source">                        }<br></td></tr
><tr
id=sl_svn119_334

><td class="source">                      }(this));<br></td></tr
><tr
id=sl_svn119_335

><td class="source">    <br></td></tr
><tr
id=sl_svn119_336

><td class="source">    // Hide extra scrollbars attached to window<br></td></tr
><tr
id=sl_svn119_337

><td class="source">    document.body.style.margin = &#39;0px&#39;;<br></td></tr
><tr
id=sl_svn119_338

><td class="source">    try { document.body.style.overflow =&#39;hidden&#39;; } catch (e) { }<br></td></tr
><tr
id=sl_svn119_339

><td class="source">    try { document.body.oncontextmenu = function() {return false;};} catch(e){}<br></td></tr
><tr
id=sl_svn119_340

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_341

><td class="source"><br></td></tr
><tr
id=sl_svn119_342

><td class="source">  // Hide context menu<br></td></tr
><tr
id=sl_svn119_343

><td class="source">  this.hideContextMenu();<br></td></tr
><tr
id=sl_svn119_344

><td class="source"><br></td></tr
><tr
id=sl_svn119_345

><td class="source">  // Add listener to reconnect button<br></td></tr
><tr
id=sl_svn119_346

><td class="source">  this.addListener(this.reconnectBtn.firstChild, &#39;click&#39;,<br></td></tr
><tr
id=sl_svn119_347

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_348

><td class="source">                     return function() {<br></td></tr
><tr
id=sl_svn119_349

><td class="source">                       var rc = vt100.reconnect();<br></td></tr
><tr
id=sl_svn119_350

><td class="source">                       vt100.input.focus();<br></td></tr
><tr
id=sl_svn119_351

><td class="source">                       return rc;<br></td></tr
><tr
id=sl_svn119_352

><td class="source">                     }<br></td></tr
><tr
id=sl_svn119_353

><td class="source">                   }(this));<br></td></tr
><tr
id=sl_svn119_354

><td class="source"><br></td></tr
><tr
id=sl_svn119_355

><td class="source">  // Add input listeners<br></td></tr
><tr
id=sl_svn119_356

><td class="source">  this.addListener(this.input, &#39;blur&#39;,<br></td></tr
><tr
id=sl_svn119_357

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_358

><td class="source">                     return function() { vt100.blurCursor(); } }(this));<br></td></tr
><tr
id=sl_svn119_359

><td class="source">  this.addListener(this.input, &#39;focus&#39;,<br></td></tr
><tr
id=sl_svn119_360

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_361

><td class="source">                     return function() { vt100.focusCursor(); } }(this));<br></td></tr
><tr
id=sl_svn119_362

><td class="source">  this.addListener(this.input, &#39;keydown&#39;,<br></td></tr
><tr
id=sl_svn119_363

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_364

><td class="source">                     return function(e) {<br></td></tr
><tr
id=sl_svn119_365

><td class="source">                       if (!e) e = window.event;<br></td></tr
><tr
id=sl_svn119_366

><td class="source">                       return vt100.keyDown(e); } }(this));<br></td></tr
><tr
id=sl_svn119_367

><td class="source">  this.addListener(this.input, &#39;keypress&#39;,<br></td></tr
><tr
id=sl_svn119_368

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_369

><td class="source">                     return function(e) {<br></td></tr
><tr
id=sl_svn119_370

><td class="source">                       if (!e) e = window.event;<br></td></tr
><tr
id=sl_svn119_371

><td class="source">                       return vt100.keyPressed(e); } }(this));<br></td></tr
><tr
id=sl_svn119_372

><td class="source">  this.addListener(this.input, &#39;keyup&#39;,<br></td></tr
><tr
id=sl_svn119_373

><td class="source">                   function(vt100) {<br></td></tr
><tr
id=sl_svn119_374

><td class="source">                     return function(e) {<br></td></tr
><tr
id=sl_svn119_375

><td class="source">                       if (!e) e = window.event;<br></td></tr
><tr
id=sl_svn119_376

><td class="source">                       return vt100.keyUp(e); } }(this));<br></td></tr
><tr
id=sl_svn119_377

><td class="source"><br></td></tr
><tr
id=sl_svn119_378

><td class="source">  // Attach listeners that move the focus to the &lt;input&gt; field. This way we<br></td></tr
><tr
id=sl_svn119_379

><td class="source">  // can make sure that we can receive keyboard input.<br></td></tr
><tr
id=sl_svn119_380

><td class="source">  var mouseEvent               = function(vt100, type) {<br></td></tr
><tr
id=sl_svn119_381

><td class="source">    return function(e) {<br></td></tr
><tr
id=sl_svn119_382

><td class="source">      if (!e) e = window.event;<br></td></tr
><tr
id=sl_svn119_383

><td class="source">      return vt100.mouseEvent(e, type);<br></td></tr
><tr
id=sl_svn119_384

><td class="source">    };<br></td></tr
><tr
id=sl_svn119_385

><td class="source">  };<br></td></tr
><tr
id=sl_svn119_386

><td class="source">  this.addListener(this.scrollable,&#39;mousedown&#39;,mouseEvent(this, 0 /* MOUSE_DOWN */));<br></td></tr
><tr
id=sl_svn119_387

><td class="source">  this.addListener(this.scrollable,&#39;mouseup&#39;,  mouseEvent(this, 1 /* MOUSE_UP */));<br></td></tr
><tr
id=sl_svn119_388

><td class="source">  this.addListener(this.scrollable,&#39;click&#39;,    mouseEvent(this, 2 /* MOUSE_CLICK */));<br></td></tr
><tr
id=sl_svn119_389

><td class="source"><br></td></tr
><tr
id=sl_svn119_390

><td class="source">  // Initialize the blank terminal window.<br></td></tr
><tr
id=sl_svn119_391

><td class="source">  this.currentScreen           = 0;<br></td></tr
><tr
id=sl_svn119_392

><td class="source">  this.cursorX                 = 0;<br></td></tr
><tr
id=sl_svn119_393

><td class="source">  this.cursorY                 = 0;<br></td></tr
><tr
id=sl_svn119_394

><td class="source">  this.numScrollbackLines      = 0;<br></td></tr
><tr
id=sl_svn119_395

><td class="source">  this.top                     = 0;<br></td></tr
><tr
id=sl_svn119_396

><td class="source">  this.bottom                  = 0x7FFFFFFF;<br></td></tr
><tr
id=sl_svn119_397

><td class="source">  this.resizer();<br></td></tr
><tr
id=sl_svn119_398

><td class="source">  this.focusCursor();<br></td></tr
><tr
id=sl_svn119_399

><td class="source">  this.input.focus();<br></td></tr
><tr
id=sl_svn119_400

><td class="source">};<br></td></tr
><tr
id=sl_svn119_401

><td class="source"><br></td></tr
><tr
id=sl_svn119_402

><td class="source">VT100.prototype.getChildById = function(parent, id) {<br></td></tr
><tr
id=sl_svn119_403

><td class="source">  var nodeList = parent.all || parent.getElementsByTagName(&#39;*&#39;);<br></td></tr
><tr
id=sl_svn119_404

><td class="source">  if (typeof nodeList.namedItem == &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_405

><td class="source">    for (var i = 0; i &lt; nodeList.length; i++) {<br></td></tr
><tr
id=sl_svn119_406

><td class="source">      if (nodeList[i].id == id) {<br></td></tr
><tr
id=sl_svn119_407

><td class="source">        return nodeList[i];<br></td></tr
><tr
id=sl_svn119_408

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_409

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_410

><td class="source">    return null;<br></td></tr
><tr
id=sl_svn119_411

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_412

><td class="source">    var elem = (parent.all || parent.getElementsByTagName(&#39;*&#39;)).namedItem(id);<br></td></tr
><tr
id=sl_svn119_413

><td class="source">    return elem ? elem[0] || elem : null;<br></td></tr
><tr
id=sl_svn119_414

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_415

><td class="source">};<br></td></tr
><tr
id=sl_svn119_416

><td class="source"><br></td></tr
><tr
id=sl_svn119_417

><td class="source">VT100.prototype.getCurrentComputedStyle = function(elem, style) {<br></td></tr
><tr
id=sl_svn119_418

><td class="source">  if (typeof elem.currentStyle != &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_419

><td class="source">    return elem.currentStyle[style];<br></td></tr
><tr
id=sl_svn119_420

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_421

><td class="source">    return document.defaultView.getComputedStyle(elem, null)[style];<br></td></tr
><tr
id=sl_svn119_422

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_423

><td class="source">};<br></td></tr
><tr
id=sl_svn119_424

><td class="source"><br></td></tr
><tr
id=sl_svn119_425

><td class="source">VT100.prototype.reconnect = function() {<br></td></tr
><tr
id=sl_svn119_426

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_427

><td class="source">};<br></td></tr
><tr
id=sl_svn119_428

><td class="source"><br></td></tr
><tr
id=sl_svn119_429

><td class="source">VT100.prototype.showReconnect = function(state) {<br></td></tr
><tr
id=sl_svn119_430

><td class="source">  if (state) {<br></td></tr
><tr
id=sl_svn119_431

><td class="source">    this.reconnectBtn.style.visibility = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_432

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_433

><td class="source">    this.reconnectBtn.style.visibility = &#39;hidden&#39;;<br></td></tr
><tr
id=sl_svn119_434

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_435

><td class="source">};<br></td></tr
><tr
id=sl_svn119_436

><td class="source"><br></td></tr
><tr
id=sl_svn119_437

><td class="source">VT100.prototype.repairElements = function(console) {<br></td></tr
><tr
id=sl_svn119_438

><td class="source">  for (var line = console.firstChild; line; line = line.nextSibling) {<br></td></tr
><tr
id=sl_svn119_439

><td class="source">    if (!line.clientHeight) {<br></td></tr
><tr
id=sl_svn119_440

><td class="source">      var newLine = document.createElement(line.tagName);<br></td></tr
><tr
id=sl_svn119_441

><td class="source">      newLine.style.cssText     = line.style.cssText;<br></td></tr
><tr
id=sl_svn119_442

><td class="source">      newLine.className         = line.className;<br></td></tr
><tr
id=sl_svn119_443

><td class="source">      if (line.tagName == &#39;DIV&#39;) {<br></td></tr
><tr
id=sl_svn119_444

><td class="source">        for (var span = line.firstChild; span; span = span.nextSibling) {<br></td></tr
><tr
id=sl_svn119_445

><td class="source">          var newSpan           = document.createElement(span.tagName);<br></td></tr
><tr
id=sl_svn119_446

><td class="source">          newSpan.style.cssText = span.style.cssText;<br></td></tr
><tr
id=sl_svn119_447

><td class="source">          this.setTextContent(newSpan, this.getTextContent(span));<br></td></tr
><tr
id=sl_svn119_448

><td class="source">          newLine.appendChild(newSpan);<br></td></tr
><tr
id=sl_svn119_449

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_450

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_451

><td class="source">        this.setTextContent(newLine, this.getTextContent(line));<br></td></tr
><tr
id=sl_svn119_452

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_453

><td class="source">      line.parentNode.replaceChild(newLine, line);<br></td></tr
><tr
id=sl_svn119_454

><td class="source">      line                      = newLine;<br></td></tr
><tr
id=sl_svn119_455

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_456

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_457

><td class="source">};<br></td></tr
><tr
id=sl_svn119_458

><td class="source"><br></td></tr
><tr
id=sl_svn119_459

><td class="source">VT100.prototype.resized = function(w, h) {<br></td></tr
><tr
id=sl_svn119_460

><td class="source">};<br></td></tr
><tr
id=sl_svn119_461

><td class="source"><br></td></tr
><tr
id=sl_svn119_462

><td class="source">VT100.prototype.resizer = function() {<br></td></tr
><tr
id=sl_svn119_463

><td class="source">  // The cursor can get corrupted if the print-preview is displayed in Firefox.<br></td></tr
><tr
id=sl_svn119_464

><td class="source">  // Recreating it, will repair it.<br></td></tr
><tr
id=sl_svn119_465

><td class="source">  var newCursor                = document.createElement(&#39;pre&#39;);<br></td></tr
><tr
id=sl_svn119_466

><td class="source">  this.setTextContent(newCursor, &#39; &#39;);<br></td></tr
><tr
id=sl_svn119_467

><td class="source">  newCursor.id                 = &#39;cursor&#39;;<br></td></tr
><tr
id=sl_svn119_468

><td class="source">  newCursor.style.cssText      = this.cursor.style.cssText;<br></td></tr
><tr
id=sl_svn119_469

><td class="source">  this.cursor.parentNode.insertBefore(newCursor, this.cursor);<br></td></tr
><tr
id=sl_svn119_470

><td class="source">  if (!newCursor.clientHeight) {<br></td></tr
><tr
id=sl_svn119_471

><td class="source">    // Things are broken right now. This is probably because we are<br></td></tr
><tr
id=sl_svn119_472

><td class="source">    // displaying the print-preview. Just don&#39;t change any of our settings<br></td></tr
><tr
id=sl_svn119_473

><td class="source">    // until the print dialog is closed again.<br></td></tr
><tr
id=sl_svn119_474

><td class="source">    newCursor.parentNode.removeChild(newCursor);<br></td></tr
><tr
id=sl_svn119_475

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_476

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_477

><td class="source">    // Swap the old broken cursor for the newly created one.<br></td></tr
><tr
id=sl_svn119_478

><td class="source">    this.cursor.parentNode.removeChild(this.cursor);<br></td></tr
><tr
id=sl_svn119_479

><td class="source">    this.cursor                = newCursor;<br></td></tr
><tr
id=sl_svn119_480

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_481

><td class="source"><br></td></tr
><tr
id=sl_svn119_482

><td class="source">  // Really horrible things happen if the contents of the terminal changes<br></td></tr
><tr
id=sl_svn119_483

><td class="source">  // while the print-preview is showing. We get HTML elements that show up<br></td></tr
><tr
id=sl_svn119_484

><td class="source">  // in the DOM, but that do not take up any space. Find these elements and<br></td></tr
><tr
id=sl_svn119_485

><td class="source">  // try to fix them.<br></td></tr
><tr
id=sl_svn119_486

><td class="source">  this.repairElements(this.console[0]);<br></td></tr
><tr
id=sl_svn119_487

><td class="source">  this.repairElements(this.console[1]);<br></td></tr
><tr
id=sl_svn119_488

><td class="source"><br></td></tr
><tr
id=sl_svn119_489

><td class="source">  // Lock the cursor size to the size of a normal character. This helps with<br></td></tr
><tr
id=sl_svn119_490

><td class="source">  // characters that are taller/shorter than normal. Unfortunately, we will<br></td></tr
><tr
id=sl_svn119_491

><td class="source">  // still get confused if somebody enters a character that is wider/narrower<br></td></tr
><tr
id=sl_svn119_492

><td class="source">  // than normal. This can happen if the browser tries to substitute a<br></td></tr
><tr
id=sl_svn119_493

><td class="source">  // characters from a different font.<br></td></tr
><tr
id=sl_svn119_494

><td class="source">  this.cursor.style.width      = this.cursorWidth  + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_495

><td class="source">  this.cursor.style.height     = this.cursorHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_496

><td class="source"><br></td></tr
><tr
id=sl_svn119_497

><td class="source">  // Adjust height for one pixel padding of the #vt100 element.<br></td></tr
><tr
id=sl_svn119_498

><td class="source">  // The latter is necessary to properly display the inactive cursor.<br></td></tr
><tr
id=sl_svn119_499

><td class="source">  var console                  = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_500

><td class="source">  var height                   = (this.isEmbedded ? this.container.clientHeight<br></td></tr
><tr
id=sl_svn119_501

><td class="source">                                  : (window.innerHeight ||<br></td></tr
><tr
id=sl_svn119_502

><td class="source">                                     document.documentElement.clientHeight ||<br></td></tr
><tr
id=sl_svn119_503

><td class="source">                                     document.body.clientHeight))-1;<br></td></tr
><tr
id=sl_svn119_504

><td class="source">  var partial                  = height % this.cursorHeight;<br></td></tr
><tr
id=sl_svn119_505

><td class="source">  this.scrollable.style.height = (height &gt; 0 ? height : 0) + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_506

><td class="source">  this.padding.style.height    = (partial &gt; 0 ? partial : 0) + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_507

><td class="source">  var oldTerminalHeight        = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_508

><td class="source">  this.updateWidth();<br></td></tr
><tr
id=sl_svn119_509

><td class="source">  this.updateHeight();<br></td></tr
><tr
id=sl_svn119_510

><td class="source"><br></td></tr
><tr
id=sl_svn119_511

><td class="source">  // Clip the cursor to the visible screen.<br></td></tr
><tr
id=sl_svn119_512

><td class="source">  var cx                       = this.cursorX;<br></td></tr
><tr
id=sl_svn119_513

><td class="source">  var cy                       = this.cursorY + this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_514

><td class="source"><br></td></tr
><tr
id=sl_svn119_515

><td class="source">  // The alternate screen never keeps a scroll back buffer.<br></td></tr
><tr
id=sl_svn119_516

><td class="source">  this.updateNumScrollbackLines();<br></td></tr
><tr
id=sl_svn119_517

><td class="source">  while (this.currentScreen &amp;&amp; this.numScrollbackLines &gt; 0) {<br></td></tr
><tr
id=sl_svn119_518

><td class="source">    console.removeChild(console.firstChild);<br></td></tr
><tr
id=sl_svn119_519

><td class="source">    this.numScrollbackLines--;<br></td></tr
><tr
id=sl_svn119_520

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_521

><td class="source">  cy                          -= this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_522

><td class="source">  if (cx &lt; 0) {<br></td></tr
><tr
id=sl_svn119_523

><td class="source">    cx                         = 0;<br></td></tr
><tr
id=sl_svn119_524

><td class="source">  } else if (cx &gt; this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_525

><td class="source">    cx                         = this.terminalWidth - 1;<br></td></tr
><tr
id=sl_svn119_526

><td class="source">    if (cx &lt; 0) {<br></td></tr
><tr
id=sl_svn119_527

><td class="source">      cx                       = 0;<br></td></tr
><tr
id=sl_svn119_528

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_529

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_530

><td class="source">  if (cy &lt; 0) {<br></td></tr
><tr
id=sl_svn119_531

><td class="source">    cy                         = 0;<br></td></tr
><tr
id=sl_svn119_532

><td class="source">  } else if (cy &gt; this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_533

><td class="source">    cy                         = this.terminalHeight - 1;<br></td></tr
><tr
id=sl_svn119_534

><td class="source">    if (cy &lt; 0) {<br></td></tr
><tr
id=sl_svn119_535

><td class="source">      cy                       = 0;<br></td></tr
><tr
id=sl_svn119_536

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_537

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_538

><td class="source">  // Clip the scroll region to the visible screen.<br></td></tr
><tr
id=sl_svn119_539

><td class="source">  if (this.bottom &gt; this.terminalHeight ||<br></td></tr
><tr
id=sl_svn119_540

><td class="source">      this.bottom == oldTerminalHeight) {<br></td></tr
><tr
id=sl_svn119_541

><td class="source">    this.bottom                = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_542

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_543

><td class="source">  if (this.top &gt;= this.bottom) {<br></td></tr
><tr
id=sl_svn119_544

><td class="source">    this.top                   = this.bottom-1;<br></td></tr
><tr
id=sl_svn119_545

><td class="source">    if (this.top &lt; 0) {<br></td></tr
><tr
id=sl_svn119_546

><td class="source">      this.top                 = 0;<br></td></tr
><tr
id=sl_svn119_547

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_548

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_549

><td class="source">  // Truncate lines, if necessary. Explicitly reposition cursor (this is<br></td></tr
><tr
id=sl_svn119_550

><td class="source">  // particularly important after changing the screen number), and reset<br></td></tr
><tr
id=sl_svn119_551

><td class="source">  // the scroll region to the default.<br></td></tr
><tr
id=sl_svn119_552

><td class="source">  this.truncateLines(this.terminalWidth);<br></td></tr
><tr
id=sl_svn119_553

><td class="source">  this.putString(cx, cy, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_554

><td class="source">  this.scrollable.scrollTop    = this.numScrollbackLines *<br></td></tr
><tr
id=sl_svn119_555

><td class="source">                                 this.cursorHeight + 1;<br></td></tr
><tr
id=sl_svn119_556

><td class="source"><br></td></tr
><tr
id=sl_svn119_557

><td class="source">  // Update classNames for lines in the scrollback buffer<br></td></tr
><tr
id=sl_svn119_558

><td class="source">  var line                     = console.firstChild;<br></td></tr
><tr
id=sl_svn119_559

><td class="source">  for (var i = 0; i &lt; this.numScrollbackLines; i++) {<br></td></tr
><tr
id=sl_svn119_560

><td class="source">    line.className             = &#39;scrollback&#39;;<br></td></tr
><tr
id=sl_svn119_561

><td class="source">    line                       = line.nextSibling;<br></td></tr
><tr
id=sl_svn119_562

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_563

><td class="source">  while (line) {<br></td></tr
><tr
id=sl_svn119_564

><td class="source">    line.className             = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_565

><td class="source">    line                       = line.nextSibling;<br></td></tr
><tr
id=sl_svn119_566

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_567

><td class="source"><br></td></tr
><tr
id=sl_svn119_568

><td class="source">  // Reposition the reconnect button<br></td></tr
><tr
id=sl_svn119_569

><td class="source">  this.reconnectBtn.style.left = (this.terminalWidth*this.cursorWidth -<br></td></tr
><tr
id=sl_svn119_570

><td class="source">                                  this.reconnectBtn.clientWidth)/2 + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_571

><td class="source">  this.reconnectBtn.style.top  = (this.terminalHeight*this.cursorHeight-<br></td></tr
><tr
id=sl_svn119_572

><td class="source">                                  this.reconnectBtn.clientHeight)/2 + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_573

><td class="source"><br></td></tr
><tr
id=sl_svn119_574

><td class="source">  // Send notification that the window size has been changed<br></td></tr
><tr
id=sl_svn119_575

><td class="source">  this.resized(this.terminalWidth, this.terminalHeight);<br></td></tr
><tr
id=sl_svn119_576

><td class="source">};<br></td></tr
><tr
id=sl_svn119_577

><td class="source"><br></td></tr
><tr
id=sl_svn119_578

><td class="source">VT100.prototype.selection = function() {<br></td></tr
><tr
id=sl_svn119_579

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_580

><td class="source">    return &#39;&#39; + (window.getSelection &amp;&amp; window.getSelection() ||<br></td></tr
><tr
id=sl_svn119_581

><td class="source">                 document.selection &amp;&amp; document.selection.type == &#39;Text&#39; &amp;&amp;<br></td></tr
><tr
id=sl_svn119_582

><td class="source">                 document.selection.createRange().text || &#39;&#39;);<br></td></tr
><tr
id=sl_svn119_583

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_584

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_585

><td class="source">  return &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_586

><td class="source">};<br></td></tr
><tr
id=sl_svn119_587

><td class="source"><br></td></tr
><tr
id=sl_svn119_588

><td class="source">VT100.prototype.cancelEvent = function(event) {<br></td></tr
><tr
id=sl_svn119_589

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_590

><td class="source">    // For non-IE browsers<br></td></tr
><tr
id=sl_svn119_591

><td class="source">    event.stopPropagation();<br></td></tr
><tr
id=sl_svn119_592

><td class="source">    event.preventDefault();<br></td></tr
><tr
id=sl_svn119_593

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_594

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_595

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_596

><td class="source">    // For IE<br></td></tr
><tr
id=sl_svn119_597

><td class="source">    event.cancelBubble = true;<br></td></tr
><tr
id=sl_svn119_598

><td class="source">    event.returnValue  = false;<br></td></tr
><tr
id=sl_svn119_599

><td class="source">    event.button       = 0;<br></td></tr
><tr
id=sl_svn119_600

><td class="source">    event.keyCode      = 0;<br></td></tr
><tr
id=sl_svn119_601

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_602

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_603

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_604

><td class="source">};<br></td></tr
><tr
id=sl_svn119_605

><td class="source"><br></td></tr
><tr
id=sl_svn119_606

><td class="source">VT100.prototype.mouseEvent = function(event, type) {<br></td></tr
><tr
id=sl_svn119_607

><td class="source">  // If any text is currently selected, do not move the focus as that would<br></td></tr
><tr
id=sl_svn119_608

><td class="source">  // invalidate the selection.<br></td></tr
><tr
id=sl_svn119_609

><td class="source">  var selection    = this.selection();<br></td></tr
><tr
id=sl_svn119_610

><td class="source">  if ((type == 1 /* MOUSE_UP */ || type == 2 /* MOUSE_CLICK */) &amp;&amp; !selection.length) {<br></td></tr
><tr
id=sl_svn119_611

><td class="source">    this.input.focus();<br></td></tr
><tr
id=sl_svn119_612

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_613

><td class="source"><br></td></tr
><tr
id=sl_svn119_614

><td class="source">  // Compute mouse position in characters.<br></td></tr
><tr
id=sl_svn119_615

><td class="source">  var offsetX      = this.container.offsetLeft;<br></td></tr
><tr
id=sl_svn119_616

><td class="source">  var offsetY      = this.container.offsetTop;<br></td></tr
><tr
id=sl_svn119_617

><td class="source">  for (var e = this.container; e = e.offsetParent; ) {<br></td></tr
><tr
id=sl_svn119_618

><td class="source">    offsetX       += e.offsetLeft;<br></td></tr
><tr
id=sl_svn119_619

><td class="source">    offsetY       += e.offsetTop;<br></td></tr
><tr
id=sl_svn119_620

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_621

><td class="source">  var x            = (event.clientX - offsetX) / this.cursorWidth;<br></td></tr
><tr
id=sl_svn119_622

><td class="source">  var y            = ((event.clientY - offsetY) + this.scrollable.offsetTop) /<br></td></tr
><tr
id=sl_svn119_623

><td class="source">                     this.cursorHeight - this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_624

><td class="source">  var inside       = true;<br></td></tr
><tr
id=sl_svn119_625

><td class="source">  if (x &gt;= this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_626

><td class="source">    x              = this.terminalWidth - 1;<br></td></tr
><tr
id=sl_svn119_627

><td class="source">    inside         = false;<br></td></tr
><tr
id=sl_svn119_628

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_629

><td class="source">  if (x &lt; 0) {<br></td></tr
><tr
id=sl_svn119_630

><td class="source">    x              = 0;<br></td></tr
><tr
id=sl_svn119_631

><td class="source">    inside         = false;<br></td></tr
><tr
id=sl_svn119_632

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_633

><td class="source">  if (y &gt;= this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_634

><td class="source">    y              = this.terminalHeight - 1;<br></td></tr
><tr
id=sl_svn119_635

><td class="source">    inside         = false;<br></td></tr
><tr
id=sl_svn119_636

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_637

><td class="source">  if (y &lt; 0) {<br></td></tr
><tr
id=sl_svn119_638

><td class="source">    y              = 0;<br></td></tr
><tr
id=sl_svn119_639

><td class="source">    inside         = false;<br></td></tr
><tr
id=sl_svn119_640

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_641

><td class="source"><br></td></tr
><tr
id=sl_svn119_642

><td class="source">  // Compute button number and modifier keys.<br></td></tr
><tr
id=sl_svn119_643

><td class="source">  var button       = type != 0 /* MOUSE_DOWN */ ? 3 :<br></td></tr
><tr
id=sl_svn119_644

><td class="source">                     typeof event.pageX != &#39;undefined&#39; ? event.button :<br></td></tr
><tr
id=sl_svn119_645

><td class="source">                     [ undefined, 0, 2, 0, 1, 0, 1, 0  ][event.button];<br></td></tr
><tr
id=sl_svn119_646

><td class="source">  if (button != undefined) {<br></td></tr
><tr
id=sl_svn119_647

><td class="source">    if (event.shiftKey) {<br></td></tr
><tr
id=sl_svn119_648

><td class="source">      button      |= 0x04;<br></td></tr
><tr
id=sl_svn119_649

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_650

><td class="source">    if (event.altKey || event.metaKey) {<br></td></tr
><tr
id=sl_svn119_651

><td class="source">      button      |= 0x08;<br></td></tr
><tr
id=sl_svn119_652

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_653

><td class="source">    if (event.ctrlKey) {<br></td></tr
><tr
id=sl_svn119_654

><td class="source">      button      |= 0x10;<br></td></tr
><tr
id=sl_svn119_655

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_656

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_657

><td class="source"><br></td></tr
><tr
id=sl_svn119_658

><td class="source">  // Report mouse events if they happen inside of the current screen and<br></td></tr
><tr
id=sl_svn119_659

><td class="source">  // with the SHIFT key unpressed. Both of these restrictions do not apply<br></td></tr
><tr
id=sl_svn119_660

><td class="source">  // for button releases, as we always want to report those.<br></td></tr
><tr
id=sl_svn119_661

><td class="source">  if (this.mouseReporting &amp;&amp; !selection.length &amp;&amp;<br></td></tr
><tr
id=sl_svn119_662

><td class="source">      (type != 0 /* MOUSE_DOWN */ || !event.shiftKey)) {<br></td></tr
><tr
id=sl_svn119_663

><td class="source">    if (inside || type != 0 /* MOUSE_DOWN */) {<br></td></tr
><tr
id=sl_svn119_664

><td class="source">      if (button != undefined) {<br></td></tr
><tr
id=sl_svn119_665

><td class="source">        var report = &#39;\u001B[M&#39; + String.fromCharCode(button + 32) +<br></td></tr
><tr
id=sl_svn119_666

><td class="source">                                  String.fromCharCode(x      + 33) +<br></td></tr
><tr
id=sl_svn119_667

><td class="source">                                  String.fromCharCode(y      + 33);<br></td></tr
><tr
id=sl_svn119_668

><td class="source">        if (type != 2 /* MOUSE_CLICK */) {<br></td></tr
><tr
id=sl_svn119_669

><td class="source">          this.keysPressed(report);<br></td></tr
><tr
id=sl_svn119_670

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_671

><td class="source"><br></td></tr
><tr
id=sl_svn119_672

><td class="source">        // If we reported the event, stop propagating it (not sure, if this<br></td></tr
><tr
id=sl_svn119_673

><td class="source">        // actually works on most browsers; blocking the global &quot;oncontextmenu&quot;<br></td></tr
><tr
id=sl_svn119_674

><td class="source">        // even is still necessary).<br></td></tr
><tr
id=sl_svn119_675

><td class="source">        return this.cancelEvent(event);<br></td></tr
><tr
id=sl_svn119_676

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_677

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_678

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_679

><td class="source"><br></td></tr
><tr
id=sl_svn119_680

><td class="source">  // Bring up context menu.<br></td></tr
><tr
id=sl_svn119_681

><td class="source">  if (button == 2 &amp;&amp; !event.shiftKey) {<br></td></tr
><tr
id=sl_svn119_682

><td class="source">    if (type == 0 /* MOUSE_DOWN */) {<br></td></tr
><tr
id=sl_svn119_683

><td class="source">      this.showContextMenu(event.clientX - offsetX, event.clientY - offsetY);<br></td></tr
><tr
id=sl_svn119_684

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_685

><td class="source">    return this.cancelEvent(event);<br></td></tr
><tr
id=sl_svn119_686

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_687

><td class="source"><br></td></tr
><tr
id=sl_svn119_688

><td class="source">  if (this.mouseReporting) {<br></td></tr
><tr
id=sl_svn119_689

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_690

><td class="source">      event.shiftKey         = false;<br></td></tr
><tr
id=sl_svn119_691

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_692

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_693

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_694

><td class="source"><br></td></tr
><tr
id=sl_svn119_695

><td class="source">  return true;<br></td></tr
><tr
id=sl_svn119_696

><td class="source">};<br></td></tr
><tr
id=sl_svn119_697

><td class="source"><br></td></tr
><tr
id=sl_svn119_698

><td class="source">VT100.prototype.getTextContent = function(elem) {<br></td></tr
><tr
id=sl_svn119_699

><td class="source">  return elem.textContent ||<br></td></tr
><tr
id=sl_svn119_700

><td class="source">         (typeof elem.textContent == &#39;undefined&#39; ? elem.innerText : &#39;&#39;);<br></td></tr
><tr
id=sl_svn119_701

><td class="source">};<br></td></tr
><tr
id=sl_svn119_702

><td class="source"><br></td></tr
><tr
id=sl_svn119_703

><td class="source">VT100.prototype.setTextContent = function(elem, s) {<br></td></tr
><tr
id=sl_svn119_704

><td class="source">  // Updating the content of an element is an expensive operation. It actually<br></td></tr
><tr
id=sl_svn119_705

><td class="source">  // pays off to first check whether the element is still unchanged.<br></td></tr
><tr
id=sl_svn119_706

><td class="source">  if (typeof elem.textContent == &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_707

><td class="source">    if (elem.innerText != s) {<br></td></tr
><tr
id=sl_svn119_708

><td class="source">      elem.innerText   = s;<br></td></tr
><tr
id=sl_svn119_709

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_710

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_711

><td class="source">    if (elem.textContent != s) {<br></td></tr
><tr
id=sl_svn119_712

><td class="source">      elem.textContent = s;<br></td></tr
><tr
id=sl_svn119_713

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_714

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_715

><td class="source">};<br></td></tr
><tr
id=sl_svn119_716

><td class="source"><br></td></tr
><tr
id=sl_svn119_717

><td class="source">VT100.prototype.insertBlankLine = function(y, style) {<br></td></tr
><tr
id=sl_svn119_718

><td class="source">  // Insert a blank line a position y. This method ignores the scrollback<br></td></tr
><tr
id=sl_svn119_719

><td class="source">  // buffer. The caller has to add the length of the scrollback buffer to<br></td></tr
><tr
id=sl_svn119_720

><td class="source">  // the position, if necessary.<br></td></tr
><tr
id=sl_svn119_721

><td class="source">  // If the position is larger than the number of current lines, this<br></td></tr
><tr
id=sl_svn119_722

><td class="source">  // method just adds a new line right after the last existing one. It does<br></td></tr
><tr
id=sl_svn119_723

><td class="source">  // not add any missing lines in between. It is the caller&#39;s responsibility<br></td></tr
><tr
id=sl_svn119_724

><td class="source">  // to do so.<br></td></tr
><tr
id=sl_svn119_725

><td class="source">  if (style == undefined) {<br></td></tr
><tr
id=sl_svn119_726

><td class="source">    style              = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_727

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_728

><td class="source">  var line;<br></td></tr
><tr
id=sl_svn119_729

><td class="source">  if (!style) {<br></td></tr
><tr
id=sl_svn119_730

><td class="source">    line               = document.createElement(&#39;pre&#39;);<br></td></tr
><tr
id=sl_svn119_731

><td class="source">    this.setTextContent(line, &#39;\n&#39;);<br></td></tr
><tr
id=sl_svn119_732

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_733

><td class="source">    line               = document.createElement(&#39;div&#39;);<br></td></tr
><tr
id=sl_svn119_734

><td class="source">    var span           = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_735

><td class="source">    span.style.cssText = style;<br></td></tr
><tr
id=sl_svn119_736

><td class="source">    this.setTextContent(span, this.spaces(this.terminalWidth));<br></td></tr
><tr
id=sl_svn119_737

><td class="source">    line.appendChild(span);<br></td></tr
><tr
id=sl_svn119_738

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_739

><td class="source">  line.style.height    = this.cursorHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_740

><td class="source">  var console          = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_741

><td class="source">  if (console.childNodes.length &gt; y) {<br></td></tr
><tr
id=sl_svn119_742

><td class="source">    console.insertBefore(line, console.childNodes[y]);<br></td></tr
><tr
id=sl_svn119_743

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_744

><td class="source">    console.appendChild(line);<br></td></tr
><tr
id=sl_svn119_745

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_746

><td class="source">};<br></td></tr
><tr
id=sl_svn119_747

><td class="source"><br></td></tr
><tr
id=sl_svn119_748

><td class="source">VT100.prototype.updateWidth = function() {<br></td></tr
><tr
id=sl_svn119_749

><td class="source">  this.terminalWidth = Math.floor(this.console[this.currentScreen].offsetWidth/<br></td></tr
><tr
id=sl_svn119_750

><td class="source">                                  this.cursorWidth);<br></td></tr
><tr
id=sl_svn119_751

><td class="source">  return this.terminalWidth;<br></td></tr
><tr
id=sl_svn119_752

><td class="source">};<br></td></tr
><tr
id=sl_svn119_753

><td class="source"><br></td></tr
><tr
id=sl_svn119_754

><td class="source">VT100.prototype.updateHeight = function() {<br></td></tr
><tr
id=sl_svn119_755

><td class="source">  // We want to be able to display either a terminal window that fills the<br></td></tr
><tr
id=sl_svn119_756

><td class="source">  // entire browser window, or a terminal window that is contained in a<br></td></tr
><tr
id=sl_svn119_757

><td class="source">  // &lt;div&gt; which is embededded somewhere in the web page.<br></td></tr
><tr
id=sl_svn119_758

><td class="source">  if (this.isEmbedded) {<br></td></tr
><tr
id=sl_svn119_759

><td class="source">    // Embedded terminal. Use size of the containing &lt;div&gt; (id=&quot;vt100&quot;).<br></td></tr
><tr
id=sl_svn119_760

><td class="source">    this.terminalHeight = Math.floor((this.container.clientHeight-1) /<br></td></tr
><tr
id=sl_svn119_761

><td class="source">                                     this.cursorHeight);<br></td></tr
><tr
id=sl_svn119_762

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_763

><td class="source">    // Use the full browser window.<br></td></tr
><tr
id=sl_svn119_764

><td class="source">    this.terminalHeight = Math.floor(((window.innerHeight ||<br></td></tr
><tr
id=sl_svn119_765

><td class="source">                                       document.documentElement.clientHeight ||<br></td></tr
><tr
id=sl_svn119_766

><td class="source">                                       document.body.clientHeight)-1)/<br></td></tr
><tr
id=sl_svn119_767

><td class="source">                                     this.cursorHeight);<br></td></tr
><tr
id=sl_svn119_768

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_769

><td class="source">  return this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_770

><td class="source">};<br></td></tr
><tr
id=sl_svn119_771

><td class="source"><br></td></tr
><tr
id=sl_svn119_772

><td class="source">VT100.prototype.updateNumScrollbackLines = function() {<br></td></tr
><tr
id=sl_svn119_773

><td class="source">  var scrollback          = Math.floor(<br></td></tr
><tr
id=sl_svn119_774

><td class="source">                                this.console[this.currentScreen].offsetHeight /<br></td></tr
><tr
id=sl_svn119_775

><td class="source">                                this.cursorHeight) -<br></td></tr
><tr
id=sl_svn119_776

><td class="source">                            this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_777

><td class="source">  this.numScrollbackLines = scrollback &lt; 0 ? 0 : scrollback;<br></td></tr
><tr
id=sl_svn119_778

><td class="source">  return this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_779

><td class="source">};<br></td></tr
><tr
id=sl_svn119_780

><td class="source"><br></td></tr
><tr
id=sl_svn119_781

><td class="source">VT100.prototype.truncateLines = function(width) {<br></td></tr
><tr
id=sl_svn119_782

><td class="source">  if (width &lt; 0) {<br></td></tr
><tr
id=sl_svn119_783

><td class="source">    width             = 0;<br></td></tr
><tr
id=sl_svn119_784

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_785

><td class="source">  for (var line = this.console[this.currentScreen].firstChild; line;<br></td></tr
><tr
id=sl_svn119_786

><td class="source">       line = line.nextSibling) {<br></td></tr
><tr
id=sl_svn119_787

><td class="source">    if (line.tagName == &#39;DIV&#39;) {<br></td></tr
><tr
id=sl_svn119_788

><td class="source">      var x           = 0;<br></td></tr
><tr
id=sl_svn119_789

><td class="source"><br></td></tr
><tr
id=sl_svn119_790

><td class="source">      // Traverse current line and truncate if once we saw &quot;width&quot; characters<br></td></tr
><tr
id=sl_svn119_791

><td class="source">      for (var span = line.firstChild; span;<br></td></tr
><tr
id=sl_svn119_792

><td class="source">           span = span.nextSibling) {<br></td></tr
><tr
id=sl_svn119_793

><td class="source">        var s         = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_794

><td class="source">        var l         = s.length;<br></td></tr
><tr
id=sl_svn119_795

><td class="source">        if (x + l &gt; width) {<br></td></tr
><tr
id=sl_svn119_796

><td class="source">          this.setTextContent(span, s.substr(0, width - x));<br></td></tr
><tr
id=sl_svn119_797

><td class="source">          while (span.nextSibling) {<br></td></tr
><tr
id=sl_svn119_798

><td class="source">            line.removeChild(line.lastChild);<br></td></tr
><tr
id=sl_svn119_799

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_800

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_801

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_802

><td class="source">        x            += l;<br></td></tr
><tr
id=sl_svn119_803

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_804

><td class="source">      // Prune white space from the end of the current line<br></td></tr
><tr
id=sl_svn119_805

><td class="source">      var span       = line.lastChild;<br></td></tr
><tr
id=sl_svn119_806

><td class="source">      while (span &amp;&amp; !span.style.cssText.length) {<br></td></tr
><tr
id=sl_svn119_807

><td class="source">        // Scan backwards looking for first non-space character<br></td></tr
><tr
id=sl_svn119_808

><td class="source">        var s         = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_809

><td class="source">        for (var i = s.length; i--; ) {<br></td></tr
><tr
id=sl_svn119_810

><td class="source">          if (s.charAt(i) != &#39; &#39;) {<br></td></tr
><tr
id=sl_svn119_811

><td class="source">            if (i+1 != s.length) {<br></td></tr
><tr
id=sl_svn119_812

><td class="source">              this.setTextContent(s.substr(0, i+1));<br></td></tr
><tr
id=sl_svn119_813

><td class="source">            }<br></td></tr
><tr
id=sl_svn119_814

><td class="source">            span      = null;<br></td></tr
><tr
id=sl_svn119_815

><td class="source">            break;<br></td></tr
><tr
id=sl_svn119_816

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_817

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_818

><td class="source">        if (span) {<br></td></tr
><tr
id=sl_svn119_819

><td class="source">          var sibling = span;<br></td></tr
><tr
id=sl_svn119_820

><td class="source">          span        = span.previousSibling;<br></td></tr
><tr
id=sl_svn119_821

><td class="source">          if (span) {<br></td></tr
><tr
id=sl_svn119_822

><td class="source">            // Remove blank &lt;span&gt;&#39;s from end of line<br></td></tr
><tr
id=sl_svn119_823

><td class="source">            line.removeChild(sibling);<br></td></tr
><tr
id=sl_svn119_824

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn119_825

><td class="source">            // Remove entire line (i.e. &lt;div&gt;), if empty<br></td></tr
><tr
id=sl_svn119_826

><td class="source">            var blank = document.createElement(&#39;pre&#39;);<br></td></tr
><tr
id=sl_svn119_827

><td class="source">            blank.style.height = this.cursorHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_828

><td class="source">            this.setTextContent(blank, &#39;\n&#39;);<br></td></tr
><tr
id=sl_svn119_829

><td class="source">            line.parentNode.replaceChild(blank, line);<br></td></tr
><tr
id=sl_svn119_830

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_831

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_832

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_833

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_834

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_835

><td class="source">};<br></td></tr
><tr
id=sl_svn119_836

><td class="source"><br></td></tr
><tr
id=sl_svn119_837

><td class="source">VT100.prototype.putString = function(x, y, text, style) {<br></td></tr
><tr
id=sl_svn119_838

><td class="source">  if (!style) {<br></td></tr
><tr
id=sl_svn119_839

><td class="source">    style                           = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_840

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_841

><td class="source">  var yIdx                          = y + this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_842

><td class="source">  var line;<br></td></tr
><tr
id=sl_svn119_843

><td class="source">  var sibling;<br></td></tr
><tr
id=sl_svn119_844

><td class="source">  var s;<br></td></tr
><tr
id=sl_svn119_845

><td class="source">  var span;<br></td></tr
><tr
id=sl_svn119_846

><td class="source">  var xPos                          = 0;<br></td></tr
><tr
id=sl_svn119_847

><td class="source">  var console                       = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_848

><td class="source">  if (!text.length &amp;&amp; (yIdx &gt;= console.childNodes.length ||<br></td></tr
><tr
id=sl_svn119_849

><td class="source">                       console.childNodes[yIdx].tagName != &#39;DIV&#39;)) {<br></td></tr
><tr
id=sl_svn119_850

><td class="source">    // Positioning cursor to a blank location<br></td></tr
><tr
id=sl_svn119_851

><td class="source">    span                            = null;<br></td></tr
><tr
id=sl_svn119_852

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_853

><td class="source">    // Create missing blank lines at end of page<br></td></tr
><tr
id=sl_svn119_854

><td class="source">    while (console.childNodes.length &lt;= yIdx) {<br></td></tr
><tr
id=sl_svn119_855

><td class="source">      // In order to simplify lookups, we want to make sure that each line<br></td></tr
><tr
id=sl_svn119_856

><td class="source">      // is represented by exactly one element (and possibly a whole bunch of<br></td></tr
><tr
id=sl_svn119_857

><td class="source">      // children).<br></td></tr
><tr
id=sl_svn119_858

><td class="source">      // For non-blank lines, we can create a &lt;div&gt; containing one or more<br></td></tr
><tr
id=sl_svn119_859

><td class="source">      // &lt;span&gt;s. For blank lines, this fails as browsers tend to optimize them<br></td></tr
><tr
id=sl_svn119_860

><td class="source">      // away. But fortunately, a &lt;pre&gt; tag containing a newline character<br></td></tr
><tr
id=sl_svn119_861

><td class="source">      // appears to work for all browsers (a &amp;nbsp; would also work, but then<br></td></tr
><tr
id=sl_svn119_862

><td class="source">      // copying from the browser window would insert superfluous spaces into<br></td></tr
><tr
id=sl_svn119_863

><td class="source">      // the clipboard).<br></td></tr
><tr
id=sl_svn119_864

><td class="source">      this.insertBlankLine(yIdx);<br></td></tr
><tr
id=sl_svn119_865

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_866

><td class="source">    line                            = console.childNodes[yIdx];<br></td></tr
><tr
id=sl_svn119_867

><td class="source">    <br></td></tr
><tr
id=sl_svn119_868

><td class="source">    // If necessary, promote blank &#39;\n&#39; line to a &lt;div&gt; tag<br></td></tr
><tr
id=sl_svn119_869

><td class="source">    if (line.tagName != &#39;DIV&#39;) {<br></td></tr
><tr
id=sl_svn119_870

><td class="source">      var div                       = document.createElement(&#39;div&#39;);<br></td></tr
><tr
id=sl_svn119_871

><td class="source">      div.style.height              = this.cursorHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_872

><td class="source">      div.innerHTML                 = &#39;&lt;span&gt;&lt;/span&gt;&#39;;<br></td></tr
><tr
id=sl_svn119_873

><td class="source">      console.replaceChild(div, line);<br></td></tr
><tr
id=sl_svn119_874

><td class="source">      line                          = div;<br></td></tr
><tr
id=sl_svn119_875

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_876

><td class="source"><br></td></tr
><tr
id=sl_svn119_877

><td class="source">    // Scan through list of &lt;span&gt;&#39;s until we find the one where our text<br></td></tr
><tr
id=sl_svn119_878

><td class="source">    // starts<br></td></tr
><tr
id=sl_svn119_879

><td class="source">    span                            = line.firstChild;<br></td></tr
><tr
id=sl_svn119_880

><td class="source">    var len;<br></td></tr
><tr
id=sl_svn119_881

><td class="source">    while (span.nextSibling &amp;&amp; xPos &lt; x) {<br></td></tr
><tr
id=sl_svn119_882

><td class="source">      len                           = this.getTextContent(span).length;<br></td></tr
><tr
id=sl_svn119_883

><td class="source">      if (xPos + len &gt; x) {<br></td></tr
><tr
id=sl_svn119_884

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_885

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_886

><td class="source">      xPos                         += len;<br></td></tr
><tr
id=sl_svn119_887

><td class="source">      span                          = span.nextSibling;<br></td></tr
><tr
id=sl_svn119_888

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_889

><td class="source"><br></td></tr
><tr
id=sl_svn119_890

><td class="source">    if (text.length) {<br></td></tr
><tr
id=sl_svn119_891

><td class="source">      // If current &lt;span&gt; is not long enough, pad with spaces or add new<br></td></tr
><tr
id=sl_svn119_892

><td class="source">      // span<br></td></tr
><tr
id=sl_svn119_893

><td class="source">      s                             = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_894

><td class="source">      var oldStyle                  = span.style.cssText;<br></td></tr
><tr
id=sl_svn119_895

><td class="source">      if (xPos + s.length &lt; x) {<br></td></tr
><tr
id=sl_svn119_896

><td class="source">        if (oldStyle != &#39;&#39;) {<br></td></tr
><tr
id=sl_svn119_897

><td class="source">          span                      = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_898

><td class="source">          line.appendChild(span);<br></td></tr
><tr
id=sl_svn119_899

><td class="source">          span.style.cssText        = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_900

><td class="source">          oldStyle                  = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_901

><td class="source">          xPos                     += s.length;<br></td></tr
><tr
id=sl_svn119_902

><td class="source">          s                         = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_903

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_904

><td class="source">        do {<br></td></tr
><tr
id=sl_svn119_905

><td class="source">          s                        += &#39; &#39;;<br></td></tr
><tr
id=sl_svn119_906

><td class="source">        } while (xPos + s.length &lt; x);<br></td></tr
><tr
id=sl_svn119_907

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_908

><td class="source">    <br></td></tr
><tr
id=sl_svn119_909

><td class="source">      // If styles do not match, create a new &lt;span&gt;<br></td></tr
><tr
id=sl_svn119_910

><td class="source">      var del                       = text.length - s.length + x - xPos;<br></td></tr
><tr
id=sl_svn119_911

><td class="source">      if (oldStyle != style &amp;&amp; (oldStyle || style)) {<br></td></tr
><tr
id=sl_svn119_912

><td class="source">        if (xPos == x) {<br></td></tr
><tr
id=sl_svn119_913

><td class="source">          // Replacing text at beginning of existing &lt;span&gt;<br></td></tr
><tr
id=sl_svn119_914

><td class="source">          if (text.length &gt;= s.length) {<br></td></tr
><tr
id=sl_svn119_915

><td class="source">            // New text is equal or longer than existing text<br></td></tr
><tr
id=sl_svn119_916

><td class="source">            s                       = text;<br></td></tr
><tr
id=sl_svn119_917

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn119_918

><td class="source">            // Insert new &lt;span&gt; before the current one, then remove leading<br></td></tr
><tr
id=sl_svn119_919

><td class="source">            // part of existing &lt;span&gt;, adjust style of new &lt;span&gt;, and finally<br></td></tr
><tr
id=sl_svn119_920

><td class="source">            // set its contents<br></td></tr
><tr
id=sl_svn119_921

><td class="source">            sibling                 = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_922

><td class="source">            line.insertBefore(sibling, span);<br></td></tr
><tr
id=sl_svn119_923

><td class="source">            this.setTextContent(span, s.substr(text.length));<br></td></tr
><tr
id=sl_svn119_924

><td class="source">            span                    = sibling;<br></td></tr
><tr
id=sl_svn119_925

><td class="source">            s                       = text;<br></td></tr
><tr
id=sl_svn119_926

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_927

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_928

><td class="source">          // Replacing text some way into the existing &lt;span&gt;<br></td></tr
><tr
id=sl_svn119_929

><td class="source">          var remainder             = s.substr(x + text.length - xPos);<br></td></tr
><tr
id=sl_svn119_930

><td class="source">          this.setTextContent(span, s.substr(0, x - xPos));<br></td></tr
><tr
id=sl_svn119_931

><td class="source">          xPos                      = x;<br></td></tr
><tr
id=sl_svn119_932

><td class="source">          sibling                   = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_933

><td class="source">          if (span.nextSibling) {<br></td></tr
><tr
id=sl_svn119_934

><td class="source">            line.insertBefore(sibling, span.nextSibling);<br></td></tr
><tr
id=sl_svn119_935

><td class="source">            span                    = sibling;<br></td></tr
><tr
id=sl_svn119_936

><td class="source">            if (remainder.length) {<br></td></tr
><tr
id=sl_svn119_937

><td class="source">              sibling               = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_938

><td class="source">              sibling.style.cssText = oldStyle;<br></td></tr
><tr
id=sl_svn119_939

><td class="source">              this.setTextContent(sibling, remainder);<br></td></tr
><tr
id=sl_svn119_940

><td class="source">              line.insertBefore(sibling, span.nextSibling);<br></td></tr
><tr
id=sl_svn119_941

><td class="source">            }<br></td></tr
><tr
id=sl_svn119_942

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn119_943

><td class="source">            line.appendChild(sibling);<br></td></tr
><tr
id=sl_svn119_944

><td class="source">            span                    = sibling;<br></td></tr
><tr
id=sl_svn119_945

><td class="source">            if (remainder.length) {<br></td></tr
><tr
id=sl_svn119_946

><td class="source">              sibling               = document.createElement(&#39;span&#39;);<br></td></tr
><tr
id=sl_svn119_947

><td class="source">              sibling.style.cssText = oldStyle;<br></td></tr
><tr
id=sl_svn119_948

><td class="source">              this.setTextContent(sibling, remainder);<br></td></tr
><tr
id=sl_svn119_949

><td class="source">              line.appendChild(sibling);<br></td></tr
><tr
id=sl_svn119_950

><td class="source">            }<br></td></tr
><tr
id=sl_svn119_951

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_952

><td class="source">          s                         = text;<br></td></tr
><tr
id=sl_svn119_953

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_954

><td class="source">        span.style.cssText          = style;<br></td></tr
><tr
id=sl_svn119_955

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_956

><td class="source">        // Overwrite (partial) &lt;span&gt; with new text<br></td></tr
><tr
id=sl_svn119_957

><td class="source">        s                           = s.substr(0, x - xPos) +<br></td></tr
><tr
id=sl_svn119_958

><td class="source">          text +<br></td></tr
><tr
id=sl_svn119_959

><td class="source">          s.substr(x + text.length - xPos);<br></td></tr
><tr
id=sl_svn119_960

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_961

><td class="source">      this.setTextContent(span, s);<br></td></tr
><tr
id=sl_svn119_962

><td class="source"><br></td></tr
><tr
id=sl_svn119_963

><td class="source">      <br></td></tr
><tr
id=sl_svn119_964

><td class="source">      // Delete all subsequent &lt;span&gt;&#39;s that have just been overwritten<br></td></tr
><tr
id=sl_svn119_965

><td class="source">      sibling                       = span.nextSibling;<br></td></tr
><tr
id=sl_svn119_966

><td class="source">      while (del &gt; 0 &amp;&amp; sibling) {<br></td></tr
><tr
id=sl_svn119_967

><td class="source">        s                           = this.getTextContent(sibling);<br></td></tr
><tr
id=sl_svn119_968

><td class="source">        len                         = s.length;<br></td></tr
><tr
id=sl_svn119_969

><td class="source">        if (len &lt;= del) {<br></td></tr
><tr
id=sl_svn119_970

><td class="source">          line.removeChild(sibling);<br></td></tr
><tr
id=sl_svn119_971

><td class="source">          del                      -= len;<br></td></tr
><tr
id=sl_svn119_972

><td class="source">          sibling                   = span.nextSibling;<br></td></tr
><tr
id=sl_svn119_973

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_974

><td class="source">          this.setTextContent(sibling, s.substr(del));<br></td></tr
><tr
id=sl_svn119_975

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_976

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_977

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_978

><td class="source">      <br></td></tr
><tr
id=sl_svn119_979

><td class="source">      // Merge &lt;span&gt; with next sibling, if styles are identical<br></td></tr
><tr
id=sl_svn119_980

><td class="source">      if (sibling &amp;&amp; span.style.cssText == sibling.style.cssText) {<br></td></tr
><tr
id=sl_svn119_981

><td class="source">        this.setTextContent(span,<br></td></tr
><tr
id=sl_svn119_982

><td class="source">                            this.getTextContent(span) +<br></td></tr
><tr
id=sl_svn119_983

><td class="source">                            this.getTextContent(sibling));<br></td></tr
><tr
id=sl_svn119_984

><td class="source">        line.removeChild(sibling);<br></td></tr
><tr
id=sl_svn119_985

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_986

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_987

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_988

><td class="source"><br></td></tr
><tr
id=sl_svn119_989

><td class="source">  // Position cursor<br></td></tr
><tr
id=sl_svn119_990

><td class="source">  this.cursorX                      = x + text.length;<br></td></tr
><tr
id=sl_svn119_991

><td class="source">  if (this.cursorX &gt;= this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_992

><td class="source">    this.cursorX                    = this.terminalWidth - 1;<br></td></tr
><tr
id=sl_svn119_993

><td class="source">    if (this.cursorX &lt; 0) {<br></td></tr
><tr
id=sl_svn119_994

><td class="source">      this.cursorX                  = 0;<br></td></tr
><tr
id=sl_svn119_995

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_996

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_997

><td class="source">  var pixelX                        = -1;<br></td></tr
><tr
id=sl_svn119_998

><td class="source">  var pixelY                        = -1;<br></td></tr
><tr
id=sl_svn119_999

><td class="source">  if (!this.cursor.style.visibility) {<br></td></tr
><tr
id=sl_svn119_1000

><td class="source">    var idx                         = this.cursorX - xPos;<br></td></tr
><tr
id=sl_svn119_1001

><td class="source">    if (span) {<br></td></tr
><tr
id=sl_svn119_1002

><td class="source">      // If we are in a non-empty line, take the cursor Y position from the<br></td></tr
><tr
id=sl_svn119_1003

><td class="source">      // other elements in this line. If dealing with broken, non-proportional<br></td></tr
><tr
id=sl_svn119_1004

><td class="source">      // fonts, this is likely to yield better results.<br></td></tr
><tr
id=sl_svn119_1005

><td class="source">      pixelY                        = span.offsetTop +<br></td></tr
><tr
id=sl_svn119_1006

><td class="source">                                      span.offsetParent.offsetTop;<br></td></tr
><tr
id=sl_svn119_1007

><td class="source">      s                             = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_1008

><td class="source">      var nxtIdx                    = idx - s.length;<br></td></tr
><tr
id=sl_svn119_1009

><td class="source">      if (nxtIdx &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1010

><td class="source">        this.setTextContent(this.cursor, s.charAt(idx));<br></td></tr
><tr
id=sl_svn119_1011

><td class="source">        pixelX                      = span.offsetLeft +<br></td></tr
><tr
id=sl_svn119_1012

><td class="source">                                      idx*span.offsetWidth / s.length;<br></td></tr
><tr
id=sl_svn119_1013

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_1014

><td class="source">        if (nxtIdx == 0) {<br></td></tr
><tr
id=sl_svn119_1015

><td class="source">          pixelX                    = span.offsetLeft + span.offsetWidth;<br></td></tr
><tr
id=sl_svn119_1016

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1017

><td class="source">        if (span.nextSibling) {<br></td></tr
><tr
id=sl_svn119_1018

><td class="source">          s                         = this.getTextContent(span.nextSibling);<br></td></tr
><tr
id=sl_svn119_1019

><td class="source">          this.setTextContent(this.cursor, s.charAt(nxtIdx));<br></td></tr
><tr
id=sl_svn119_1020

><td class="source">          if (pixelX &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1021

><td class="source">            pixelX                  = span.nextSibling.offsetLeft +<br></td></tr
><tr
id=sl_svn119_1022

><td class="source">                                      nxtIdx*span.offsetWidth / s.length;<br></td></tr
><tr
id=sl_svn119_1023

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1024

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_1025

><td class="source">          this.setTextContent(this.cursor, &#39; &#39;);<br></td></tr
><tr
id=sl_svn119_1026

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1027

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1028

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_1029

><td class="source">      this.setTextContent(this.cursor, &#39; &#39;);<br></td></tr
><tr
id=sl_svn119_1030

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1031

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1032

><td class="source">  if (pixelX &gt;= 0) {<br></td></tr
><tr
id=sl_svn119_1033

><td class="source">    this.cursor.style.left          = (pixelX + (this.isIE ? 1 : 0))  + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1034

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1035

><td class="source">    this.setTextContent(this.space, this.spaces(this.cursorX));<br></td></tr
><tr
id=sl_svn119_1036

><td class="source">    this.cursor.style.left          = this.space.offsetWidth +<br></td></tr
><tr
id=sl_svn119_1037

><td class="source">                                      console.offsetLeft + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1038

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1039

><td class="source">  this.cursorY                      = yIdx - this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_1040

><td class="source">  if (pixelY &gt;= 0) {<br></td></tr
><tr
id=sl_svn119_1041

><td class="source">    this.cursor.style.top           = pixelY + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1042

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1043

><td class="source">    this.cursor.style.top           = yIdx*this.cursorHeight +<br></td></tr
><tr
id=sl_svn119_1044

><td class="source">                                      console.offsetTop + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1045

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1046

><td class="source"><br></td></tr
><tr
id=sl_svn119_1047

><td class="source">  if (text.length) {<br></td></tr
><tr
id=sl_svn119_1048

><td class="source">    // Merge &lt;span&gt; with previous sibling, if styles are identical<br></td></tr
><tr
id=sl_svn119_1049

><td class="source">    if ((sibling = span.previousSibling) &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1050

><td class="source">        span.style.cssText == sibling.style.cssText) {<br></td></tr
><tr
id=sl_svn119_1051

><td class="source">      this.setTextContent(span,<br></td></tr
><tr
id=sl_svn119_1052

><td class="source">                          this.getTextContent(sibling) +<br></td></tr
><tr
id=sl_svn119_1053

><td class="source">                          this.getTextContent(span));<br></td></tr
><tr
id=sl_svn119_1054

><td class="source">      line.removeChild(sibling);<br></td></tr
><tr
id=sl_svn119_1055

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1056

><td class="source">    <br></td></tr
><tr
id=sl_svn119_1057

><td class="source">    // Prune white space from the end of the current line<br></td></tr
><tr
id=sl_svn119_1058

><td class="source">    span                            = line.lastChild;<br></td></tr
><tr
id=sl_svn119_1059

><td class="source">    while (span &amp;&amp; !span.style.cssText.length) {<br></td></tr
><tr
id=sl_svn119_1060

><td class="source">      // Scan backwards looking for first non-space character<br></td></tr
><tr
id=sl_svn119_1061

><td class="source">      s                             = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_1062

><td class="source">      for (var i = s.length; i--; ) {<br></td></tr
><tr
id=sl_svn119_1063

><td class="source">        if (s.charAt(i) != &#39; &#39;) {<br></td></tr
><tr
id=sl_svn119_1064

><td class="source">          if (i+1 != s.length) {<br></td></tr
><tr
id=sl_svn119_1065

><td class="source">            this.setTextContent(s.substr(0, i+1));<br></td></tr
><tr
id=sl_svn119_1066

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1067

><td class="source">          span                      = null;<br></td></tr
><tr
id=sl_svn119_1068

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_1069

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1070

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1071

><td class="source">      if (span) {<br></td></tr
><tr
id=sl_svn119_1072

><td class="source">        sibling                     = span;<br></td></tr
><tr
id=sl_svn119_1073

><td class="source">        span                        = span.previousSibling;<br></td></tr
><tr
id=sl_svn119_1074

><td class="source">        if (span) {<br></td></tr
><tr
id=sl_svn119_1075

><td class="source">          // Remove blank &lt;span&gt;&#39;s from end of line<br></td></tr
><tr
id=sl_svn119_1076

><td class="source">          line.removeChild(sibling);<br></td></tr
><tr
id=sl_svn119_1077

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_1078

><td class="source">          // Remove entire line (i.e. &lt;div&gt;), if empty<br></td></tr
><tr
id=sl_svn119_1079

><td class="source">          var blank                 = document.createElement(&#39;pre&#39;);<br></td></tr
><tr
id=sl_svn119_1080

><td class="source">          blank.style.height        = this.cursorHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1081

><td class="source">          this.setTextContent(blank, &#39;\n&#39;);<br></td></tr
><tr
id=sl_svn119_1082

><td class="source">          line.parentNode.replaceChild(blank, line);<br></td></tr
><tr
id=sl_svn119_1083

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1084

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1085

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1086

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1087

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1088

><td class="source"><br></td></tr
><tr
id=sl_svn119_1089

><td class="source">VT100.prototype.gotoXY = function(x, y) {<br></td></tr
><tr
id=sl_svn119_1090

><td class="source">  if (x &gt;= this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_1091

><td class="source">    x           = this.terminalWidth - 1;<br></td></tr
><tr
id=sl_svn119_1092

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1093

><td class="source">  if (x &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1094

><td class="source">    x           = 0;<br></td></tr
><tr
id=sl_svn119_1095

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1096

><td class="source">  var minY, maxY;<br></td></tr
><tr
id=sl_svn119_1097

><td class="source">  if (this.offsetMode) {<br></td></tr
><tr
id=sl_svn119_1098

><td class="source">    minY        = this.top;<br></td></tr
><tr
id=sl_svn119_1099

><td class="source">    maxY        = this.bottom;<br></td></tr
><tr
id=sl_svn119_1100

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1101

><td class="source">    minY        = 0;<br></td></tr
><tr
id=sl_svn119_1102

><td class="source">    maxY        = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_1103

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1104

><td class="source">  if (y &gt;= maxY) {<br></td></tr
><tr
id=sl_svn119_1105

><td class="source">    y           = maxY - 1;<br></td></tr
><tr
id=sl_svn119_1106

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1107

><td class="source">  if (y &lt; minY) {<br></td></tr
><tr
id=sl_svn119_1108

><td class="source">    y           = minY;<br></td></tr
><tr
id=sl_svn119_1109

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1110

><td class="source">  this.putString(x, y, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1111

><td class="source">  this.needWrap = false;<br></td></tr
><tr
id=sl_svn119_1112

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1113

><td class="source"><br></td></tr
><tr
id=sl_svn119_1114

><td class="source">VT100.prototype.gotoXaY = function(x, y) {<br></td></tr
><tr
id=sl_svn119_1115

><td class="source">  this.gotoXY(x, this.offsetMode ? (this.top + y) : y);<br></td></tr
><tr
id=sl_svn119_1116

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1117

><td class="source"><br></td></tr
><tr
id=sl_svn119_1118

><td class="source">VT100.prototype.refreshInvertedState = function() {<br></td></tr
><tr
id=sl_svn119_1119

><td class="source">  if (this.isInverted) {<br></td></tr
><tr
id=sl_svn119_1120

><td class="source">    this.scrollable.style.color           = this.ansi[15];<br></td></tr
><tr
id=sl_svn119_1121

><td class="source">    this.scrollable.style.backgroundColor = this.ansi[0];<br></td></tr
><tr
id=sl_svn119_1122

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1123

><td class="source">    this.scrollable.style.color           = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1124

><td class="source">    this.scrollable.style.backgroundColor = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1125

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1126

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1127

><td class="source"><br></td></tr
><tr
id=sl_svn119_1128

><td class="source">VT100.prototype.enableAlternateScreen = function(state) {<br></td></tr
><tr
id=sl_svn119_1129

><td class="source">  // Don&#39;t do anything, if we are already on the desired screen<br></td></tr
><tr
id=sl_svn119_1130

><td class="source">  if ((state ? 1 : 0) == this.currentScreen) {<br></td></tr
><tr
id=sl_svn119_1131

><td class="source">    // Calling the resizer is not actually necessary. But it is a good way<br></td></tr
><tr
id=sl_svn119_1132

><td class="source">    // of resetting state that might have gotten corrupted.<br></td></tr
><tr
id=sl_svn119_1133

><td class="source">    this.resizer();<br></td></tr
><tr
id=sl_svn119_1134

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_1135

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1136

><td class="source">  <br></td></tr
><tr
id=sl_svn119_1137

><td class="source">  // We save the full state of the normal screen, when we switch away from it.<br></td></tr
><tr
id=sl_svn119_1138

><td class="source">  // But for the alternate screen, no saving is necessary. We always reset<br></td></tr
><tr
id=sl_svn119_1139

><td class="source">  // it when we switch to it.<br></td></tr
><tr
id=sl_svn119_1140

><td class="source">  if (state) {<br></td></tr
><tr
id=sl_svn119_1141

><td class="source">    this.saveCursor();<br></td></tr
><tr
id=sl_svn119_1142

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1143

><td class="source"><br></td></tr
><tr
id=sl_svn119_1144

><td class="source">  // Display new screen, and initialize state (the resizer does that for us).<br></td></tr
><tr
id=sl_svn119_1145

><td class="source">  this.currentScreen                               = state ? 1 : 0;<br></td></tr
><tr
id=sl_svn119_1146

><td class="source">  this.console[1-this.currentScreen].style.display = &#39;none&#39;;<br></td></tr
><tr
id=sl_svn119_1147

><td class="source">  this.console[this.currentScreen].style.display   = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1148

><td class="source">  this.resizer();<br></td></tr
><tr
id=sl_svn119_1149

><td class="source"><br></td></tr
><tr
id=sl_svn119_1150

><td class="source">  // If we switched to the alternate screen, reset it completely. Otherwise,<br></td></tr
><tr
id=sl_svn119_1151

><td class="source">  // restore the saved state.<br></td></tr
><tr
id=sl_svn119_1152

><td class="source">  if (state) {<br></td></tr
><tr
id=sl_svn119_1153

><td class="source">    this.gotoXY(0, 0);<br></td></tr
><tr
id=sl_svn119_1154

><td class="source">    this.clearRegion(0, 0, this.terminalWidth, this.terminalHeight);<br></td></tr
><tr
id=sl_svn119_1155

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1156

><td class="source">    this.restoreCursor();<br></td></tr
><tr
id=sl_svn119_1157

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1158

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1159

><td class="source"><br></td></tr
><tr
id=sl_svn119_1160

><td class="source">VT100.prototype.hideCursor = function() {<br></td></tr
><tr
id=sl_svn119_1161

><td class="source">  var hidden = this.cursor.style.visibility == &#39;hidden&#39;;<br></td></tr
><tr
id=sl_svn119_1162

><td class="source">  if (!hidden) {<br></td></tr
><tr
id=sl_svn119_1163

><td class="source">    this.cursor.style.visibility = &#39;hidden&#39;;<br></td></tr
><tr
id=sl_svn119_1164

><td class="source">    return true;<br></td></tr
><tr
id=sl_svn119_1165

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1166

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_1167

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1168

><td class="source"><br></td></tr
><tr
id=sl_svn119_1169

><td class="source">VT100.prototype.showCursor = function(x, y) {<br></td></tr
><tr
id=sl_svn119_1170

><td class="source">  if (this.cursor.style.visibility) {<br></td></tr
><tr
id=sl_svn119_1171

><td class="source">    this.cursor.style.visibility = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1172

><td class="source">    this.putString(x == undefined ? this.cursorX : x,<br></td></tr
><tr
id=sl_svn119_1173

><td class="source">                   y == undefined ? this.cursorY : y,<br></td></tr
><tr
id=sl_svn119_1174

><td class="source">                   &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1175

><td class="source">    return true;<br></td></tr
><tr
id=sl_svn119_1176

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1177

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_1178

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1179

><td class="source"><br></td></tr
><tr
id=sl_svn119_1180

><td class="source">VT100.prototype.scrollBack = function() {<br></td></tr
><tr
id=sl_svn119_1181

><td class="source">  var i                     = this.scrollable.scrollTop -<br></td></tr
><tr
id=sl_svn119_1182

><td class="source">                              this.scrollable.clientHeight;<br></td></tr
><tr
id=sl_svn119_1183

><td class="source">  this.scrollable.scrollTop = i &lt; 0 ? 0 : i;<br></td></tr
><tr
id=sl_svn119_1184

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1185

><td class="source"><br></td></tr
><tr
id=sl_svn119_1186

><td class="source">VT100.prototype.scrollFore = function() {<br></td></tr
><tr
id=sl_svn119_1187

><td class="source">  var i                     = this.scrollable.scrollTop +<br></td></tr
><tr
id=sl_svn119_1188

><td class="source">                              this.scrollable.clientHeight;<br></td></tr
><tr
id=sl_svn119_1189

><td class="source">  this.scrollable.scrollTop = i &gt; this.numScrollbackLines *<br></td></tr
><tr
id=sl_svn119_1190

><td class="source">                                  this.cursorHeight + 1<br></td></tr
><tr
id=sl_svn119_1191

><td class="source">                              ? this.numScrollbackLines *<br></td></tr
><tr
id=sl_svn119_1192

><td class="source">                                this.cursorHeight + 1<br></td></tr
><tr
id=sl_svn119_1193

><td class="source">                              : i;<br></td></tr
><tr
id=sl_svn119_1194

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1195

><td class="source"><br></td></tr
><tr
id=sl_svn119_1196

><td class="source">VT100.prototype.spaces = function(i) {<br></td></tr
><tr
id=sl_svn119_1197

><td class="source">  var s = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1198

><td class="source">  while (i-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_1199

><td class="source">    s += &#39; &#39;;<br></td></tr
><tr
id=sl_svn119_1200

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1201

><td class="source">  return s;<br></td></tr
><tr
id=sl_svn119_1202

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1203

><td class="source"><br></td></tr
><tr
id=sl_svn119_1204

><td class="source">VT100.prototype.clearRegion = function(x, y, w, h, style) {<br></td></tr
><tr
id=sl_svn119_1205

><td class="source">  w         += x;<br></td></tr
><tr
id=sl_svn119_1206

><td class="source">  if (x &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1207

><td class="source">    x        = 0;<br></td></tr
><tr
id=sl_svn119_1208

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1209

><td class="source">  if (w &gt; this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_1210

><td class="source">    w        = this.terminalWidth;<br></td></tr
><tr
id=sl_svn119_1211

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1212

><td class="source">  if ((w    -= x) &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_1213

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_1214

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1215

><td class="source">  h         += y;<br></td></tr
><tr
id=sl_svn119_1216

><td class="source">  if (y &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1217

><td class="source">    y        = 0;<br></td></tr
><tr
id=sl_svn119_1218

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1219

><td class="source">  if (h &gt; this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_1220

><td class="source">    h        = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_1221

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1222

><td class="source">  if ((h    -= y) &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_1223

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_1224

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1225

><td class="source"><br></td></tr
><tr
id=sl_svn119_1226

><td class="source">  // Special case the situation where we clear the entire screen, and we do<br></td></tr
><tr
id=sl_svn119_1227

><td class="source">  // not have a scrollback buffer. In that case, we should just remove all<br></td></tr
><tr
id=sl_svn119_1228

><td class="source">  // child nodes.<br></td></tr
><tr
id=sl_svn119_1229

><td class="source">  if (!this.numScrollbackLines &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1230

><td class="source">      w == this.terminalWidth &amp;&amp; h == this.terminalHeight &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1231

><td class="source">      !style) {<br></td></tr
><tr
id=sl_svn119_1232

><td class="source">    var console = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_1233

><td class="source">    while (console.lastChild) {<br></td></tr
><tr
id=sl_svn119_1234

><td class="source">      console.removeChild(console.lastChild);<br></td></tr
><tr
id=sl_svn119_1235

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1236

><td class="source">    this.putString(this.cursorX, this.cursorY, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1237

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1238

><td class="source">    var hidden = this.hideCursor();<br></td></tr
><tr
id=sl_svn119_1239

><td class="source">    var cx     = this.cursorX;<br></td></tr
><tr
id=sl_svn119_1240

><td class="source">    var cy     = this.cursorY;<br></td></tr
><tr
id=sl_svn119_1241

><td class="source">    var s      = this.spaces(w);<br></td></tr
><tr
id=sl_svn119_1242

><td class="source">    for (var i = y+h; i-- &gt; y; ) {<br></td></tr
><tr
id=sl_svn119_1243

><td class="source">      this.putString(x, i, s, style);<br></td></tr
><tr
id=sl_svn119_1244

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1245

><td class="source">    hidden ? this.showCursor(cx, cy) : this.putString(cx, cy, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1246

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1247

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1248

><td class="source"><br></td></tr
><tr
id=sl_svn119_1249

><td class="source">VT100.prototype.copyLineSegment = function(dX, dY, sX, sY, w) {<br></td></tr
><tr
id=sl_svn119_1250

><td class="source">  var text                    = [ ];<br></td></tr
><tr
id=sl_svn119_1251

><td class="source">  var style                   = [ ];<br></td></tr
><tr
id=sl_svn119_1252

><td class="source">  var console                 = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_1253

><td class="source">  if (sY &gt;= console.childNodes.length) {<br></td></tr
><tr
id=sl_svn119_1254

><td class="source">    text[0]                   = this.spaces(w);<br></td></tr
><tr
id=sl_svn119_1255

><td class="source">    style[0]                  = null;<br></td></tr
><tr
id=sl_svn119_1256

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1257

><td class="source">    var line = console.childNodes[sY];<br></td></tr
><tr
id=sl_svn119_1258

><td class="source">    if (line.tagName != &#39;DIV&#39; || !line.childNodes.length) {<br></td></tr
><tr
id=sl_svn119_1259

><td class="source">      text[0]                 = this.spaces(w);<br></td></tr
><tr
id=sl_svn119_1260

><td class="source">      style[0]                = null;<br></td></tr
><tr
id=sl_svn119_1261

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_1262

><td class="source">      var x                   = 0;<br></td></tr
><tr
id=sl_svn119_1263

><td class="source">      for (var span = line.firstChild; span &amp;&amp; w &gt; 0; span = span.nextSibling){<br></td></tr
><tr
id=sl_svn119_1264

><td class="source">        var s                 = this.getTextContent(span);<br></td></tr
><tr
id=sl_svn119_1265

><td class="source">        var len               = s.length;<br></td></tr
><tr
id=sl_svn119_1266

><td class="source">        if (x + len &gt; sX) {<br></td></tr
><tr
id=sl_svn119_1267

><td class="source">          var o               = sX &gt; x ? sX - x : 0;<br></td></tr
><tr
id=sl_svn119_1268

><td class="source">          text[text.length]   = s.substr(o, w);<br></td></tr
><tr
id=sl_svn119_1269

><td class="source">          style[style.length] = span.style.cssText;<br></td></tr
><tr
id=sl_svn119_1270

><td class="source">          w                  -= len - o;<br></td></tr
><tr
id=sl_svn119_1271

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1272

><td class="source">        x                    += len;<br></td></tr
><tr
id=sl_svn119_1273

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1274

><td class="source">      if (w &gt; 0) {<br></td></tr
><tr
id=sl_svn119_1275

><td class="source">        text[text.length]     = this.spaces(w);<br></td></tr
><tr
id=sl_svn119_1276

><td class="source">        style[style.length]   = null;<br></td></tr
><tr
id=sl_svn119_1277

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1278

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1279

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1280

><td class="source">  var hidden                  = this.hideCursor();<br></td></tr
><tr
id=sl_svn119_1281

><td class="source">  var cx                      = this.cursorX;<br></td></tr
><tr
id=sl_svn119_1282

><td class="source">  var cy                      = this.cursorY;<br></td></tr
><tr
id=sl_svn119_1283

><td class="source">  for (var i = 0; i &lt; text.length; i++) {<br></td></tr
><tr
id=sl_svn119_1284

><td class="source">    this.putString(dX, dY - this.numScrollbackLines, text[i], style[i]);<br></td></tr
><tr
id=sl_svn119_1285

><td class="source">    dX                       += text[i].length;<br></td></tr
><tr
id=sl_svn119_1286

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1287

><td class="source">  hidden ? this.showCursor(cx, cy) : this.putString(cx, cy, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1288

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1289

><td class="source"><br></td></tr
><tr
id=sl_svn119_1290

><td class="source">VT100.prototype.scrollRegion = function(x, y, w, h, incX, incY, style) {<br></td></tr
><tr
id=sl_svn119_1291

><td class="source">  var left             = incX &lt; 0 ? -incX : 0;<br></td></tr
><tr
id=sl_svn119_1292

><td class="source">  var right            = incX &gt; 0 ?  incX : 0;<br></td></tr
><tr
id=sl_svn119_1293

><td class="source">  var up               = incY &lt; 0 ? -incY : 0;<br></td></tr
><tr
id=sl_svn119_1294

><td class="source">  var down             = incY &gt; 0 ?  incY : 0;<br></td></tr
><tr
id=sl_svn119_1295

><td class="source"><br></td></tr
><tr
id=sl_svn119_1296

><td class="source">  // Clip region against terminal size<br></td></tr
><tr
id=sl_svn119_1297

><td class="source">  var dontScroll       = null;<br></td></tr
><tr
id=sl_svn119_1298

><td class="source">  w                   += x;<br></td></tr
><tr
id=sl_svn119_1299

><td class="source">  if (x &lt; left) {<br></td></tr
><tr
id=sl_svn119_1300

><td class="source">    x                  = left;<br></td></tr
><tr
id=sl_svn119_1301

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1302

><td class="source">  if (w &gt; this.terminalWidth - right) {<br></td></tr
><tr
id=sl_svn119_1303

><td class="source">    w                  = this.terminalWidth - right;<br></td></tr
><tr
id=sl_svn119_1304

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1305

><td class="source">  if ((w              -= x) &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_1306

><td class="source">    dontScroll         = 1;<br></td></tr
><tr
id=sl_svn119_1307

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1308

><td class="source">  h                   += y;<br></td></tr
><tr
id=sl_svn119_1309

><td class="source">  if (y &lt; up) {<br></td></tr
><tr
id=sl_svn119_1310

><td class="source">    y                  = up;<br></td></tr
><tr
id=sl_svn119_1311

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1312

><td class="source">  if (h &gt; this.terminalHeight - down) {<br></td></tr
><tr
id=sl_svn119_1313

><td class="source">    h                  = this.terminalHeight - down;<br></td></tr
><tr
id=sl_svn119_1314

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1315

><td class="source">  if ((h              -= y) &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1316

><td class="source">    dontScroll         = 1;<br></td></tr
><tr
id=sl_svn119_1317

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1318

><td class="source">  if (!dontScroll) {<br></td></tr
><tr
id=sl_svn119_1319

><td class="source">    if (style &amp;&amp; style.indexOf(&#39;underline&#39;)) {<br></td></tr
><tr
id=sl_svn119_1320

><td class="source">      // Different terminal emulators disagree on the attributes that<br></td></tr
><tr
id=sl_svn119_1321

><td class="source">      // are used for scrolling. The consensus seems to be, never to<br></td></tr
><tr
id=sl_svn119_1322

><td class="source">      // fill with underlined spaces. N.B. this is different from the<br></td></tr
><tr
id=sl_svn119_1323

><td class="source">      // cases when the user blanks a region. User-initiated blanking<br></td></tr
><tr
id=sl_svn119_1324

><td class="source">      // always fills with all of the current attributes.<br></td></tr
><tr
id=sl_svn119_1325

><td class="source">      this.attributeHelper.cssText<br></td></tr
><tr
id=sl_svn119_1326

><td class="source">                       = style.replace(/text-decoration:underline;/, &quot;&quot;);<br></td></tr
><tr
id=sl_svn119_1327

><td class="source">      style            = this.attributeHelper.cssText;<br></td></tr
><tr
id=sl_svn119_1328

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1329

><td class="source"><br></td></tr
><tr
id=sl_svn119_1330

><td class="source">    // Compute current scroll position<br></td></tr
><tr
id=sl_svn119_1331

><td class="source">    var scrollPos      = this.numScrollbackLines -<br></td></tr
><tr
id=sl_svn119_1332

><td class="source">                      (this.scrollable.scrollTop-1) / this.cursorHeight;<br></td></tr
><tr
id=sl_svn119_1333

><td class="source"><br></td></tr
><tr
id=sl_svn119_1334

><td class="source">    // Determine original cursor position. Hide cursor temporarily to avoid<br></td></tr
><tr
id=sl_svn119_1335

><td class="source">    // visual artifacts.<br></td></tr
><tr
id=sl_svn119_1336

><td class="source">    var hidden         = this.hideCursor();<br></td></tr
><tr
id=sl_svn119_1337

><td class="source">    var cx             = this.cursorX;<br></td></tr
><tr
id=sl_svn119_1338

><td class="source">    var cy             = this.cursorY;<br></td></tr
><tr
id=sl_svn119_1339

><td class="source">    var console        = this.console[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_1340

><td class="source"><br></td></tr
><tr
id=sl_svn119_1341

><td class="source">    if (!incX &amp;&amp; !x &amp;&amp; w == this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_1342

><td class="source">      // Scrolling entire lines<br></td></tr
><tr
id=sl_svn119_1343

><td class="source">      if (incY &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1344

><td class="source">        // Scrolling up<br></td></tr
><tr
id=sl_svn119_1345

><td class="source">        if (!this.currentScreen &amp;&amp; y == -incY &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1346

><td class="source">            h == this.terminalHeight + incY) {<br></td></tr
><tr
id=sl_svn119_1347

><td class="source">          // Scrolling up with adding to the scrollback buffer. This is only<br></td></tr
><tr
id=sl_svn119_1348

><td class="source">          // possible if there are at least as many lines in the console,<br></td></tr
><tr
id=sl_svn119_1349

><td class="source">          // as the terminal is high<br></td></tr
><tr
id=sl_svn119_1350

><td class="source">          while (console.childNodes.length &lt; this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_1351

><td class="source">            this.insertBlankLine(this.terminalHeight);<br></td></tr
><tr
id=sl_svn119_1352

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1353

><td class="source">          <br></td></tr
><tr
id=sl_svn119_1354

><td class="source">          // Add new lines at bottom in order to force scrolling<br></td></tr
><tr
id=sl_svn119_1355

><td class="source">          for (var i = 0; i &lt; y; i++) {<br></td></tr
><tr
id=sl_svn119_1356

><td class="source">            this.insertBlankLine(console.childNodes.length, style);<br></td></tr
><tr
id=sl_svn119_1357

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1358

><td class="source"><br></td></tr
><tr
id=sl_svn119_1359

><td class="source">          // Adjust the number of lines in the scrollback buffer by<br></td></tr
><tr
id=sl_svn119_1360

><td class="source">          // removing excess entries.<br></td></tr
><tr
id=sl_svn119_1361

><td class="source">          this.updateNumScrollbackLines();<br></td></tr
><tr
id=sl_svn119_1362

><td class="source">          while (this.numScrollbackLines &gt;<br></td></tr
><tr
id=sl_svn119_1363

><td class="source">                 (this.currentScreen ? 0 : this.maxScrollbackLines)) {<br></td></tr
><tr
id=sl_svn119_1364

><td class="source">            console.removeChild(console.firstChild);<br></td></tr
><tr
id=sl_svn119_1365

><td class="source">            this.numScrollbackLines--;<br></td></tr
><tr
id=sl_svn119_1366

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1367

><td class="source"><br></td></tr
><tr
id=sl_svn119_1368

><td class="source">          // Mark lines in the scrollback buffer, so that they do not get<br></td></tr
><tr
id=sl_svn119_1369

><td class="source">          // printed.<br></td></tr
><tr
id=sl_svn119_1370

><td class="source">          for (var i = this.numScrollbackLines, j = -incY;<br></td></tr
><tr
id=sl_svn119_1371

><td class="source">               i-- &gt; 0 &amp;&amp; j-- &gt; 0; ) {<br></td></tr
><tr
id=sl_svn119_1372

><td class="source">            console.childNodes[i].className = &#39;scrollback&#39;;<br></td></tr
><tr
id=sl_svn119_1373

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1374

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_1375

><td class="source">          // Scrolling up without adding to the scrollback buffer.<br></td></tr
><tr
id=sl_svn119_1376

><td class="source">          for (var i = -incY;<br></td></tr
><tr
id=sl_svn119_1377

><td class="source">               i-- &gt; 0 &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1378

><td class="source">               console.childNodes.length &gt;<br></td></tr
><tr
id=sl_svn119_1379

><td class="source">               this.numScrollbackLines + y + incY; ) {<br></td></tr
><tr
id=sl_svn119_1380

><td class="source">            console.removeChild(console.childNodes[<br></td></tr
><tr
id=sl_svn119_1381

><td class="source">                                          this.numScrollbackLines + y + incY]);<br></td></tr
><tr
id=sl_svn119_1382

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1383

><td class="source"><br></td></tr
><tr
id=sl_svn119_1384

><td class="source">          // If we used to have a scrollback buffer, then we must make sure<br></td></tr
><tr
id=sl_svn119_1385

><td class="source">          // that we add back blank lines at the bottom of the terminal.<br></td></tr
><tr
id=sl_svn119_1386

><td class="source">          // Similarly, if we are scrolling in the middle of the screen,<br></td></tr
><tr
id=sl_svn119_1387

><td class="source">          // we must add blank lines to ensure that the bottom of the screen<br></td></tr
><tr
id=sl_svn119_1388

><td class="source">          // does not move up.<br></td></tr
><tr
id=sl_svn119_1389

><td class="source">          if (this.numScrollbackLines &gt; 0 ||<br></td></tr
><tr
id=sl_svn119_1390

><td class="source">              console.childNodes.length &gt; this.numScrollbackLines+y+h+incY) {<br></td></tr
><tr
id=sl_svn119_1391

><td class="source">            for (var i = -incY; i-- &gt; 0; ) {<br></td></tr
><tr
id=sl_svn119_1392

><td class="source">              this.insertBlankLine(this.numScrollbackLines + y + h + incY,<br></td></tr
><tr
id=sl_svn119_1393

><td class="source">                                   style);<br></td></tr
><tr
id=sl_svn119_1394

><td class="source">            }<br></td></tr
><tr
id=sl_svn119_1395

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_1396

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1397

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_1398

><td class="source">        // Scrolling down<br></td></tr
><tr
id=sl_svn119_1399

><td class="source">        for (var i = incY;<br></td></tr
><tr
id=sl_svn119_1400

><td class="source">             i-- &gt; 0 &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1401

><td class="source">             console.childNodes.length &gt; this.numScrollbackLines + y + h; ) {<br></td></tr
><tr
id=sl_svn119_1402

><td class="source">          console.removeChild(console.childNodes[this.numScrollbackLines+y+h]);<br></td></tr
><tr
id=sl_svn119_1403

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1404

><td class="source">        for (var i = incY; i--; ) {<br></td></tr
><tr
id=sl_svn119_1405

><td class="source">          this.insertBlankLine(this.numScrollbackLines + y, style);<br></td></tr
><tr
id=sl_svn119_1406

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1407

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1408

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_1409

><td class="source">      // Scrolling partial lines<br></td></tr
><tr
id=sl_svn119_1410

><td class="source">      if (incY &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_1411

><td class="source">        // Scrolling up or horizontally within a line<br></td></tr
><tr
id=sl_svn119_1412

><td class="source">        for (var i = y + this.numScrollbackLines;<br></td></tr
><tr
id=sl_svn119_1413

><td class="source">             i &lt; y + this.numScrollbackLines + h;<br></td></tr
><tr
id=sl_svn119_1414

><td class="source">             i++) {<br></td></tr
><tr
id=sl_svn119_1415

><td class="source">          this.copyLineSegment(x + incX, i + incY, x, i, w);<br></td></tr
><tr
id=sl_svn119_1416

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1417

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_1418

><td class="source">        // Scrolling down<br></td></tr
><tr
id=sl_svn119_1419

><td class="source">        for (var i = y + this.numScrollbackLines + h;<br></td></tr
><tr
id=sl_svn119_1420

><td class="source">             i-- &gt; y + this.numScrollbackLines; ) {<br></td></tr
><tr
id=sl_svn119_1421

><td class="source">          this.copyLineSegment(x + incX, i + incY, x, i, w);<br></td></tr
><tr
id=sl_svn119_1422

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1423

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1424

><td class="source"><br></td></tr
><tr
id=sl_svn119_1425

><td class="source">      // Clear blank regions<br></td></tr
><tr
id=sl_svn119_1426

><td class="source">      if (incX &gt; 0) {<br></td></tr
><tr
id=sl_svn119_1427

><td class="source">        this.clearRegion(x, y, incX, h, style);<br></td></tr
><tr
id=sl_svn119_1428

><td class="source">      } else if (incX &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1429

><td class="source">        this.clearRegion(x + w + incX, y, -incX, h, style);<br></td></tr
><tr
id=sl_svn119_1430

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1431

><td class="source">      if (incY &gt; 0) {<br></td></tr
><tr
id=sl_svn119_1432

><td class="source">        this.clearRegion(x, y, w, incY, style);<br></td></tr
><tr
id=sl_svn119_1433

><td class="source">      } else if (incY &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1434

><td class="source">        this.clearRegion(x, y + h + incY, w, -incY, style);<br></td></tr
><tr
id=sl_svn119_1435

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1436

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1437

><td class="source"><br></td></tr
><tr
id=sl_svn119_1438

><td class="source">    // Reset scroll position<br></td></tr
><tr
id=sl_svn119_1439

><td class="source">    this.scrollable.scrollTop = (this.numScrollbackLines-scrollPos) *<br></td></tr
><tr
id=sl_svn119_1440

><td class="source">                                this.cursorHeight + 1;<br></td></tr
><tr
id=sl_svn119_1441

><td class="source"><br></td></tr
><tr
id=sl_svn119_1442

><td class="source">    // Move cursor back to its original position<br></td></tr
><tr
id=sl_svn119_1443

><td class="source">    hidden ? this.showCursor(cx, cy) : this.putString(cx, cy, &#39;&#39;, undefined);<br></td></tr
><tr
id=sl_svn119_1444

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1445

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1446

><td class="source"><br></td></tr
><tr
id=sl_svn119_1447

><td class="source">VT100.prototype.copy = function(selection) {<br></td></tr
><tr
id=sl_svn119_1448

><td class="source">  if (selection == undefined) {<br></td></tr
><tr
id=sl_svn119_1449

><td class="source">    selection                = this.selection();<br></td></tr
><tr
id=sl_svn119_1450

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1451

><td class="source">  this.internalClipboard     = undefined;<br></td></tr
><tr
id=sl_svn119_1452

><td class="source">  if (selection.length) {<br></td></tr
><tr
id=sl_svn119_1453

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_1454

><td class="source">      // IE<br></td></tr
><tr
id=sl_svn119_1455

><td class="source">      this.cliphelper.value  = selection;<br></td></tr
><tr
id=sl_svn119_1456

><td class="source">      this.cliphelper.select();<br></td></tr
><tr
id=sl_svn119_1457

><td class="source">      this.cliphelper.createTextRange().execCommand(&#39;copy&#39;);<br></td></tr
><tr
id=sl_svn119_1458

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_1459

><td class="source">      this.internalClipboard = selection;<br></td></tr
><tr
id=sl_svn119_1460

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1461

><td class="source">    this.cliphelper.value    = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1462

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1463

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1464

><td class="source"><br></td></tr
><tr
id=sl_svn119_1465

><td class="source">VT100.prototype.copyLast = function() {<br></td></tr
><tr
id=sl_svn119_1466

><td class="source">  // Opening the context menu can remove the selection. We try to prevent this<br></td></tr
><tr
id=sl_svn119_1467

><td class="source">  // from happening, but that is not possible for all browsers. So, instead,<br></td></tr
><tr
id=sl_svn119_1468

><td class="source">  // we compute the selection before showing the menu.<br></td></tr
><tr
id=sl_svn119_1469

><td class="source">  this.copy(this.lastSelection);<br></td></tr
><tr
id=sl_svn119_1470

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1471

><td class="source"><br></td></tr
><tr
id=sl_svn119_1472

><td class="source">VT100.prototype.pasteFnc = function() {<br></td></tr
><tr
id=sl_svn119_1473

><td class="source">  var clipboard     = undefined;<br></td></tr
><tr
id=sl_svn119_1474

><td class="source">  if (this.internalClipboard != undefined) {<br></td></tr
><tr
id=sl_svn119_1475

><td class="source">    clipboard       = this.internalClipboard;<br></td></tr
><tr
id=sl_svn119_1476

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1477

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_1478

><td class="source">      this.cliphelper.value = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1479

><td class="source">      this.cliphelper.createTextRange().execCommand(&#39;paste&#39;);<br></td></tr
><tr
id=sl_svn119_1480

><td class="source">      clipboard     = this.cliphelper.value;<br></td></tr
><tr
id=sl_svn119_1481

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_1482

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1483

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1484

><td class="source">  this.cliphelper.value = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1485

><td class="source">  if (clipboard &amp;&amp; this.menu.style.visibility == &#39;hidden&#39;) {<br></td></tr
><tr
id=sl_svn119_1486

><td class="source">    return function() {<br></td></tr
><tr
id=sl_svn119_1487

><td class="source">      this.keysPressed(&#39;&#39; + clipboard);<br></td></tr
><tr
id=sl_svn119_1488

><td class="source">    };<br></td></tr
><tr
id=sl_svn119_1489

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1490

><td class="source">    return undefined;<br></td></tr
><tr
id=sl_svn119_1491

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1492

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1493

><td class="source"><br></td></tr
><tr
id=sl_svn119_1494

><td class="source">VT100.prototype.toggleUTF = function() {<br></td></tr
><tr
id=sl_svn119_1495

><td class="source">  this.utfEnabled = !this.utfEnabled;<br></td></tr
><tr
id=sl_svn119_1496

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1497

><td class="source"><br></td></tr
><tr
id=sl_svn119_1498

><td class="source">VT100.prototype.toggleBell = function() {<br></td></tr
><tr
id=sl_svn119_1499

><td class="source">  this.visualBell = !this.visualBell;<br></td></tr
><tr
id=sl_svn119_1500

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1501

><td class="source"><br></td></tr
><tr
id=sl_svn119_1502

><td class="source">VT100.prototype.about = function() {<br></td></tr
><tr
id=sl_svn119_1503

><td class="source">  alert(&quot;VT100 Terminal Emulator &quot; + &quot;2.7 (revision 119)&quot; +<br></td></tr
><tr
id=sl_svn119_1504

><td class="source">        &quot;\nCopyright 2008-2009 by Markus Gutschke\n&quot; +<br></td></tr
><tr
id=sl_svn119_1505

><td class="source">        &quot;For more information check http://shellinabox.com&quot;);<br></td></tr
><tr
id=sl_svn119_1506

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1507

><td class="source"><br></td></tr
><tr
id=sl_svn119_1508

><td class="source">VT100.prototype.hideContextMenu = function() {<br></td></tr
><tr
id=sl_svn119_1509

><td class="source">  this.menu.style.visibility = &#39;hidden&#39;;<br></td></tr
><tr
id=sl_svn119_1510

><td class="source">  this.menu.style.top        = &#39;-100px&#39;;<br></td></tr
><tr
id=sl_svn119_1511

><td class="source">  this.menu.style.left       = &#39;-100px&#39;;<br></td></tr
><tr
id=sl_svn119_1512

><td class="source">  this.menu.style.width      = &#39;0px&#39;;<br></td></tr
><tr
id=sl_svn119_1513

><td class="source">  this.menu.style.height     = &#39;0px&#39;;<br></td></tr
><tr
id=sl_svn119_1514

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1515

><td class="source"><br></td></tr
><tr
id=sl_svn119_1516

><td class="source">VT100.prototype.extendContextMenu = function(entries, actions) {<br></td></tr
><tr
id=sl_svn119_1517

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1518

><td class="source"><br></td></tr
><tr
id=sl_svn119_1519

><td class="source">VT100.prototype.showContextMenu = function(x, y) {<br></td></tr
><tr
id=sl_svn119_1520

><td class="source">  this.menu.innerHTML         =<br></td></tr
><tr
id=sl_svn119_1521

><td class="source">    &#39;&lt;table class=&quot;popup&quot; &#39; +<br></td></tr
><tr
id=sl_svn119_1522

><td class="source">           &#39;cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1523

><td class="source">      &#39;&lt;tr&gt;&lt;td&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1524

><td class="source">        &#39;&lt;ul id=&quot;menuentries&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1525

><td class="source">          &#39;&lt;li id=&quot;beginclipboard&quot;&gt;Copy&lt;/li&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1526

><td class="source">          &#39;&lt;li id=&quot;endclipboard&quot;&gt;Paste&lt;/li&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1527

><td class="source">          &#39;&lt;hr /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1528

><td class="source">          &#39;&lt;li id=&quot;reset&quot;&gt;Reset&lt;/li&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1529

><td class="source">          &#39;&lt;hr /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1530

><td class="source">          &#39;&lt;li id=&quot;beginconfig&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1531

><td class="source">             (this.utfEnabled ? &#39;&amp;#10004; &#39; : &#39;&#39;) + &#39;Unicode&lt;/li&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1532

><td class="source">          &#39;&lt;li id=&quot;endconfig&quot;&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1533

><td class="source">             (this.visualBell ? &#39;&amp;#10004; &#39; : &#39;&#39;) + &#39;Visual Bell&lt;/li&gt;&#39;+<br></td></tr
><tr
id=sl_svn119_1534

><td class="source">          &#39;&lt;hr /&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1535

><td class="source">          &#39;&lt;li id=&quot;about&quot;&gt;About...&lt;/li&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1536

><td class="source">        &#39;&lt;/ul&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1537

><td class="source">      &#39;&lt;/td&gt;&lt;/tr&gt;&#39; +<br></td></tr
><tr
id=sl_svn119_1538

><td class="source">    &#39;&lt;/table&gt;&#39;;<br></td></tr
><tr
id=sl_svn119_1539

><td class="source"><br></td></tr
><tr
id=sl_svn119_1540

><td class="source">  var popup                   = this.menu.firstChild;<br></td></tr
><tr
id=sl_svn119_1541

><td class="source">  var menuentries             = this.getChildById(popup, &#39;menuentries&#39;);<br></td></tr
><tr
id=sl_svn119_1542

><td class="source"><br></td></tr
><tr
id=sl_svn119_1543

><td class="source">  // Determine menu entries that should be disabled<br></td></tr
><tr
id=sl_svn119_1544

><td class="source">  this.lastSelection          = this.selection();<br></td></tr
><tr
id=sl_svn119_1545

><td class="source">  if (!this.lastSelection.length) {<br></td></tr
><tr
id=sl_svn119_1546

><td class="source">    menuentries.firstChild.className<br></td></tr
><tr
id=sl_svn119_1547

><td class="source">                              = &#39;disabled&#39;;<br></td></tr
><tr
id=sl_svn119_1548

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1549

><td class="source">  var p                       = this.pasteFnc();<br></td></tr
><tr
id=sl_svn119_1550

><td class="source">  if (!p) {<br></td></tr
><tr
id=sl_svn119_1551

><td class="source">    menuentries.childNodes[1].className<br></td></tr
><tr
id=sl_svn119_1552

><td class="source">                              = &#39;disabled&#39;;<br></td></tr
><tr
id=sl_svn119_1553

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1554

><td class="source">  var actions                 = [ this.copyLast, p, this.reset,<br></td></tr
><tr
id=sl_svn119_1555

><td class="source">                                  this.toggleUTF, this.toggleBell,<br></td></tr
><tr
id=sl_svn119_1556

><td class="source">                                  this.about ];<br></td></tr
><tr
id=sl_svn119_1557

><td class="source"><br></td></tr
><tr
id=sl_svn119_1558

><td class="source">  // Allow subclasses to dynamically add entries to the context menu<br></td></tr
><tr
id=sl_svn119_1559

><td class="source">  this.extendContextMenu(menuentries, actions);<br></td></tr
><tr
id=sl_svn119_1560

><td class="source"><br></td></tr
><tr
id=sl_svn119_1561

><td class="source">  // Hook up event listeners<br></td></tr
><tr
id=sl_svn119_1562

><td class="source">  for (var node = menuentries.firstChild, i = 0; node;<br></td></tr
><tr
id=sl_svn119_1563

><td class="source">       node = node.nextSibling) {<br></td></tr
><tr
id=sl_svn119_1564

><td class="source">    if (node.tagName == &#39;LI&#39;) {<br></td></tr
><tr
id=sl_svn119_1565

><td class="source">      if (node.className != &#39;disabled&#39;) {<br></td></tr
><tr
id=sl_svn119_1566

><td class="source">        this.addListener(node, &#39;mouseover&#39;,<br></td></tr
><tr
id=sl_svn119_1567

><td class="source">                         function(vt100, node) {<br></td></tr
><tr
id=sl_svn119_1568

><td class="source">                           return function() {<br></td></tr
><tr
id=sl_svn119_1569

><td class="source">                             node.className = &#39;hover&#39;;<br></td></tr
><tr
id=sl_svn119_1570

><td class="source">                           }<br></td></tr
><tr
id=sl_svn119_1571

><td class="source">                         }(this, node));<br></td></tr
><tr
id=sl_svn119_1572

><td class="source">        this.addListener(node, &#39;mouseout&#39;,<br></td></tr
><tr
id=sl_svn119_1573

><td class="source">                         function(vt100, node) {<br></td></tr
><tr
id=sl_svn119_1574

><td class="source">                           return function() {<br></td></tr
><tr
id=sl_svn119_1575

><td class="source">                             node.className = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1576

><td class="source">                           }<br></td></tr
><tr
id=sl_svn119_1577

><td class="source">                         }(this, node));<br></td></tr
><tr
id=sl_svn119_1578

><td class="source">        this.addListener(node, &#39;mousedown&#39;,<br></td></tr
><tr
id=sl_svn119_1579

><td class="source">                         function(vt100, action) {<br></td></tr
><tr
id=sl_svn119_1580

><td class="source">                           return function(event) {<br></td></tr
><tr
id=sl_svn119_1581

><td class="source">                             vt100.hideContextMenu();<br></td></tr
><tr
id=sl_svn119_1582

><td class="source">                             action.call(vt100);<br></td></tr
><tr
id=sl_svn119_1583

><td class="source">                             return vt100.cancelEvent(event || window.event);<br></td></tr
><tr
id=sl_svn119_1584

><td class="source">                           }<br></td></tr
><tr
id=sl_svn119_1585

><td class="source">                         }(this, actions[i]));<br></td></tr
><tr
id=sl_svn119_1586

><td class="source">        this.addListener(node, &#39;mouseup&#39;,<br></td></tr
><tr
id=sl_svn119_1587

><td class="source">                         function(vt100) {<br></td></tr
><tr
id=sl_svn119_1588

><td class="source">                           return function(event) {<br></td></tr
><tr
id=sl_svn119_1589

><td class="source">                             return vt100.cancelEvent(event || window.event);<br></td></tr
><tr
id=sl_svn119_1590

><td class="source">                           }<br></td></tr
><tr
id=sl_svn119_1591

><td class="source">                         }(this));<br></td></tr
><tr
id=sl_svn119_1592

><td class="source">        this.addListener(node, &#39;mouseclick&#39;,<br></td></tr
><tr
id=sl_svn119_1593

><td class="source">                         function(vt100) {<br></td></tr
><tr
id=sl_svn119_1594

><td class="source">                           return function(event) {<br></td></tr
><tr
id=sl_svn119_1595

><td class="source">                             return vt100.cancelEvent(event || window.event);<br></td></tr
><tr
id=sl_svn119_1596

><td class="source">                           }<br></td></tr
><tr
id=sl_svn119_1597

><td class="source">                         }());<br></td></tr
><tr
id=sl_svn119_1598

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1599

><td class="source">      i++;<br></td></tr
><tr
id=sl_svn119_1600

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1601

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1602

><td class="source"><br></td></tr
><tr
id=sl_svn119_1603

><td class="source">  // Position menu next to the mouse pointer<br></td></tr
><tr
id=sl_svn119_1604

><td class="source">  if (x + popup.clientWidth &gt; this.container.offsetWidth) {<br></td></tr
><tr
id=sl_svn119_1605

><td class="source">    x                         = this.container.offsetWidth - popup.clientWidth;<br></td></tr
><tr
id=sl_svn119_1606

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1607

><td class="source">  if (x &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1608

><td class="source">    x                         = 0;<br></td></tr
><tr
id=sl_svn119_1609

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1610

><td class="source">  if (y + popup.clientHeight &gt; this.container.offsetHeight) {<br></td></tr
><tr
id=sl_svn119_1611

><td class="source">    y                         = this.container.offsetHeight-popup.clientHeight;<br></td></tr
><tr
id=sl_svn119_1612

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1613

><td class="source">  if (y &lt; 0) {<br></td></tr
><tr
id=sl_svn119_1614

><td class="source">    y                         = 0;<br></td></tr
><tr
id=sl_svn119_1615

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1616

><td class="source">  popup.style.left            = x + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1617

><td class="source">  popup.style.top             = y + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1618

><td class="source"><br></td></tr
><tr
id=sl_svn119_1619

><td class="source">  // Block all other interactions with the terminal emulator<br></td></tr
><tr
id=sl_svn119_1620

><td class="source">  this.menu.style.left        = &#39;0px&#39;;<br></td></tr
><tr
id=sl_svn119_1621

><td class="source">  this.menu.style.top         = &#39;0px&#39;;<br></td></tr
><tr
id=sl_svn119_1622

><td class="source">  this.menu.style.width       =  this.container.offsetWidth  + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1623

><td class="source">  this.menu.style.height      =  this.container.offsetHeight + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn119_1624

><td class="source">  this.addListener(this.menu, &#39;click&#39;, function(vt100) {<br></td></tr
><tr
id=sl_svn119_1625

><td class="source">                                         return function() {<br></td></tr
><tr
id=sl_svn119_1626

><td class="source">                                           vt100.hideContextMenu();<br></td></tr
><tr
id=sl_svn119_1627

><td class="source">                                         }<br></td></tr
><tr
id=sl_svn119_1628

><td class="source">                                       }(this));<br></td></tr
><tr
id=sl_svn119_1629

><td class="source"><br></td></tr
><tr
id=sl_svn119_1630

><td class="source">  // Show the menu<br></td></tr
><tr
id=sl_svn119_1631

><td class="source">  this.menu.style.visibility  = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1632

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1633

><td class="source"><br></td></tr
><tr
id=sl_svn119_1634

><td class="source">VT100.prototype.keysPressed = function(ch) {<br></td></tr
><tr
id=sl_svn119_1635

><td class="source">  for (var i = 0; i &lt; ch.length; i++) {<br></td></tr
><tr
id=sl_svn119_1636

><td class="source">    var c = ch.charCodeAt(i);<br></td></tr
><tr
id=sl_svn119_1637

><td class="source">    this.vt100(c &gt;= 7 &amp;&amp; c &lt;= 15 ||<br></td></tr
><tr
id=sl_svn119_1638

><td class="source">               c == 24 || c == 26 || c == 27 || c &gt;= 32<br></td></tr
><tr
id=sl_svn119_1639

><td class="source">               ? String.fromCharCode(c) : &#39;&lt;&#39; + c + &#39;&gt;&#39;);<br></td></tr
><tr
id=sl_svn119_1640

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1641

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1642

><td class="source"><br></td></tr
><tr
id=sl_svn119_1643

><td class="source">VT100.prototype.handleKey = function(event) {<br></td></tr
><tr
id=sl_svn119_1644

><td class="source">  var ch, key;<br></td></tr
><tr
id=sl_svn119_1645

><td class="source">  if (typeof event.charCode != &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn119_1646

><td class="source">    // non-IE keypress events have a translated charCode value. Also, our<br></td></tr
><tr
id=sl_svn119_1647

><td class="source">    // fake events generated when receiving keydown events include this data<br></td></tr
><tr
id=sl_svn119_1648

><td class="source">    // on all browsers.<br></td></tr
><tr
id=sl_svn119_1649

><td class="source">    ch                                = event.charCode;<br></td></tr
><tr
id=sl_svn119_1650

><td class="source">    key                               = event.keyCode;<br></td></tr
><tr
id=sl_svn119_1651

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1652

><td class="source">    // When sending a keypress event, IE includes the translated character<br></td></tr
><tr
id=sl_svn119_1653

><td class="source">    // code in the keyCode field.<br></td></tr
><tr
id=sl_svn119_1654

><td class="source">    ch                                = event.keyCode;<br></td></tr
><tr
id=sl_svn119_1655

><td class="source">    key                               = undefined;<br></td></tr
><tr
id=sl_svn119_1656

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1657

><td class="source"><br></td></tr
><tr
id=sl_svn119_1658

><td class="source">  // Apply modifier keys (ctrl and shift)<br></td></tr
><tr
id=sl_svn119_1659

><td class="source">  if (ch) {<br></td></tr
><tr
id=sl_svn119_1660

><td class="source">    key                               = undefined;<br></td></tr
><tr
id=sl_svn119_1661

><td class="source">    if (event.ctrlKey) {<br></td></tr
><tr
id=sl_svn119_1662

><td class="source">      if (ch &gt;= 32 &amp;&amp; ch &lt;= 127) {<br></td></tr
><tr
id=sl_svn119_1663

><td class="source">        ch                           &amp;= 0x1F;<br></td></tr
><tr
id=sl_svn119_1664

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1665

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_1666

><td class="source">      if (event.shiftKey) {<br></td></tr
><tr
id=sl_svn119_1667

><td class="source">        if (ch &gt;= 97 &amp;&amp; ch &lt;= 122) {<br></td></tr
><tr
id=sl_svn119_1668

><td class="source">          ch                         -= 32;<br></td></tr
><tr
id=sl_svn119_1669

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1670

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_1671

><td class="source">        if (ch &gt;= 65 &amp;&amp; ch &lt;= 90) {<br></td></tr
><tr
id=sl_svn119_1672

><td class="source">          ch                         += 32;<br></td></tr
><tr
id=sl_svn119_1673

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_1674

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1675

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1676

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1677

><td class="source">    ch                                = undefined;<br></td></tr
><tr
id=sl_svn119_1678

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1679

><td class="source"><br></td></tr
><tr
id=sl_svn119_1680

><td class="source">  // By this point, &quot;ch&quot; is either defined and contains the character code, or<br></td></tr
><tr
id=sl_svn119_1681

><td class="source">  // it is undefined and &quot;key&quot; defines the code of a function key <br></td></tr
><tr
id=sl_svn119_1682

><td class="source">  if (ch != undefined) {<br></td></tr
><tr
id=sl_svn119_1683

><td class="source">    ch                                = String.fromCharCode(ch);<br></td></tr
><tr
id=sl_svn119_1684

><td class="source">    this.scrollable.scrollTop         = this.numScrollbackLines *<br></td></tr
><tr
id=sl_svn119_1685

><td class="source">                                        this.cursorHeight + 1;<br></td></tr
><tr
id=sl_svn119_1686

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1687

><td class="source">    if ((event.altKey || event.metaKey) &amp;&amp; !event.shiftKey &amp;&amp; !event.ctrlKey) {<br></td></tr
><tr
id=sl_svn119_1688

><td class="source">      // Many programs have difficulties dealing with parametrized escape<br></td></tr
><tr
id=sl_svn119_1689

><td class="source">      // sequences for function keys. Thus, if ALT is the only modifier<br></td></tr
><tr
id=sl_svn119_1690

><td class="source">      // key, return Emacs-style keycodes for commonly used keys.<br></td></tr
><tr
id=sl_svn119_1691

><td class="source">      switch (key) {<br></td></tr
><tr
id=sl_svn119_1692

><td class="source">      case  33: /* Page Up      */ ch = &#39;\u001B&lt;&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1693

><td class="source">      case  34: /* Page Down    */ ch = &#39;\u001B&gt;&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1694

><td class="source">      case  37: /* Left         */ ch = &#39;\u001Bb&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1695

><td class="source">      case  38: /* Up           */ ch = &#39;\u001Bp&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1696

><td class="source">      case  39: /* Right        */ ch = &#39;\u001Bf&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1697

><td class="source">      case  40: /* Down         */ ch = &#39;\u001Bn&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1698

><td class="source">      case  46: /* Delete       */ ch = &#39;\u001Bd&#39;;     break;<br></td></tr
><tr
id=sl_svn119_1699

><td class="source">      default:                                         break;<br></td></tr
><tr
id=sl_svn119_1700

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1701

><td class="source">    } else if (event.shiftKey &amp;&amp; !event.ctrlKey &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1702

><td class="source">               !event.altKey &amp;&amp; !event.metaKey) {<br></td></tr
><tr
id=sl_svn119_1703

><td class="source">      switch (key) {<br></td></tr
><tr
id=sl_svn119_1704

><td class="source">      case  33: /* Page Up      */ this.scrollBack();  return;<br></td></tr
><tr
id=sl_svn119_1705

><td class="source">      case  34: /* Page Down    */ this.scrollFore();  return;<br></td></tr
><tr
id=sl_svn119_1706

><td class="source">      default:                                         break;<br></td></tr
><tr
id=sl_svn119_1707

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1708

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1709

><td class="source">    if (ch == undefined) {<br></td></tr
><tr
id=sl_svn119_1710

><td class="source">      switch (key) {<br></td></tr
><tr
id=sl_svn119_1711

><td class="source">      case   8: /* Backspace    */ ch = &#39;\u007f&#39;;      break;<br></td></tr
><tr
id=sl_svn119_1712

><td class="source">      case   9: /* Tab          */ ch = &#39;\u0009&#39;;      break;<br></td></tr
><tr
id=sl_svn119_1713

><td class="source">      case  10: /* Return       */ ch = &#39;\u000A&#39;;      break;<br></td></tr
><tr
id=sl_svn119_1714

><td class="source">      case  13: /* Enter        */ ch = this.crLfMode ?<br></td></tr
><tr
id=sl_svn119_1715

><td class="source">                                        &#39;\r\n&#39; : &#39;\r&#39;; break;<br></td></tr
><tr
id=sl_svn119_1716

><td class="source">      case  16: /* Shift        */                     return;<br></td></tr
><tr
id=sl_svn119_1717

><td class="source">      case  17: /* Ctrl         */                     return;<br></td></tr
><tr
id=sl_svn119_1718

><td class="source">      case  18: /* Alt          */                     return;<br></td></tr
><tr
id=sl_svn119_1719

><td class="source">      case  19: /* Break        */                     return;<br></td></tr
><tr
id=sl_svn119_1720

><td class="source">      case  20: /* Caps Lock    */                     return;<br></td></tr
><tr
id=sl_svn119_1721

><td class="source">      case  27: /* Escape       */ ch = &#39;\u001B&#39;;      break;<br></td></tr
><tr
id=sl_svn119_1722

><td class="source">      case  33: /* Page Up      */ ch = &#39;\u001B[5~&#39;;   break;<br></td></tr
><tr
id=sl_svn119_1723

><td class="source">      case  34: /* Page Down    */ ch = &#39;\u001B[6~&#39;;   break;<br></td></tr
><tr
id=sl_svn119_1724

><td class="source">      case  35: /* End          */ ch = &#39;\u001BOF&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1725

><td class="source">      case  36: /* Home         */ ch = &#39;\u001BOH&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1726

><td class="source">      case  37: /* Left         */ ch = this.cursorKeyMode ?<br></td></tr
><tr
id=sl_svn119_1727

><td class="source">                             &#39;\u001BOD&#39; : &#39;\u001B[D&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1728

><td class="source">      case  38: /* Up           */ ch = this.cursorKeyMode ?<br></td></tr
><tr
id=sl_svn119_1729

><td class="source">                             &#39;\u001BOA&#39; : &#39;\u001B[A&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1730

><td class="source">      case  39: /* Right        */ ch = this.cursorKeyMode ?<br></td></tr
><tr
id=sl_svn119_1731

><td class="source">                             &#39;\u001BOC&#39; : &#39;\u001B[C&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1732

><td class="source">      case  40: /* Down         */ ch = this.cursorKeyMode ?<br></td></tr
><tr
id=sl_svn119_1733

><td class="source">                             &#39;\u001BOB&#39; : &#39;\u001B[B&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1734

><td class="source">      case  45: /* Insert       */ ch = &#39;\u001B[2~&#39;;   break;<br></td></tr
><tr
id=sl_svn119_1735

><td class="source">      case  46: /* Delete       */ ch = &#39;\u001B[3~&#39;;   break;<br></td></tr
><tr
id=sl_svn119_1736

><td class="source">      case  91: /* Left Window  */                     return;<br></td></tr
><tr
id=sl_svn119_1737

><td class="source">      case  92: /* Right Window */                     return;<br></td></tr
><tr
id=sl_svn119_1738

><td class="source">      case  93: /* Select       */                     return;<br></td></tr
><tr
id=sl_svn119_1739

><td class="source">      case  96: /* 0            */ ch = &#39;0&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1740

><td class="source">      case  97: /* 1            */ ch = &#39;1&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1741

><td class="source">      case  98: /* 2            */ ch = &#39;2&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1742

><td class="source">      case  99: /* 3            */ ch = &#39;3&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1743

><td class="source">      case 100: /* 4            */ ch = &#39;4&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1744

><td class="source">      case 101: /* 5            */ ch = &#39;5&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1745

><td class="source">      case 102: /* 6            */ ch = &#39;6&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1746

><td class="source">      case 103: /* 7            */ ch = &#39;7&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1747

><td class="source">      case 104: /* 8            */ ch = &#39;8&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1748

><td class="source">      case 105: /* 9            */ ch = &#39;9&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1749

><td class="source">      case 106: /* *            */ ch = &#39;*&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1750

><td class="source">      case 107: /* +            */ ch = &#39;+&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1751

><td class="source">      case 109: /* -            */ ch = &#39;-&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1752

><td class="source">      case 110: /* .            */ ch = &#39;.&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1753

><td class="source">      case 111: /* /            */ ch = &#39;/&#39;;           break;<br></td></tr
><tr
id=sl_svn119_1754

><td class="source">      case 112: /* F1           */ ch = &#39;\u001BOP&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1755

><td class="source">      case 113: /* F2           */ ch = &#39;\u001BOQ&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1756

><td class="source">      case 114: /* F3           */ ch = &#39;\u001BOR&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1757

><td class="source">      case 115: /* F4           */ ch = &#39;\u001BOS&#39;;    break;<br></td></tr
><tr
id=sl_svn119_1758

><td class="source">      case 116: /* F5           */ ch = &#39;\u001B[15~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1759

><td class="source">      case 117: /* F6           */ ch = &#39;\u001B[17~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1760

><td class="source">      case 118: /* F7           */ ch = &#39;\u001B[18~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1761

><td class="source">      case 119: /* F8           */ ch = &#39;\u001B[19~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1762

><td class="source">      case 120: /* F9           */ ch = &#39;\u001B[20~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1763

><td class="source">      case 121: /* F10          */ ch = &#39;\u001B[21~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1764

><td class="source">      case 122: /* F11          */ ch = &#39;\u001B[23~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1765

><td class="source">      case 123: /* F12          */ ch = &#39;\u001B[24~&#39;;  break;<br></td></tr
><tr
id=sl_svn119_1766

><td class="source">      case 144: /* Num Lock     */                     return;<br></td></tr
><tr
id=sl_svn119_1767

><td class="source">      case 145: /* Scroll Lock  */                     return;<br></td></tr
><tr
id=sl_svn119_1768

><td class="source">      default:                                         return;<br></td></tr
><tr
id=sl_svn119_1769

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1770

><td class="source">      this.scrollable.scrollTop       = this.numScrollbackLines *<br></td></tr
><tr
id=sl_svn119_1771

><td class="source">                                        this.cursorHeight + 1;<br></td></tr
><tr
id=sl_svn119_1772

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1773

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1774

><td class="source"><br></td></tr
><tr
id=sl_svn119_1775

><td class="source">  // &quot;ch&quot; now contains the sequence of keycodes to send. But we might still<br></td></tr
><tr
id=sl_svn119_1776

><td class="source">  // have to apply the effects of modifier keys.<br></td></tr
><tr
id=sl_svn119_1777

><td class="source">  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {<br></td></tr
><tr
id=sl_svn119_1778

><td class="source">    var start, digit, part1, part2;<br></td></tr
><tr
id=sl_svn119_1779

><td class="source">    if ((start = ch.substr(0, 2)) == &#39;\u001B[&#39;) {<br></td></tr
><tr
id=sl_svn119_1780

><td class="source">      for (part1 = start;<br></td></tr
><tr
id=sl_svn119_1781

><td class="source">           part1.length &lt; ch.length &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1782

><td class="source">             (digit = ch.charCodeAt(part1.length)) &gt;= 48 &amp;&amp; digit &lt;= 57; ) {<br></td></tr
><tr
id=sl_svn119_1783

><td class="source">        part1                         = ch.substr(0, part1.length + 1);<br></td></tr
><tr
id=sl_svn119_1784

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1785

><td class="source">      part2                           = ch.substr(part1.length);<br></td></tr
><tr
id=sl_svn119_1786

><td class="source">      if (part1.length &gt; 2) {<br></td></tr
><tr
id=sl_svn119_1787

><td class="source">        part1                        += &#39;;&#39;;<br></td></tr
><tr
id=sl_svn119_1788

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1789

><td class="source">    } else if (start == &#39;\u001BO&#39;) {<br></td></tr
><tr
id=sl_svn119_1790

><td class="source">      part1                           = start;<br></td></tr
><tr
id=sl_svn119_1791

><td class="source">      part2                           = ch.substr(2);<br></td></tr
><tr
id=sl_svn119_1792

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1793

><td class="source">    if (part1 != undefined) {<br></td></tr
><tr
id=sl_svn119_1794

><td class="source">      ch                              = part1                                 +<br></td></tr
><tr
id=sl_svn119_1795

><td class="source">                                       ((event.shiftKey             ? 1 : 0)  +<br></td></tr
><tr
id=sl_svn119_1796

><td class="source">                                        (event.altKey|event.metaKey ? 2 : 0)  +<br></td></tr
><tr
id=sl_svn119_1797

><td class="source">                                        (event.ctrlKey              ? 4 : 0)) +<br></td></tr
><tr
id=sl_svn119_1798

><td class="source">                                        part2;<br></td></tr
><tr
id=sl_svn119_1799

><td class="source">    } else if (ch.length == 1 &amp;&amp; (event.altKey || event.metaKey)) {<br></td></tr
><tr
id=sl_svn119_1800

><td class="source">      ch                              = &#39;\u001B&#39; + ch;<br></td></tr
><tr
id=sl_svn119_1801

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1802

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1803

><td class="source"><br></td></tr
><tr
id=sl_svn119_1804

><td class="source">  if (this.menu.style.visibility == &#39;hidden&#39;) {<br></td></tr
><tr
id=sl_svn119_1805

><td class="source">    this.keysPressed(ch);<br></td></tr
><tr
id=sl_svn119_1806

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1807

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1808

><td class="source"><br></td></tr
><tr
id=sl_svn119_1809

><td class="source">VT100.prototype.inspect = function(o, d) {<br></td></tr
><tr
id=sl_svn119_1810

><td class="source">  if (d == undefined) {<br></td></tr
><tr
id=sl_svn119_1811

><td class="source">    d = 0;<br></td></tr
><tr
id=sl_svn119_1812

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1813

><td class="source">  if (typeof o == &#39;object&#39; &amp;&amp; ++d &lt; 2) {<br></td></tr
><tr
id=sl_svn119_1814

><td class="source">    this.vt100(&#39;[\r\n&#39;);<br></td></tr
><tr
id=sl_svn119_1815

><td class="source">    for (i in o) {<br></td></tr
><tr
id=sl_svn119_1816

><td class="source">      this.vt100(this.spaces(d * 2) + i + &#39; -&gt; &#39;);<br></td></tr
><tr
id=sl_svn119_1817

><td class="source">      try {<br></td></tr
><tr
id=sl_svn119_1818

><td class="source">        this.inspect(o[i], d);<br></td></tr
><tr
id=sl_svn119_1819

><td class="source">      } catch (e) {<br></td></tr
><tr
id=sl_svn119_1820

><td class="source">        this.vt100(&#39;?&#39; + &#39;?&#39; + &#39;?\r\n&#39;);<br></td></tr
><tr
id=sl_svn119_1821

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1822

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1823

><td class="source">    this.vt100(&#39;]\r\n&#39;);<br></td></tr
><tr
id=sl_svn119_1824

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1825

><td class="source">    this.vt100((&#39;&#39; + o).replace(/\n/g, &#39; &#39;).replace(/ +/g,&#39; &#39;) + &#39;\r\n&#39;);<br></td></tr
><tr
id=sl_svn119_1826

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1827

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1828

><td class="source"><br></td></tr
><tr
id=sl_svn119_1829

><td class="source">VT100.prototype.checkComposedKeys = function(event) {<br></td></tr
><tr
id=sl_svn119_1830

><td class="source">  // Composed keys (at least on Linux) do not generate normal events.<br></td></tr
><tr
id=sl_svn119_1831

><td class="source">  // Instead, they get entered into the text field. We normally catch<br></td></tr
><tr
id=sl_svn119_1832

><td class="source">  // this on the next keyup event.<br></td></tr
><tr
id=sl_svn119_1833

><td class="source">  var s              = this.input.value;<br></td></tr
><tr
id=sl_svn119_1834

><td class="source">  if (s.length) {<br></td></tr
><tr
id=sl_svn119_1835

><td class="source">    this.input.value = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_1836

><td class="source">    if (this.menu.style.visibility == &#39;hidden&#39;) {<br></td></tr
><tr
id=sl_svn119_1837

><td class="source">      this.keysPressed(s);<br></td></tr
><tr
id=sl_svn119_1838

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1839

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1840

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1841

><td class="source"><br></td></tr
><tr
id=sl_svn119_1842

><td class="source">VT100.prototype.fixEvent = function(event) {<br></td></tr
><tr
id=sl_svn119_1843

><td class="source">  // Some browsers fail to translate keys, if both shift and alt/meta is<br></td></tr
><tr
id=sl_svn119_1844

><td class="source">  // pressed at the same time. We try to translate those cases, but that<br></td></tr
><tr
id=sl_svn119_1845

><td class="source">  // only works for US keyboard layouts.<br></td></tr
><tr
id=sl_svn119_1846

><td class="source">  if (event.shiftKey) {<br></td></tr
><tr
id=sl_svn119_1847

><td class="source">    var u                   = undefined;<br></td></tr
><tr
id=sl_svn119_1848

><td class="source">    var s                   = undefined;<br></td></tr
><tr
id=sl_svn119_1849

><td class="source">    switch (this.lastNormalKeyDownEvent.keyCode) {<br></td></tr
><tr
id=sl_svn119_1850

><td class="source">    case  39: /* &#39; -&gt; &quot; */ u = 39; s =  34; break;<br></td></tr
><tr
id=sl_svn119_1851

><td class="source">    case  44: /* , -&gt; &lt; */ u = 44; s =  60; break;<br></td></tr
><tr
id=sl_svn119_1852

><td class="source">    case  45: /* - -&gt; _ */ u = 45; s =  95; break;<br></td></tr
><tr
id=sl_svn119_1853

><td class="source">    case  46: /* . -&gt; &gt; */ u = 46; s =  62; break;<br></td></tr
><tr
id=sl_svn119_1854

><td class="source">    case  47: /* / -&gt; ? */ u = 47; s =  63; break;<br></td></tr
><tr
id=sl_svn119_1855

><td class="source"><br></td></tr
><tr
id=sl_svn119_1856

><td class="source">    case  48: /* 0 -&gt; ) */ u = 48; s =  41; break;<br></td></tr
><tr
id=sl_svn119_1857

><td class="source">    case  49: /* 1 -&gt; ! */ u = 49; s =  33; break;<br></td></tr
><tr
id=sl_svn119_1858

><td class="source">    case  50: /* 2 -&gt; @ */ u = 50; s =  64; break;<br></td></tr
><tr
id=sl_svn119_1859

><td class="source">    case  51: /* 3 -&gt; # */ u = 51; s =  35; break;<br></td></tr
><tr
id=sl_svn119_1860

><td class="source">    case  52: /* 4 -&gt; $ */ u = 52; s =  36; break;<br></td></tr
><tr
id=sl_svn119_1861

><td class="source">    case  53: /* 5 -&gt; % */ u = 53; s =  37; break;<br></td></tr
><tr
id=sl_svn119_1862

><td class="source">    case  54: /* 6 -&gt; ^ */ u = 54; s =  94; break;<br></td></tr
><tr
id=sl_svn119_1863

><td class="source">    case  55: /* 7 -&gt; &amp; */ u = 55; s =  38; break;<br></td></tr
><tr
id=sl_svn119_1864

><td class="source">    case  56: /* 8 -&gt; * */ u = 56; s =  42; break;<br></td></tr
><tr
id=sl_svn119_1865

><td class="source">    case  57: /* 9 -&gt; ( */ u = 57; s =  40; break;<br></td></tr
><tr
id=sl_svn119_1866

><td class="source"><br></td></tr
><tr
id=sl_svn119_1867

><td class="source">    case  59: /* ; -&gt; : */ u = 59; s =  58; break;<br></td></tr
><tr
id=sl_svn119_1868

><td class="source">    case  61: /* = -&gt; + */ u = 61; s =  43; break;<br></td></tr
><tr
id=sl_svn119_1869

><td class="source">    case  91: /* [ -&gt; { */ u = 91; s = 123; break;<br></td></tr
><tr
id=sl_svn119_1870

><td class="source">    case  92: /* \ -&gt; | */ u = 92; s = 124; break;<br></td></tr
><tr
id=sl_svn119_1871

><td class="source">    case  93: /* ] -&gt; } */ u = 93; s = 125; break; <br></td></tr
><tr
id=sl_svn119_1872

><td class="source">    case  96: /* ` -&gt; ~ */ u = 96; s = 126; break;<br></td></tr
><tr
id=sl_svn119_1873

><td class="source"><br></td></tr
><tr
id=sl_svn119_1874

><td class="source">    case 109: /* - -&gt; _ */ u = 45; s =  95; break;<br></td></tr
><tr
id=sl_svn119_1875

><td class="source">    case 111: /* / -&gt; ? */ u = 47; s =  63; break;<br></td></tr
><tr
id=sl_svn119_1876

><td class="source"><br></td></tr
><tr
id=sl_svn119_1877

><td class="source">    case 186: /* ; -&gt; : */ u = 59; s =  58; break;<br></td></tr
><tr
id=sl_svn119_1878

><td class="source">    case 187: /* = -&gt; + */ u = 61; s =  43; break;<br></td></tr
><tr
id=sl_svn119_1879

><td class="source">    case 188: /* , -&gt; &lt; */ u = 44; s =  60; break;<br></td></tr
><tr
id=sl_svn119_1880

><td class="source">    case 189: /* - -&gt; _ */ u = 45; s =  95; break;<br></td></tr
><tr
id=sl_svn119_1881

><td class="source">    case 190: /* . -&gt; &gt; */ u = 46; s =  62; break;<br></td></tr
><tr
id=sl_svn119_1882

><td class="source">    case 191: /* / -&gt; ? */ u = 47; s =  63; break;<br></td></tr
><tr
id=sl_svn119_1883

><td class="source">    case 192: /* ` -&gt; ~ */ u = 96; s = 126; break;<br></td></tr
><tr
id=sl_svn119_1884

><td class="source">    case 219: /* [ -&gt; { */ u = 91; s = 123; break;<br></td></tr
><tr
id=sl_svn119_1885

><td class="source">    case 220: /* \ -&gt; | */ u = 92; s = 124; break;<br></td></tr
><tr
id=sl_svn119_1886

><td class="source">    case 221: /* ] -&gt; } */ u = 93; s = 125; break; <br></td></tr
><tr
id=sl_svn119_1887

><td class="source">    case 222: /* &#39; -&gt; &quot; */ u = 39; s =  34; break;<br></td></tr
><tr
id=sl_svn119_1888

><td class="source">    default:                                break;<br></td></tr
><tr
id=sl_svn119_1889

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1890

><td class="source">    if (s &amp;&amp; (event.charCode == u || event.charCode == 0)) {<br></td></tr
><tr
id=sl_svn119_1891

><td class="source">      var fake              = [ ];<br></td></tr
><tr
id=sl_svn119_1892

><td class="source">      fake.charCode         = s;<br></td></tr
><tr
id=sl_svn119_1893

><td class="source">      fake.keyCode          = event.keyCode;<br></td></tr
><tr
id=sl_svn119_1894

><td class="source">      fake.ctrlKey          = event.ctrlKey;<br></td></tr
><tr
id=sl_svn119_1895

><td class="source">      fake.shiftKey         = event.shiftKey;<br></td></tr
><tr
id=sl_svn119_1896

><td class="source">      fake.altKey           = event.altKey;<br></td></tr
><tr
id=sl_svn119_1897

><td class="source">      fake.metaKey          = event.metaKey;<br></td></tr
><tr
id=sl_svn119_1898

><td class="source">      return fake;<br></td></tr
><tr
id=sl_svn119_1899

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1900

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1901

><td class="source">  return event;<br></td></tr
><tr
id=sl_svn119_1902

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1903

><td class="source"><br></td></tr
><tr
id=sl_svn119_1904

><td class="source">VT100.prototype.keyDown = function(event) {<br></td></tr
><tr
id=sl_svn119_1905

><td class="source">  this.checkComposedKeys(event);<br></td></tr
><tr
id=sl_svn119_1906

><td class="source">  this.lastKeyPressedEvent      = undefined;<br></td></tr
><tr
id=sl_svn119_1907

><td class="source">  this.lastKeyDownEvent         = undefined;<br></td></tr
><tr
id=sl_svn119_1908

><td class="source">  this.lastNormalKeyDownEvent   = event;<br></td></tr
><tr
id=sl_svn119_1909

><td class="source"><br></td></tr
><tr
id=sl_svn119_1910

><td class="source">  var asciiKey                  =<br></td></tr
><tr
id=sl_svn119_1911

><td class="source">    event.keyCode ==  32                         ||<br></td></tr
><tr
id=sl_svn119_1912

><td class="source">    event.keyCode &gt;=  48 &amp;&amp; event.keyCode &lt;=  57 ||<br></td></tr
><tr
id=sl_svn119_1913

><td class="source">    event.keyCode &gt;=  65 &amp;&amp; event.keyCode &lt;=  90;<br></td></tr
><tr
id=sl_svn119_1914

><td class="source">  var alphNumKey                =<br></td></tr
><tr
id=sl_svn119_1915

><td class="source">    asciiKey                                     ||<br></td></tr
><tr
id=sl_svn119_1916

><td class="source">    event.keyCode &gt;=  96 &amp;&amp; event.keyCode &lt;= 105;<br></td></tr
><tr
id=sl_svn119_1917

><td class="source">  var normalKey                 =<br></td></tr
><tr
id=sl_svn119_1918

><td class="source">    alphNumKey                                   ||<br></td></tr
><tr
id=sl_svn119_1919

><td class="source">    event.keyCode ==  59 || event.keyCode ==  61 ||<br></td></tr
><tr
id=sl_svn119_1920

><td class="source">    event.keyCode == 106 || event.keyCode == 107 ||<br></td></tr
><tr
id=sl_svn119_1921

><td class="source">    event.keyCode &gt;= 109 &amp;&amp; event.keyCode &lt;= 111 ||<br></td></tr
><tr
id=sl_svn119_1922

><td class="source">    event.keyCode &gt;= 186 &amp;&amp; event.keyCode &lt;= 192 ||<br></td></tr
><tr
id=sl_svn119_1923

><td class="source">    event.keyCode &gt;= 219 &amp;&amp; event.keyCode &lt;= 222 ||<br></td></tr
><tr
id=sl_svn119_1924

><td class="source">    event.keyCode == 252;<br></td></tr
><tr
id=sl_svn119_1925

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_1926

><td class="source">    if (navigator.appName == &#39;Konqueror&#39;) {<br></td></tr
><tr
id=sl_svn119_1927

><td class="source">      normalKey                |= event.keyCode &lt; 128;<br></td></tr
><tr
id=sl_svn119_1928

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1929

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_1930

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1931

><td class="source"><br></td></tr
><tr
id=sl_svn119_1932

><td class="source">  // We normally prefer to look at keypress events, as they perform the<br></td></tr
><tr
id=sl_svn119_1933

><td class="source">  // translation from keyCode to charCode. This is important, as the<br></td></tr
><tr
id=sl_svn119_1934

><td class="source">  // translation is locale-dependent.<br></td></tr
><tr
id=sl_svn119_1935

><td class="source">  // But for some keys, we must intercept them during the keydown event,<br></td></tr
><tr
id=sl_svn119_1936

><td class="source">  // as they would otherwise get interpreted by the browser.<br></td></tr
><tr
id=sl_svn119_1937

><td class="source">  // Even, when doing all of this, there are some keys that we can never<br></td></tr
><tr
id=sl_svn119_1938

><td class="source">  // intercept. This applies to some of the menu navigation keys in IE.<br></td></tr
><tr
id=sl_svn119_1939

><td class="source">  // In fact, we see them, but we cannot stop IE from seeing them, too.<br></td></tr
><tr
id=sl_svn119_1940

><td class="source">  if ((alphNumKey &amp;&amp; (event.ctrlKey || event.altKey || event.metaKey) &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1941

><td class="source">       !event.shiftKey) ||<br></td></tr
><tr
id=sl_svn119_1942

><td class="source">      this.catchModifiersEarly &amp;&amp; normalKey &amp;&amp; !alphNumKey &amp;&amp;<br></td></tr
><tr
id=sl_svn119_1943

><td class="source">      (event.ctrlKey || event.altKey || event.metaKey) ||<br></td></tr
><tr
id=sl_svn119_1944

><td class="source">      !normalKey) {<br></td></tr
><tr
id=sl_svn119_1945

><td class="source">    this.lastKeyDownEvent       = event;<br></td></tr
><tr
id=sl_svn119_1946

><td class="source">    var fake                    = [ ];<br></td></tr
><tr
id=sl_svn119_1947

><td class="source">    fake.ctrlKey                = event.ctrlKey;<br></td></tr
><tr
id=sl_svn119_1948

><td class="source">    fake.shiftKey               = event.shiftKey;<br></td></tr
><tr
id=sl_svn119_1949

><td class="source">    fake.altKey                 = event.altKey;<br></td></tr
><tr
id=sl_svn119_1950

><td class="source">    fake.metaKey                = event.metaKey;<br></td></tr
><tr
id=sl_svn119_1951

><td class="source">    if (asciiKey) {<br></td></tr
><tr
id=sl_svn119_1952

><td class="source">      fake.charCode             = event.keyCode;<br></td></tr
><tr
id=sl_svn119_1953

><td class="source">      fake.keyCode              = 0;<br></td></tr
><tr
id=sl_svn119_1954

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_1955

><td class="source">      fake.charCode             = 0;<br></td></tr
><tr
id=sl_svn119_1956

><td class="source">      fake.keyCode              = event.keyCode;<br></td></tr
><tr
id=sl_svn119_1957

><td class="source">      if (!alphNumKey &amp;&amp; event.shiftKey) {<br></td></tr
><tr
id=sl_svn119_1958

><td class="source">        fake                    = this.fixEvent(fake);<br></td></tr
><tr
id=sl_svn119_1959

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_1960

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1961

><td class="source"><br></td></tr
><tr
id=sl_svn119_1962

><td class="source">    this.handleKey(fake);<br></td></tr
><tr
id=sl_svn119_1963

><td class="source">    this.lastNormalKeyDownEvent = undefined;<br></td></tr
><tr
id=sl_svn119_1964

><td class="source"><br></td></tr
><tr
id=sl_svn119_1965

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_1966

><td class="source">      // For non-IE browsers<br></td></tr
><tr
id=sl_svn119_1967

><td class="source">      event.stopPropagation();<br></td></tr
><tr
id=sl_svn119_1968

><td class="source">      event.preventDefault();<br></td></tr
><tr
id=sl_svn119_1969

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_1970

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1971

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_1972

><td class="source">      // For IE<br></td></tr
><tr
id=sl_svn119_1973

><td class="source">      event.cancelBubble = true;<br></td></tr
><tr
id=sl_svn119_1974

><td class="source">      event.returnValue  = false;<br></td></tr
><tr
id=sl_svn119_1975

><td class="source">      event.keyCode      = 0;<br></td></tr
><tr
id=sl_svn119_1976

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_1977

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_1978

><td class="source"><br></td></tr
><tr
id=sl_svn119_1979

><td class="source">    return false;<br></td></tr
><tr
id=sl_svn119_1980

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1981

><td class="source">  return true;<br></td></tr
><tr
id=sl_svn119_1982

><td class="source">};<br></td></tr
><tr
id=sl_svn119_1983

><td class="source"><br></td></tr
><tr
id=sl_svn119_1984

><td class="source">VT100.prototype.keyPressed = function(event) {<br></td></tr
><tr
id=sl_svn119_1985

><td class="source">  if (this.lastKeyDownEvent) {<br></td></tr
><tr
id=sl_svn119_1986

><td class="source">    // If we already processed the key on keydown, do not process it<br></td></tr
><tr
id=sl_svn119_1987

><td class="source">    // again here. Ideally, the browser should not even have generated a<br></td></tr
><tr
id=sl_svn119_1988

><td class="source">    // keypress event in this case. But that does not appear to always work.<br></td></tr
><tr
id=sl_svn119_1989

><td class="source">    this.lastKeyDownEvent     = undefined;<br></td></tr
><tr
id=sl_svn119_1990

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_1991

><td class="source">    this.handleKey(event.altKey || event.metaKey<br></td></tr
><tr
id=sl_svn119_1992

><td class="source">                   ? this.fixEvent(event) : event);<br></td></tr
><tr
id=sl_svn119_1993

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_1994

><td class="source"><br></td></tr
><tr
id=sl_svn119_1995

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_1996

><td class="source">    // For non-IE browsers<br></td></tr
><tr
id=sl_svn119_1997

><td class="source">    event.preventDefault();<br></td></tr
><tr
id=sl_svn119_1998

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_1999

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2000

><td class="source"><br></td></tr
><tr
id=sl_svn119_2001

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_2002

><td class="source">    // For IE<br></td></tr
><tr
id=sl_svn119_2003

><td class="source">    event.cancelBubble = true;<br></td></tr
><tr
id=sl_svn119_2004

><td class="source">    event.returnValue  = false;<br></td></tr
><tr
id=sl_svn119_2005

><td class="source">    event.keyCode      = 0;<br></td></tr
><tr
id=sl_svn119_2006

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_2007

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2008

><td class="source"><br></td></tr
><tr
id=sl_svn119_2009

><td class="source">  this.lastNormalKeyDownEvent = undefined;<br></td></tr
><tr
id=sl_svn119_2010

><td class="source">  this.lastKeyPressedEvent    = event;<br></td></tr
><tr
id=sl_svn119_2011

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_2012

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2013

><td class="source"><br></td></tr
><tr
id=sl_svn119_2014

><td class="source">VT100.prototype.keyUp = function(event) {<br></td></tr
><tr
id=sl_svn119_2015

><td class="source">  if (this.lastKeyPressedEvent) {<br></td></tr
><tr
id=sl_svn119_2016

><td class="source">    // The compose key on Linux occasionally confuses the browser and keeps<br></td></tr
><tr
id=sl_svn119_2017

><td class="source">    // inserting bogus characters into the input field, even if just a regular<br></td></tr
><tr
id=sl_svn119_2018

><td class="source">    // key has been pressed. Detect this case and drop the bogus characters.<br></td></tr
><tr
id=sl_svn119_2019

><td class="source">    (event.target ||<br></td></tr
><tr
id=sl_svn119_2020

><td class="source">     event.srcElement).value      = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2021

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_2022

><td class="source">    // This is usually were we notice that a key has been composed and<br></td></tr
><tr
id=sl_svn119_2023

><td class="source">    // thus failed to generate normal events.<br></td></tr
><tr
id=sl_svn119_2024

><td class="source">    this.checkComposedKeys(event);<br></td></tr
><tr
id=sl_svn119_2025

><td class="source"><br></td></tr
><tr
id=sl_svn119_2026

><td class="source">    // Some browsers don&#39;t report keypress events if ctrl or alt is pressed<br></td></tr
><tr
id=sl_svn119_2027

><td class="source">    // for non-alphanumerical keys. Patch things up for now, but in the<br></td></tr
><tr
id=sl_svn119_2028

><td class="source">    // future we will catch these keys earlier (in the keydown handler).<br></td></tr
><tr
id=sl_svn119_2029

><td class="source">    if (this.lastNormalKeyDownEvent) {<br></td></tr
><tr
id=sl_svn119_2030

><td class="source">      this.catchModifiersEarly    = true;<br></td></tr
><tr
id=sl_svn119_2031

><td class="source">      var asciiKey                =<br></td></tr
><tr
id=sl_svn119_2032

><td class="source">        event.keyCode ==  32                         ||<br></td></tr
><tr
id=sl_svn119_2033

><td class="source">        event.keyCode &gt;=  48 &amp;&amp; event.keyCode &lt;=  57 ||<br></td></tr
><tr
id=sl_svn119_2034

><td class="source">        event.keyCode &gt;=  65 &amp;&amp; event.keyCode &lt;=  90;<br></td></tr
><tr
id=sl_svn119_2035

><td class="source">      var alphNumKey              =<br></td></tr
><tr
id=sl_svn119_2036

><td class="source">        asciiKey                                     ||<br></td></tr
><tr
id=sl_svn119_2037

><td class="source">        event.keyCode &gt;=  96 &amp;&amp; event.keyCode &lt;= 105;<br></td></tr
><tr
id=sl_svn119_2038

><td class="source">      var normalKey               =<br></td></tr
><tr
id=sl_svn119_2039

><td class="source">        alphNumKey                                   ||<br></td></tr
><tr
id=sl_svn119_2040

><td class="source">        event.keyCode ==  59 || event.keyCode ==  61 ||<br></td></tr
><tr
id=sl_svn119_2041

><td class="source">        event.keyCode == 106 || event.keyCode == 107 ||<br></td></tr
><tr
id=sl_svn119_2042

><td class="source">        event.keyCode &gt;= 109 &amp;&amp; event.keyCode &lt;= 111 ||<br></td></tr
><tr
id=sl_svn119_2043

><td class="source">        event.keyCode &gt;= 186 &amp;&amp; event.keyCode &lt;= 192 ||<br></td></tr
><tr
id=sl_svn119_2044

><td class="source">        event.keyCode &gt;= 219 &amp;&amp; event.keyCode &lt;= 222 ||<br></td></tr
><tr
id=sl_svn119_2045

><td class="source">        event.keyCode == 252;<br></td></tr
><tr
id=sl_svn119_2046

><td class="source">      var fake                    = [ ];<br></td></tr
><tr
id=sl_svn119_2047

><td class="source">      fake.ctrlKey                = event.ctrlKey;<br></td></tr
><tr
id=sl_svn119_2048

><td class="source">      fake.shiftKey               = event.shiftKey;<br></td></tr
><tr
id=sl_svn119_2049

><td class="source">      fake.altKey                 = event.altKey;<br></td></tr
><tr
id=sl_svn119_2050

><td class="source">      fake.metaKey                = event.metaKey;<br></td></tr
><tr
id=sl_svn119_2051

><td class="source">      if (asciiKey) {<br></td></tr
><tr
id=sl_svn119_2052

><td class="source">        fake.charCode             = event.keyCode;<br></td></tr
><tr
id=sl_svn119_2053

><td class="source">        fake.keyCode              = 0;<br></td></tr
><tr
id=sl_svn119_2054

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2055

><td class="source">        fake.charCode             = 0;<br></td></tr
><tr
id=sl_svn119_2056

><td class="source">        fake.keyCode              = event.keyCode;<br></td></tr
><tr
id=sl_svn119_2057

><td class="source">        if (!alphNumKey &amp;&amp; (event.ctrlKey || event.altKey || event.metaKey)) {<br></td></tr
><tr
id=sl_svn119_2058

><td class="source">          fake                    = this.fixEvent(fake);<br></td></tr
><tr
id=sl_svn119_2059

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2060

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2061

><td class="source">      this.lastNormalKeyDownEvent = undefined;<br></td></tr
><tr
id=sl_svn119_2062

><td class="source">      this.handleKey(fake);<br></td></tr
><tr
id=sl_svn119_2063

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2064

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2065

><td class="source"><br></td></tr
><tr
id=sl_svn119_2066

><td class="source">  try {<br></td></tr
><tr
id=sl_svn119_2067

><td class="source">    // For IE<br></td></tr
><tr
id=sl_svn119_2068

><td class="source">    event.cancelBubble            = true;<br></td></tr
><tr
id=sl_svn119_2069

><td class="source">    event.returnValue             = false;<br></td></tr
><tr
id=sl_svn119_2070

><td class="source">    event.keyCode                 = 0;<br></td></tr
><tr
id=sl_svn119_2071

><td class="source">  } catch (e) {<br></td></tr
><tr
id=sl_svn119_2072

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2073

><td class="source"><br></td></tr
><tr
id=sl_svn119_2074

><td class="source">  this.lastKeyDownEvent           = undefined;<br></td></tr
><tr
id=sl_svn119_2075

><td class="source">  this.lastKeyPressedEvent        = undefined;<br></td></tr
><tr
id=sl_svn119_2076

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn119_2077

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2078

><td class="source"><br></td></tr
><tr
id=sl_svn119_2079

><td class="source">VT100.prototype.animateCursor = function(inactive) {<br></td></tr
><tr
id=sl_svn119_2080

><td class="source">  if (!this.cursorInterval) {<br></td></tr
><tr
id=sl_svn119_2081

><td class="source">    this.cursorInterval     = setInterval(<br></td></tr
><tr
id=sl_svn119_2082

><td class="source">      function(vt100) {<br></td></tr
><tr
id=sl_svn119_2083

><td class="source">        return function() {<br></td></tr
><tr
id=sl_svn119_2084

><td class="source">          vt100.animateCursor();<br></td></tr
><tr
id=sl_svn119_2085

><td class="source"><br></td></tr
><tr
id=sl_svn119_2086

><td class="source">          // Use this opportunity to check whether the user entered a composed<br></td></tr
><tr
id=sl_svn119_2087

><td class="source">          // key, or whether somebody pasted text into the textfield.<br></td></tr
><tr
id=sl_svn119_2088

><td class="source">          vt100.checkComposedKeys();<br></td></tr
><tr
id=sl_svn119_2089

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2090

><td class="source">      }(this), 500);<br></td></tr
><tr
id=sl_svn119_2091

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2092

><td class="source">  if (inactive != undefined || this.cursor.className != &#39;inactive&#39;) {<br></td></tr
><tr
id=sl_svn119_2093

><td class="source">    if (inactive) {<br></td></tr
><tr
id=sl_svn119_2094

><td class="source">      this.cursor.className = &#39;inactive&#39;;<br></td></tr
><tr
id=sl_svn119_2095

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_2096

><td class="source">      this.cursor.className = this.cursor.className == &#39;bright&#39;<br></td></tr
><tr
id=sl_svn119_2097

><td class="source">                              ? &#39;dim&#39; : &#39;bright&#39;;<br></td></tr
><tr
id=sl_svn119_2098

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2099

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2100

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2101

><td class="source"><br></td></tr
><tr
id=sl_svn119_2102

><td class="source">VT100.prototype.blurCursor = function() {<br></td></tr
><tr
id=sl_svn119_2103

><td class="source">  this.animateCursor(true);<br></td></tr
><tr
id=sl_svn119_2104

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2105

><td class="source"><br></td></tr
><tr
id=sl_svn119_2106

><td class="source">VT100.prototype.focusCursor = function() {<br></td></tr
><tr
id=sl_svn119_2107

><td class="source">  this.animateCursor(false);<br></td></tr
><tr
id=sl_svn119_2108

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2109

><td class="source"><br></td></tr
><tr
id=sl_svn119_2110

><td class="source">VT100.prototype.flashScreen = function() {<br></td></tr
><tr
id=sl_svn119_2111

><td class="source">  this.isInverted       = !this.isInverted;<br></td></tr
><tr
id=sl_svn119_2112

><td class="source">  this.refreshInvertedState();<br></td></tr
><tr
id=sl_svn119_2113

><td class="source">  this.isInverted       = !this.isInverted;<br></td></tr
><tr
id=sl_svn119_2114

><td class="source">  setTimeout(function(vt100) {<br></td></tr
><tr
id=sl_svn119_2115

><td class="source">               return function() {<br></td></tr
><tr
id=sl_svn119_2116

><td class="source">                 vt100.refreshInvertedState();<br></td></tr
><tr
id=sl_svn119_2117

><td class="source">               };<br></td></tr
><tr
id=sl_svn119_2118

><td class="source">             }(this), 100);<br></td></tr
><tr
id=sl_svn119_2119

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2120

><td class="source"><br></td></tr
><tr
id=sl_svn119_2121

><td class="source">VT100.prototype.beep = function() {<br></td></tr
><tr
id=sl_svn119_2122

><td class="source">  if (this.visualBell) {<br></td></tr
><tr
id=sl_svn119_2123

><td class="source">    this.flashScreen();<br></td></tr
><tr
id=sl_svn119_2124

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_2125

><td class="source">    try {<br></td></tr
><tr
id=sl_svn119_2126

><td class="source">      this.beeper.Play();<br></td></tr
><tr
id=sl_svn119_2127

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn119_2128

><td class="source">      try {<br></td></tr
><tr
id=sl_svn119_2129

><td class="source">        this.beeper.src = &#39;beep.wav&#39;;<br></td></tr
><tr
id=sl_svn119_2130

><td class="source">      } catch (e) {<br></td></tr
><tr
id=sl_svn119_2131

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2132

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2133

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2134

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2135

><td class="source"><br></td></tr
><tr
id=sl_svn119_2136

><td class="source">VT100.prototype.bs = function() {<br></td></tr
><tr
id=sl_svn119_2137

><td class="source">  if (this.cursorX &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2138

><td class="source">    this.gotoXY(this.cursorX - 1, this.cursorY);<br></td></tr
><tr
id=sl_svn119_2139

><td class="source">    this.needWrap = false;<br></td></tr
><tr
id=sl_svn119_2140

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2141

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2142

><td class="source"><br></td></tr
><tr
id=sl_svn119_2143

><td class="source">VT100.prototype.ht = function(count) {<br></td></tr
><tr
id=sl_svn119_2144

><td class="source">  if (count == undefined) {<br></td></tr
><tr
id=sl_svn119_2145

><td class="source">    count        = 1;<br></td></tr
><tr
id=sl_svn119_2146

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2147

><td class="source">  var cx         = this.cursorX;<br></td></tr
><tr
id=sl_svn119_2148

><td class="source">  while (count-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2149

><td class="source">    while (cx++ &lt; this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_2150

><td class="source">      var tabState = this.userTabStop[cx];<br></td></tr
><tr
id=sl_svn119_2151

><td class="source">      if (tabState == false) {<br></td></tr
><tr
id=sl_svn119_2152

><td class="source">        // Explicitly cleared tab stop<br></td></tr
><tr
id=sl_svn119_2153

><td class="source">        continue;<br></td></tr
><tr
id=sl_svn119_2154

><td class="source">      } else if (tabState) {<br></td></tr
><tr
id=sl_svn119_2155

><td class="source">        // Explicitly set tab stop<br></td></tr
><tr
id=sl_svn119_2156

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2157

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2158

><td class="source">        // Default tab stop at each eighth column<br></td></tr
><tr
id=sl_svn119_2159

><td class="source">        if (cx % 8 == 0) {<br></td></tr
><tr
id=sl_svn119_2160

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_2161

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2162

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2163

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2164

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2165

><td class="source">  if (cx &gt; this.terminalWidth - 1) {<br></td></tr
><tr
id=sl_svn119_2166

><td class="source">    cx           = this.terminalWidth - 1;<br></td></tr
><tr
id=sl_svn119_2167

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2168

><td class="source">  if (cx != this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2169

><td class="source">    this.gotoXY(cx, this.cursorY);<br></td></tr
><tr
id=sl_svn119_2170

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2171

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2172

><td class="source"><br></td></tr
><tr
id=sl_svn119_2173

><td class="source">VT100.prototype.rt = function(count) {<br></td></tr
><tr
id=sl_svn119_2174

><td class="source">  if (count == undefined) {<br></td></tr
><tr
id=sl_svn119_2175

><td class="source">    count          = 1 ;<br></td></tr
><tr
id=sl_svn119_2176

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2177

><td class="source">  var cx           = this.cursorX;<br></td></tr
><tr
id=sl_svn119_2178

><td class="source">  while (count-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2179

><td class="source">    while (cx-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2180

><td class="source">      var tabState = this.userTabStop[cx];<br></td></tr
><tr
id=sl_svn119_2181

><td class="source">      if (tabState == false) {<br></td></tr
><tr
id=sl_svn119_2182

><td class="source">        // Explicitly cleared tab stop<br></td></tr
><tr
id=sl_svn119_2183

><td class="source">        continue;<br></td></tr
><tr
id=sl_svn119_2184

><td class="source">      } else if (tabState) {<br></td></tr
><tr
id=sl_svn119_2185

><td class="source">        // Explicitly set tab stop<br></td></tr
><tr
id=sl_svn119_2186

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2187

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2188

><td class="source">        // Default tab stop at each eighth column<br></td></tr
><tr
id=sl_svn119_2189

><td class="source">        if (cx % 8 == 0) {<br></td></tr
><tr
id=sl_svn119_2190

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_2191

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2192

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2193

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2194

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2195

><td class="source">  if (cx &lt; 0) {<br></td></tr
><tr
id=sl_svn119_2196

><td class="source">    cx             = 0;<br></td></tr
><tr
id=sl_svn119_2197

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2198

><td class="source">  if (cx != this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2199

><td class="source">    this.gotoXY(cx, this.cursorY);<br></td></tr
><tr
id=sl_svn119_2200

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2201

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2202

><td class="source"><br></td></tr
><tr
id=sl_svn119_2203

><td class="source">VT100.prototype.cr = function() {<br></td></tr
><tr
id=sl_svn119_2204

><td class="source">  this.gotoXY(0, this.cursorY);<br></td></tr
><tr
id=sl_svn119_2205

><td class="source">  this.needWrap = false;<br></td></tr
><tr
id=sl_svn119_2206

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2207

><td class="source"><br></td></tr
><tr
id=sl_svn119_2208

><td class="source">VT100.prototype.lf = function(count) {<br></td></tr
><tr
id=sl_svn119_2209

><td class="source">  if (count == undefined) {<br></td></tr
><tr
id=sl_svn119_2210

><td class="source">    count    = 1;<br></td></tr
><tr
id=sl_svn119_2211

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_2212

><td class="source">    if (count &gt; this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_2213

><td class="source">      count  = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_2214

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2215

><td class="source">    if (count &lt; 1) {<br></td></tr
><tr
id=sl_svn119_2216

><td class="source">      count  = 1;<br></td></tr
><tr
id=sl_svn119_2217

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2218

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2219

><td class="source">  while (count-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2220

><td class="source">    if (this.cursorY == this.bottom - 1) {<br></td></tr
><tr
id=sl_svn119_2221

><td class="source">      this.scrollRegion(0, this.top + 1,<br></td></tr
><tr
id=sl_svn119_2222

><td class="source">                        this.terminalWidth, this.bottom - this.top - 1,<br></td></tr
><tr
id=sl_svn119_2223

><td class="source">                        0, -1, this.style);<br></td></tr
><tr
id=sl_svn119_2224

><td class="source">      offset = undefined;<br></td></tr
><tr
id=sl_svn119_2225

><td class="source">    } else if (this.cursorY &lt; this.terminalHeight - 1) {<br></td></tr
><tr
id=sl_svn119_2226

><td class="source">      this.gotoXY(this.cursorX, this.cursorY + 1);<br></td></tr
><tr
id=sl_svn119_2227

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2228

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2229

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2230

><td class="source"><br></td></tr
><tr
id=sl_svn119_2231

><td class="source">VT100.prototype.ri = function(count) {<br></td></tr
><tr
id=sl_svn119_2232

><td class="source">  if (count == undefined) {<br></td></tr
><tr
id=sl_svn119_2233

><td class="source">    count   = 1;<br></td></tr
><tr
id=sl_svn119_2234

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn119_2235

><td class="source">    if (count &gt; this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_2236

><td class="source">      count = this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_2237

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2238

><td class="source">    if (count &lt; 1) {<br></td></tr
><tr
id=sl_svn119_2239

><td class="source">      count = 1;<br></td></tr
><tr
id=sl_svn119_2240

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2241

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2242

><td class="source">  while (count-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2243

><td class="source">    if (this.cursorY == this.top) {<br></td></tr
><tr
id=sl_svn119_2244

><td class="source">      this.scrollRegion(0, this.top,<br></td></tr
><tr
id=sl_svn119_2245

><td class="source">                        this.terminalWidth, this.bottom - this.top - 1,<br></td></tr
><tr
id=sl_svn119_2246

><td class="source">                        0, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2247

><td class="source">    } else if (this.cursorY &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2248

><td class="source">      this.gotoXY(this.cursorX, this.cursorY - 1);<br></td></tr
><tr
id=sl_svn119_2249

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2250

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2251

><td class="source">  this.needWrap = false;<br></td></tr
><tr
id=sl_svn119_2252

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2253

><td class="source"><br></td></tr
><tr
id=sl_svn119_2254

><td class="source">VT100.prototype.respondID = function() {<br></td></tr
><tr
id=sl_svn119_2255

><td class="source">  this.respondString += &#39;\u001B[?6c&#39;;<br></td></tr
><tr
id=sl_svn119_2256

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2257

><td class="source"><br></td></tr
><tr
id=sl_svn119_2258

><td class="source">VT100.prototype.respondSecondaryDA = function() {<br></td></tr
><tr
id=sl_svn119_2259

><td class="source">  this.respondString += &#39;\u001B[&gt;0;0;0c&#39;;<br></td></tr
><tr
id=sl_svn119_2260

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2261

><td class="source"><br></td></tr
><tr
id=sl_svn119_2262

><td class="source">VT100.prototype.updateStyle = function() {<br></td></tr
><tr
id=sl_svn119_2263

><td class="source">  var style  = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2264

><td class="source">  if (this.attr &amp; 0x0200 /* ATTR_UNDERLINE */) {<br></td></tr
><tr
id=sl_svn119_2265

><td class="source">    style   += &#39;text-decoration:underline;&#39;;<br></td></tr
><tr
id=sl_svn119_2266

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2267

><td class="source">  var bg     = (this.attr &gt;&gt; 4) &amp; 0xF;<br></td></tr
><tr
id=sl_svn119_2268

><td class="source">  var fg     =  this.attr       &amp; 0xF;<br></td></tr
><tr
id=sl_svn119_2269

><td class="source">  if (this.attr &amp; 0x0100 /* ATTR_REVERSE */) {<br></td></tr
><tr
id=sl_svn119_2270

><td class="source">    var tmp  = bg;<br></td></tr
><tr
id=sl_svn119_2271

><td class="source">    bg       = fg;<br></td></tr
><tr
id=sl_svn119_2272

><td class="source">    fg       = tmp;<br></td></tr
><tr
id=sl_svn119_2273

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2274

><td class="source">  if ((this.attr &amp; (0x0100 /* ATTR_REVERSE */ | 0x0400 /* ATTR_DIM */)) == 0x0400 /* ATTR_DIM */) {<br></td></tr
><tr
id=sl_svn119_2275

><td class="source">    fg       = 8; // Dark grey<br></td></tr
><tr
id=sl_svn119_2276

><td class="source">  } else if (this.attr &amp; 0x0800 /* ATTR_BRIGHT */) {<br></td></tr
><tr
id=sl_svn119_2277

><td class="source">    fg      |= 8;<br></td></tr
><tr
id=sl_svn119_2278

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2279

><td class="source">  if (this.attr &amp; 0x1000 /* ATTR_BLINK */) {<br></td></tr
><tr
id=sl_svn119_2280

><td class="source">    bg      ^= 8;<br></td></tr
><tr
id=sl_svn119_2281

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2282

><td class="source">  // Make some readability enhancements. Most notably, disallow identical<br></td></tr
><tr
id=sl_svn119_2283

><td class="source">  // background and foreground colors.<br></td></tr
><tr
id=sl_svn119_2284

><td class="source">  if (bg == fg) {<br></td></tr
><tr
id=sl_svn119_2285

><td class="source">    if ((fg ^= 8) == 7) {<br></td></tr
><tr
id=sl_svn119_2286

><td class="source">      fg     = 8;<br></td></tr
><tr
id=sl_svn119_2287

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2288

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2289

><td class="source">  // And disallow bright colors on a light-grey background.<br></td></tr
><tr
id=sl_svn119_2290

><td class="source">  if (bg == 7 &amp;&amp; fg &gt;= 8) {<br></td></tr
><tr
id=sl_svn119_2291

><td class="source">    if ((fg -= 8) == 7) {<br></td></tr
><tr
id=sl_svn119_2292

><td class="source">      fg     = 8;<br></td></tr
><tr
id=sl_svn119_2293

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2294

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2295

><td class="source"><br></td></tr
><tr
id=sl_svn119_2296

><td class="source">  if (fg != 0) {<br></td></tr
><tr
id=sl_svn119_2297

><td class="source">    style += &#39;color:&#39; + this.ansi[fg] + &#39;;&#39;;<br></td></tr
><tr
id=sl_svn119_2298

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2299

><td class="source">  if (bg != 15) {<br></td></tr
><tr
id=sl_svn119_2300

><td class="source">    style += &#39;background-color:&#39; + this.ansi[bg] + &#39;;&#39;;<br></td></tr
><tr
id=sl_svn119_2301

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2302

><td class="source">  this.attributeHelper.cssText = style;<br></td></tr
><tr
id=sl_svn119_2303

><td class="source">  this.style                   = this.attributeHelper.cssText;<br></td></tr
><tr
id=sl_svn119_2304

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2305

><td class="source"><br></td></tr
><tr
id=sl_svn119_2306

><td class="source">VT100.prototype.setAttrColors = function(attr) {<br></td></tr
><tr
id=sl_svn119_2307

><td class="source">  if (attr != this.attr) {<br></td></tr
><tr
id=sl_svn119_2308

><td class="source">    this.attr = attr;<br></td></tr
><tr
id=sl_svn119_2309

><td class="source">    this.updateStyle();<br></td></tr
><tr
id=sl_svn119_2310

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2311

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2312

><td class="source"><br></td></tr
><tr
id=sl_svn119_2313

><td class="source">VT100.prototype.saveCursor = function() {<br></td></tr
><tr
id=sl_svn119_2314

><td class="source">  this.savedX[this.currentScreen]     = this.cursorX;<br></td></tr
><tr
id=sl_svn119_2315

><td class="source">  this.savedY[this.currentScreen]     = this.cursorY;<br></td></tr
><tr
id=sl_svn119_2316

><td class="source">  this.savedAttr[this.currentScreen]  = this.attr;<br></td></tr
><tr
id=sl_svn119_2317

><td class="source">  this.savedUseGMap                   = this.useGMap;<br></td></tr
><tr
id=sl_svn119_2318

><td class="source">  for (var i = 0; i &lt; 4; i++) {<br></td></tr
><tr
id=sl_svn119_2319

><td class="source">    this.savedGMap[i]                 = this.GMap[i];<br></td></tr
><tr
id=sl_svn119_2320

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2321

><td class="source">  this.savedValid[this.currentScreen] = true;<br></td></tr
><tr
id=sl_svn119_2322

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2323

><td class="source"><br></td></tr
><tr
id=sl_svn119_2324

><td class="source">VT100.prototype.restoreCursor = function() {<br></td></tr
><tr
id=sl_svn119_2325

><td class="source">  if (!this.savedValid[this.currentScreen]) {<br></td></tr
><tr
id=sl_svn119_2326

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_2327

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2328

><td class="source">  this.attr      = this.savedAttr[this.currentScreen];<br></td></tr
><tr
id=sl_svn119_2329

><td class="source">  this.updateStyle();<br></td></tr
><tr
id=sl_svn119_2330

><td class="source">  this.useGMap   = this.savedUseGMap;<br></td></tr
><tr
id=sl_svn119_2331

><td class="source">  for (var i = 0; i &lt; 4; i++) {<br></td></tr
><tr
id=sl_svn119_2332

><td class="source">    this.GMap[i] = this.savedGMap[i];<br></td></tr
><tr
id=sl_svn119_2333

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2334

><td class="source">  this.translate = this.GMap[this.useGMap];<br></td></tr
><tr
id=sl_svn119_2335

><td class="source">  this.needWrap  = false;<br></td></tr
><tr
id=sl_svn119_2336

><td class="source">  this.gotoXY(this.savedX[this.currentScreen],<br></td></tr
><tr
id=sl_svn119_2337

><td class="source">              this.savedY[this.currentScreen]);<br></td></tr
><tr
id=sl_svn119_2338

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2339

><td class="source"><br></td></tr
><tr
id=sl_svn119_2340

><td class="source">VT100.prototype.setMode = function(state) {<br></td></tr
><tr
id=sl_svn119_2341

><td class="source">  for (var i = 0; i &lt;= this.npar; i++) {<br></td></tr
><tr
id=sl_svn119_2342

><td class="source">    if (this.isQuestionMark) {<br></td></tr
><tr
id=sl_svn119_2343

><td class="source">      switch (this.par[i]) {<br></td></tr
><tr
id=sl_svn119_2344

><td class="source">      case  1: this.cursorKeyMode      = state;                      break;<br></td></tr
><tr
id=sl_svn119_2345

><td class="source">      case  3: /* Toggling between 80/132 mode is not implemented */ break;<br></td></tr
><tr
id=sl_svn119_2346

><td class="source">      case  5: this.isInverted = state; this.refreshInvertedState(); break;<br></td></tr
><tr
id=sl_svn119_2347

><td class="source">      case  6: this.offsetMode         = state;                      break;<br></td></tr
><tr
id=sl_svn119_2348

><td class="source">      case  7: this.autoWrapMode       = state;                      break;<br></td></tr
><tr
id=sl_svn119_2349

><td class="source">      case 1000:<br></td></tr
><tr
id=sl_svn119_2350

><td class="source">      case  9: this.mouseReporting     = state;                      break;<br></td></tr
><tr
id=sl_svn119_2351

><td class="source">      case 25: this.cursorNeedsShowing = state;<br></td></tr
><tr
id=sl_svn119_2352

><td class="source">               if (state) { this.showCursor(); }<br></td></tr
><tr
id=sl_svn119_2353

><td class="source">               else       { this.hideCursor(); }                     break;<br></td></tr
><tr
id=sl_svn119_2354

><td class="source">      case 1047:<br></td></tr
><tr
id=sl_svn119_2355

><td class="source">      case 1049:<br></td></tr
><tr
id=sl_svn119_2356

><td class="source">      case 47: this.enableAlternateScreen(state);                    break;<br></td></tr
><tr
id=sl_svn119_2357

><td class="source">      default:                                                       break;<br></td></tr
><tr
id=sl_svn119_2358

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2359

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_2360

><td class="source">      switch (this.par[i]) {<br></td></tr
><tr
id=sl_svn119_2361

><td class="source">      case  3: this.dispCtrl           = state;                      break;<br></td></tr
><tr
id=sl_svn119_2362

><td class="source">      case  4: this.insertMode         = state;                      break;<br></td></tr
><tr
id=sl_svn119_2363

><td class="source">      case  20:this.crLfMode           = state;                      break;<br></td></tr
><tr
id=sl_svn119_2364

><td class="source">      default:                                                       break;<br></td></tr
><tr
id=sl_svn119_2365

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2366

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2367

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2368

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2369

><td class="source"><br></td></tr
><tr
id=sl_svn119_2370

><td class="source">VT100.prototype.statusReport = function() {<br></td></tr
><tr
id=sl_svn119_2371

><td class="source">  // Ready and operational.<br></td></tr
><tr
id=sl_svn119_2372

><td class="source">  this.respondString += &#39;\u001B[0n&#39;;<br></td></tr
><tr
id=sl_svn119_2373

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2374

><td class="source"><br></td></tr
><tr
id=sl_svn119_2375

><td class="source">VT100.prototype.cursorReport = function() {<br></td></tr
><tr
id=sl_svn119_2376

><td class="source">  this.respondString += &#39;\u001B[&#39; +<br></td></tr
><tr
id=sl_svn119_2377

><td class="source">                        (this.cursorY + (this.offsetMode ? this.top + 1 : 1)) +<br></td></tr
><tr
id=sl_svn119_2378

><td class="source">                        &#39;;&#39; +<br></td></tr
><tr
id=sl_svn119_2379

><td class="source">                        (this.cursorX + 1) +<br></td></tr
><tr
id=sl_svn119_2380

><td class="source">                        &#39;R&#39;;<br></td></tr
><tr
id=sl_svn119_2381

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2382

><td class="source"><br></td></tr
><tr
id=sl_svn119_2383

><td class="source">VT100.prototype.setCursorAttr = function(setAttr, xorAttr) {<br></td></tr
><tr
id=sl_svn119_2384

><td class="source">  // Changing of cursor color is not implemented.<br></td></tr
><tr
id=sl_svn119_2385

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2386

><td class="source"><br></td></tr
><tr
id=sl_svn119_2387

><td class="source">VT100.prototype.csiAt = function(number) {<br></td></tr
><tr
id=sl_svn119_2388

><td class="source">  // Insert spaces<br></td></tr
><tr
id=sl_svn119_2389

><td class="source">  if (number == 0) {<br></td></tr
><tr
id=sl_svn119_2390

><td class="source">    number      = 1;<br></td></tr
><tr
id=sl_svn119_2391

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2392

><td class="source">  if (number &gt; this.terminalWidth - this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2393

><td class="source">    number      = this.terminalWidth - this.cursorX;<br></td></tr
><tr
id=sl_svn119_2394

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2395

><td class="source">  this.scrollRegion(this.cursorX, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2396

><td class="source">                    this.terminalWidth - this.cursorX - number, 1,<br></td></tr
><tr
id=sl_svn119_2397

><td class="source">                    number, 0, this.style);<br></td></tr
><tr
id=sl_svn119_2398

><td class="source">  this.needWrap = false;<br></td></tr
><tr
id=sl_svn119_2399

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2400

><td class="source"><br></td></tr
><tr
id=sl_svn119_2401

><td class="source">VT100.prototype.csiJ = function(number) {<br></td></tr
><tr
id=sl_svn119_2402

><td class="source">  switch (number) {<br></td></tr
><tr
id=sl_svn119_2403

><td class="source">  case 0: // Erase from cursor to end of display<br></td></tr
><tr
id=sl_svn119_2404

><td class="source">    this.clearRegion(this.cursorX, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2405

><td class="source">                     this.terminalWidth - this.cursorX, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2406

><td class="source">    if (this.cursorY &lt; this.terminalHeight-2) {<br></td></tr
><tr
id=sl_svn119_2407

><td class="source">      this.clearRegion(0, this.cursorY+1,<br></td></tr
><tr
id=sl_svn119_2408

><td class="source">                       this.terminalWidth, this.terminalHeight-this.cursorY-1,<br></td></tr
><tr
id=sl_svn119_2409

><td class="source">                       this.style);<br></td></tr
><tr
id=sl_svn119_2410

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2411

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2412

><td class="source">  case 1: // Erase from start to cursor<br></td></tr
><tr
id=sl_svn119_2413

><td class="source">    if (this.cursorY &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2414

><td class="source">      this.clearRegion(0, 0,<br></td></tr
><tr
id=sl_svn119_2415

><td class="source">                       this.terminalWidth, this.cursorY, this.style);<br></td></tr
><tr
id=sl_svn119_2416

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2417

><td class="source">    this.clearRegion(0, this.cursorY, this.cursorX + 1, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2418

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2419

><td class="source">  case 2: // Erase whole display<br></td></tr
><tr
id=sl_svn119_2420

><td class="source">    this.clearRegion(0, 0, this.terminalWidth, this.terminalHeight,this.style);<br></td></tr
><tr
id=sl_svn119_2421

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2422

><td class="source">  default:<br></td></tr
><tr
id=sl_svn119_2423

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_2424

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2425

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2426

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2427

><td class="source"><br></td></tr
><tr
id=sl_svn119_2428

><td class="source">VT100.prototype.csiK = function(number) {<br></td></tr
><tr
id=sl_svn119_2429

><td class="source">  switch (number) {<br></td></tr
><tr
id=sl_svn119_2430

><td class="source">  case 0: // Erase from cursor to end of line<br></td></tr
><tr
id=sl_svn119_2431

><td class="source">    this.clearRegion(this.cursorX, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2432

><td class="source">                     this.terminalWidth - this.cursorX, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2433

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2434

><td class="source">  case 1: // Erase from start of line to cursor<br></td></tr
><tr
id=sl_svn119_2435

><td class="source">    this.clearRegion(0, this.cursorY, this.cursorX + 1, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2436

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2437

><td class="source">  case 2: // Erase whole line<br></td></tr
><tr
id=sl_svn119_2438

><td class="source">    this.clearRegion(0, this.cursorY, this.terminalWidth, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2439

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2440

><td class="source">  default:<br></td></tr
><tr
id=sl_svn119_2441

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_2442

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2443

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2444

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2445

><td class="source"><br></td></tr
><tr
id=sl_svn119_2446

><td class="source">VT100.prototype.csiL = function(number) {<br></td></tr
><tr
id=sl_svn119_2447

><td class="source">  // Open line by inserting blank line(s)<br></td></tr
><tr
id=sl_svn119_2448

><td class="source">  if (this.cursorY &gt;= this.bottom) {<br></td></tr
><tr
id=sl_svn119_2449

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_2450

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2451

><td class="source">  if (number == 0) {<br></td></tr
><tr
id=sl_svn119_2452

><td class="source">    number = 1;<br></td></tr
><tr
id=sl_svn119_2453

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2454

><td class="source">  if (number &gt; this.bottom - this.cursorY) {<br></td></tr
><tr
id=sl_svn119_2455

><td class="source">    number = this.bottom - this.cursorY;<br></td></tr
><tr
id=sl_svn119_2456

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2457

><td class="source">  this.scrollRegion(0, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2458

><td class="source">                    this.terminalWidth, this.bottom - this.cursorY - number,<br></td></tr
><tr
id=sl_svn119_2459

><td class="source">                    0, number, this.style);<br></td></tr
><tr
id=sl_svn119_2460

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2461

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2462

><td class="source"><br></td></tr
><tr
id=sl_svn119_2463

><td class="source">VT100.prototype.csiM = function(number) {<br></td></tr
><tr
id=sl_svn119_2464

><td class="source">  // Delete line(s), scrolling up the bottom of the screen.<br></td></tr
><tr
id=sl_svn119_2465

><td class="source">  if (this.cursorY &gt;= this.bottom) {<br></td></tr
><tr
id=sl_svn119_2466

><td class="source">    return;<br></td></tr
><tr
id=sl_svn119_2467

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2468

><td class="source">  if (number == 0) {<br></td></tr
><tr
id=sl_svn119_2469

><td class="source">    number = 1;<br></td></tr
><tr
id=sl_svn119_2470

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2471

><td class="source">  if (number &gt; this.bottom - this.cursorY) {<br></td></tr
><tr
id=sl_svn119_2472

><td class="source">    number = bottom - cursorY;<br></td></tr
><tr
id=sl_svn119_2473

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2474

><td class="source">  this.scrollRegion(0, this.cursorY + number,<br></td></tr
><tr
id=sl_svn119_2475

><td class="source">                    this.terminalWidth, this.bottom - this.cursorY - number,<br></td></tr
><tr
id=sl_svn119_2476

><td class="source">                    0, -number, this.style);<br></td></tr
><tr
id=sl_svn119_2477

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2478

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2479

><td class="source"><br></td></tr
><tr
id=sl_svn119_2480

><td class="source">VT100.prototype.csim = function() {<br></td></tr
><tr
id=sl_svn119_2481

><td class="source">  for (var i = 0; i &lt;= this.npar; i++) {<br></td></tr
><tr
id=sl_svn119_2482

><td class="source">    switch (this.par[i]) {<br></td></tr
><tr
id=sl_svn119_2483

><td class="source">    case 0:  this.attr  = 0x00F0 /* ATTR_DEFAULT */;                                break;<br></td></tr
><tr
id=sl_svn119_2484

><td class="source">    case 1:  this.attr  = (this.attr &amp; ~0x0400 /* ATTR_DIM */)|0x0800 /* ATTR_BRIGHT */;         break;<br></td></tr
><tr
id=sl_svn119_2485

><td class="source">    case 2:  this.attr  = (this.attr &amp; ~0x0800 /* ATTR_BRIGHT */)|0x0400 /* ATTR_DIM */;         break;<br></td></tr
><tr
id=sl_svn119_2486

><td class="source">    case 4:  this.attr |= 0x0200 /* ATTR_UNDERLINE */;                              break;<br></td></tr
><tr
id=sl_svn119_2487

><td class="source">    case 5:  this.attr |= 0x1000 /* ATTR_BLINK */;                                  break;<br></td></tr
><tr
id=sl_svn119_2488

><td class="source">    case 7:  this.attr |= 0x0100 /* ATTR_REVERSE */;                                break;<br></td></tr
><tr
id=sl_svn119_2489

><td class="source">    case 10:<br></td></tr
><tr
id=sl_svn119_2490

><td class="source">      this.translate    = this.GMap[this.useGMap];<br></td></tr
><tr
id=sl_svn119_2491

><td class="source">      this.dispCtrl     = false;<br></td></tr
><tr
id=sl_svn119_2492

><td class="source">      this.toggleMeta   = false;<br></td></tr
><tr
id=sl_svn119_2493

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2494

><td class="source">    case 11:<br></td></tr
><tr
id=sl_svn119_2495

><td class="source">      this.translate    = this.CodePage437Map;<br></td></tr
><tr
id=sl_svn119_2496

><td class="source">      this.dispCtrl     = true;<br></td></tr
><tr
id=sl_svn119_2497

><td class="source">      this.toggleMeta   = false;<br></td></tr
><tr
id=sl_svn119_2498

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2499

><td class="source">    case 12:<br></td></tr
><tr
id=sl_svn119_2500

><td class="source">      this.translate    = this.CodePage437Map;<br></td></tr
><tr
id=sl_svn119_2501

><td class="source">      this.dispCtrl     = true;<br></td></tr
><tr
id=sl_svn119_2502

><td class="source">      this.toggleMeta   = true;<br></td></tr
><tr
id=sl_svn119_2503

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2504

><td class="source">    case 21:<br></td></tr
><tr
id=sl_svn119_2505

><td class="source">    case 22: this.attr &amp;= ~(0x0800 /* ATTR_BRIGHT */|0x0400 /* ATTR_DIM */);                     break;<br></td></tr
><tr
id=sl_svn119_2506

><td class="source">    case 24: this.attr &amp;= ~ 0x0200 /* ATTR_UNDERLINE */;                            break;<br></td></tr
><tr
id=sl_svn119_2507

><td class="source">    case 25: this.attr &amp;= ~ 0x1000 /* ATTR_BLINK */;                                break;<br></td></tr
><tr
id=sl_svn119_2508

><td class="source">    case 27: this.attr &amp;= ~ 0x0100 /* ATTR_REVERSE */;                              break;<br></td></tr
><tr
id=sl_svn119_2509

><td class="source">    case 38: this.attr  = (this.attr &amp; ~(0x0400 /* ATTR_DIM */|0x0800 /* ATTR_BRIGHT */|0x0F))|<br></td></tr
><tr
id=sl_svn119_2510

><td class="source">                          0x0200 /* ATTR_UNDERLINE */;                              break;<br></td></tr
><tr
id=sl_svn119_2511

><td class="source">    case 39: this.attr &amp;= ~(0x0400 /* ATTR_DIM */|0x0800 /* ATTR_BRIGHT */|0x0200 /* ATTR_UNDERLINE */|0x0F); break;<br></td></tr
><tr
id=sl_svn119_2512

><td class="source">    case 49: this.attr |= 0xF0;                                        break;<br></td></tr
><tr
id=sl_svn119_2513

><td class="source">    default:<br></td></tr
><tr
id=sl_svn119_2514

><td class="source">      if (this.par[i] &gt;= 30 &amp;&amp; this.par[i] &lt;= 37) {<br></td></tr
><tr
id=sl_svn119_2515

><td class="source">          var fg        = this.par[i] - 30;<br></td></tr
><tr
id=sl_svn119_2516

><td class="source">          this.attr     = (this.attr &amp; ~0x0F) | fg;<br></td></tr
><tr
id=sl_svn119_2517

><td class="source">      } else if (this.par[i] &gt;= 40 &amp;&amp; this.par[i] &lt;= 47) {<br></td></tr
><tr
id=sl_svn119_2518

><td class="source">          var bg        = this.par[i] - 40;<br></td></tr
><tr
id=sl_svn119_2519

><td class="source">          this.attr     = (this.attr &amp; ~0xF0) | (bg &lt;&lt; 4);<br></td></tr
><tr
id=sl_svn119_2520

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2521

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2522

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2523

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2524

><td class="source">  this.updateStyle();<br></td></tr
><tr
id=sl_svn119_2525

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2526

><td class="source"><br></td></tr
><tr
id=sl_svn119_2527

><td class="source">VT100.prototype.csiP = function(number) {<br></td></tr
><tr
id=sl_svn119_2528

><td class="source">  // Delete character(s) following cursor<br></td></tr
><tr
id=sl_svn119_2529

><td class="source">  if (number == 0) {<br></td></tr
><tr
id=sl_svn119_2530

><td class="source">    number = 1;<br></td></tr
><tr
id=sl_svn119_2531

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2532

><td class="source">  if (number &gt; this.terminalWidth - this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2533

><td class="source">    number = this.terminalWidth - this.cursorX;<br></td></tr
><tr
id=sl_svn119_2534

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2535

><td class="source">  this.scrollRegion(this.cursorX + number, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2536

><td class="source">                    this.terminalWidth - this.cursorX - number, 1,<br></td></tr
><tr
id=sl_svn119_2537

><td class="source">                    -number, 0, this.style);<br></td></tr
><tr
id=sl_svn119_2538

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2539

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2540

><td class="source"><br></td></tr
><tr
id=sl_svn119_2541

><td class="source">VT100.prototype.csiX = function(number) {<br></td></tr
><tr
id=sl_svn119_2542

><td class="source">  // Clear characters following cursor<br></td></tr
><tr
id=sl_svn119_2543

><td class="source">  if (number == 0) {<br></td></tr
><tr
id=sl_svn119_2544

><td class="source">    number++;<br></td></tr
><tr
id=sl_svn119_2545

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2546

><td class="source">  if (number &gt; this.terminalWidth - this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2547

><td class="source">    number = this.terminalWidth - this.cursorX;<br></td></tr
><tr
id=sl_svn119_2548

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2549

><td class="source">  this.clearRegion(this.cursorX, this.cursorY, number, 1, this.style);<br></td></tr
><tr
id=sl_svn119_2550

><td class="source">  needWrap = false;<br></td></tr
><tr
id=sl_svn119_2551

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2552

><td class="source"><br></td></tr
><tr
id=sl_svn119_2553

><td class="source">VT100.prototype.settermCommand = function() {<br></td></tr
><tr
id=sl_svn119_2554

><td class="source">  // Setterm commands are not implemented<br></td></tr
><tr
id=sl_svn119_2555

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2556

><td class="source"><br></td></tr
><tr
id=sl_svn119_2557

><td class="source">VT100.prototype.doControl = function(ch) {<br></td></tr
><tr
id=sl_svn119_2558

><td class="source">  var lineBuf                = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2559

><td class="source">  switch (ch) {<br></td></tr
><tr
id=sl_svn119_2560

><td class="source">  case 0x00: /* ignored */                                              break;<br></td></tr
><tr
id=sl_svn119_2561

><td class="source">  case 0x08: this.bs();                                                 break;<br></td></tr
><tr
id=sl_svn119_2562

><td class="source">  case 0x09: this.ht();                                                 break;<br></td></tr
><tr
id=sl_svn119_2563

><td class="source">  case 0x0A:<br></td></tr
><tr
id=sl_svn119_2564

><td class="source">  case 0x0B:<br></td></tr
><tr
id=sl_svn119_2565

><td class="source">  case 0x0C:<br></td></tr
><tr
id=sl_svn119_2566

><td class="source">  case 0x84: this.lf(); if (!this.crLfMode)                             break;<br></td></tr
><tr
id=sl_svn119_2567

><td class="source">  case 0x0D: this.cr();                                                 break;<br></td></tr
><tr
id=sl_svn119_2568

><td class="source">  case 0x85: this.cr(); this.lf();                                      break;<br></td></tr
><tr
id=sl_svn119_2569

><td class="source">  case 0x0E: this.useGMap     = 1;<br></td></tr
><tr
id=sl_svn119_2570

><td class="source">             this.translate   = this.GMap[1];<br></td></tr
><tr
id=sl_svn119_2571

><td class="source">             this.dispCtrl    = true;                                   break;<br></td></tr
><tr
id=sl_svn119_2572

><td class="source">  case 0x0F: this.useGMap     = 0;<br></td></tr
><tr
id=sl_svn119_2573

><td class="source">             this.translate   = this.GMap[0];<br></td></tr
><tr
id=sl_svn119_2574

><td class="source">             this.dispCtrl    = false;                                  break;<br></td></tr
><tr
id=sl_svn119_2575

><td class="source">  case 0x18:<br></td></tr
><tr
id=sl_svn119_2576

><td class="source">  case 0x1A: this.isEsc       = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2577

><td class="source">  case 0x1B: this.isEsc       = 1 /* ESesc */;                                  break;<br></td></tr
><tr
id=sl_svn119_2578

><td class="source">  case 0x7F: /* ignored */                                              break;<br></td></tr
><tr
id=sl_svn119_2579

><td class="source">  case 0x88: this.userTabStop[this.cursorX] = true;                     break;<br></td></tr
><tr
id=sl_svn119_2580

><td class="source">  case 0x8D: this.ri();                                                 break;<br></td></tr
><tr
id=sl_svn119_2581

><td class="source">  case 0x8E: this.isEsc       = 18 /* ESss2 */;                                  break;<br></td></tr
><tr
id=sl_svn119_2582

><td class="source">  case 0x8F: this.isEsc       = 19 /* ESss3 */;                                  break;<br></td></tr
><tr
id=sl_svn119_2583

><td class="source">  case 0x9A: this.respondID();                                          break;<br></td></tr
><tr
id=sl_svn119_2584

><td class="source">  case 0x9B: this.isEsc       = 2 /* ESsquare */;                               break;<br></td></tr
><tr
id=sl_svn119_2585

><td class="source">  case 0x07: if (this.isEsc != 17 /* ESstatus */) {<br></td></tr
><tr
id=sl_svn119_2586

><td class="source">               this.beep();                                             break;<br></td></tr
><tr
id=sl_svn119_2587

><td class="source">             }<br></td></tr
><tr
id=sl_svn119_2588

><td class="source">             /* fall thru */<br></td></tr
><tr
id=sl_svn119_2589

><td class="source">  default:   switch (this.isEsc) {<br></td></tr
><tr
id=sl_svn119_2590

><td class="source">    case 1 /* ESesc */:<br></td></tr
><tr
id=sl_svn119_2591

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2592

><td class="source">      switch (ch) {<br></td></tr
><tr
id=sl_svn119_2593

><td class="source">/*%*/ case 0x25: this.isEsc   = 13 /* ESpercent */;                              break;<br></td></tr
><tr
id=sl_svn119_2594

><td class="source">/*(*/ case 0x28: this.isEsc   = 8 /* ESsetG0 */;                                break;<br></td></tr
><tr
id=sl_svn119_2595

><td class="source">/*-*/ case 0x2D:<br></td></tr
><tr
id=sl_svn119_2596

><td class="source">/*)*/ case 0x29: this.isEsc   = 9 /* ESsetG1 */;                                break;<br></td></tr
><tr
id=sl_svn119_2597

><td class="source">/*.*/ case 0x2E:<br></td></tr
><tr
id=sl_svn119_2598

><td class="source">/***/ case 0x2A: this.isEsc   = 10 /* ESsetG2 */;                                break;<br></td></tr
><tr
id=sl_svn119_2599

><td class="source">/*/*/ case 0x2F:<br></td></tr
><tr
id=sl_svn119_2600

><td class="source">/*+*/ case 0x2B: this.isEsc   = 11 /* ESsetG3 */;                                break;<br></td></tr
><tr
id=sl_svn119_2601

><td class="source">/*#*/ case 0x23: this.isEsc   = 7 /* EShash */;                                 break;<br></td></tr
><tr
id=sl_svn119_2602

><td class="source">/*7*/ case 0x37: this.saveCursor();                                     break;<br></td></tr
><tr
id=sl_svn119_2603

><td class="source">/*8*/ case 0x38: this.restoreCursor();                                  break;<br></td></tr
><tr
id=sl_svn119_2604

><td class="source">/*&gt;*/ case 0x3E: this.applKeyMode = false;                              break;<br></td></tr
><tr
id=sl_svn119_2605

><td class="source">/*=*/ case 0x3D: this.applKeyMode = true;                               break;<br></td></tr
><tr
id=sl_svn119_2606

><td class="source">/*D*/ case 0x44: this.lf();                                             break;<br></td></tr
><tr
id=sl_svn119_2607

><td class="source">/*E*/ case 0x45: this.cr(); this.lf();                                  break;<br></td></tr
><tr
id=sl_svn119_2608

><td class="source">/*M*/ case 0x4D: this.ri();                                             break;<br></td></tr
><tr
id=sl_svn119_2609

><td class="source">/*N*/ case 0x4E: this.isEsc   = 18 /* ESss2 */;                                  break;<br></td></tr
><tr
id=sl_svn119_2610

><td class="source">/*O*/ case 0x4F: this.isEsc   = 19 /* ESss3 */;                                  break;<br></td></tr
><tr
id=sl_svn119_2611

><td class="source">/*H*/ case 0x48: this.userTabStop[this.cursorX] = true;                 break;<br></td></tr
><tr
id=sl_svn119_2612

><td class="source">/*Z*/ case 0x5A: this.respondID();                                      break;<br></td></tr
><tr
id=sl_svn119_2613

><td class="source">/*[*/ case 0x5B: this.isEsc   = 2 /* ESsquare */;                               break;<br></td></tr
><tr
id=sl_svn119_2614

><td class="source">/*]*/ case 0x5D: this.isEsc   = 15 /* ESnonstd */;                               break;<br></td></tr
><tr
id=sl_svn119_2615

><td class="source">/*c*/ case 0x63: this.reset();                                          break;<br></td></tr
><tr
id=sl_svn119_2616

><td class="source">/*g*/ case 0x67: this.flashScreen();                                    break;<br></td></tr
><tr
id=sl_svn119_2617

><td class="source">      default:                                                          break;<br></td></tr
><tr
id=sl_svn119_2618

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2619

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2620

><td class="source">    case 15 /* ESnonstd */:<br></td></tr
><tr
id=sl_svn119_2621

><td class="source">      switch (ch) {<br></td></tr
><tr
id=sl_svn119_2622

><td class="source">/*0*/ case 0x30:<br></td></tr
><tr
id=sl_svn119_2623

><td class="source">/*1*/ case 0x31:<br></td></tr
><tr
id=sl_svn119_2624

><td class="source">/*2*/ case 0x32: this.statusString = &#39;&#39;; this.isEsc  = 17 /* ESstatus */;        break;<br></td></tr
><tr
id=sl_svn119_2625

><td class="source">/*P*/ case 0x50: this.npar    = 0; this.par = [ 0, 0, 0, 0, 0, 0, 0 ];<br></td></tr
><tr
id=sl_svn119_2626

><td class="source">                 this.isEsc   = 16 /* ESpalette */;                              break;<br></td></tr
><tr
id=sl_svn119_2627

><td class="source">/*R*/ case 0x52: // Palette support is not implemented<br></td></tr
><tr
id=sl_svn119_2628

><td class="source">                 this.isEsc   = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2629

><td class="source">      default:   this.isEsc   = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2630

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2631

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2632

><td class="source">    case 16 /* ESpalette */:<br></td></tr
><tr
id=sl_svn119_2633

><td class="source">      if ((ch &gt;= 0x30 /*0*/ &amp;&amp; ch &lt;= 0x39 /*9*/) ||<br></td></tr
><tr
id=sl_svn119_2634

><td class="source">          (ch &gt;= 0x41 /*A*/ &amp;&amp; ch &lt;= 0x46 /*F*/) ||<br></td></tr
><tr
id=sl_svn119_2635

><td class="source">          (ch &gt;= 0x61 /*a*/ &amp;&amp; ch &lt;= 0x66 /*f*/)) {<br></td></tr
><tr
id=sl_svn119_2636

><td class="source">        this.par[this.npar++] = ch &gt; 0x39  /*9*/ ? (ch &amp; 0xDF) - 55<br></td></tr
><tr
id=sl_svn119_2637

><td class="source">                                                : (ch &amp; 0xF);<br></td></tr
><tr
id=sl_svn119_2638

><td class="source">        if (this.npar == 7) {<br></td></tr
><tr
id=sl_svn119_2639

><td class="source">          // Palette support is not implemented<br></td></tr
><tr
id=sl_svn119_2640

><td class="source">          this.isEsc          = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2641

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2642

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2643

><td class="source">        this.isEsc            = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2644

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2645

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2646

><td class="source">    case 2 /* ESsquare */:<br></td></tr
><tr
id=sl_svn119_2647

><td class="source">      this.npar               = 0;<br></td></tr
><tr
id=sl_svn119_2648

><td class="source">      this.par                = [ 0, 0, 0, 0, 0, 0, 0, 0,<br></td></tr
><tr
id=sl_svn119_2649

><td class="source">                                  0, 0, 0, 0, 0, 0, 0, 0 ];<br></td></tr
><tr
id=sl_svn119_2650

><td class="source">      this.isEsc              = 3 /* ESgetpars */;<br></td></tr
><tr
id=sl_svn119_2651

><td class="source">/*[*/ if (ch == 0x5B) { // Function key<br></td></tr
><tr
id=sl_svn119_2652

><td class="source">        this.isEsc            = 6 /* ESfunckey */;<br></td></tr
><tr
id=sl_svn119_2653

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2654

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2655

><td class="source">/*?*/   this.isQuestionMark   = ch == 0x3F;<br></td></tr
><tr
id=sl_svn119_2656

><td class="source">        if (this.isQuestionMark) {<br></td></tr
><tr
id=sl_svn119_2657

><td class="source">          break;<br></td></tr
><tr
id=sl_svn119_2658

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2659

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2660

><td class="source">      // Fall through<br></td></tr
><tr
id=sl_svn119_2661

><td class="source">    case 5 /* ESdeviceattr */:<br></td></tr
><tr
id=sl_svn119_2662

><td class="source">    case 3 /* ESgetpars */: <br></td></tr
><tr
id=sl_svn119_2663

><td class="source">/*;*/ if (ch == 0x3B) {<br></td></tr
><tr
id=sl_svn119_2664

><td class="source">        this.npar++;<br></td></tr
><tr
id=sl_svn119_2665

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2666

><td class="source">      } else if (ch &gt;= 0x30 /*0*/ &amp;&amp; ch &lt;= 0x39 /*9*/) {<br></td></tr
><tr
id=sl_svn119_2667

><td class="source">        var par               = this.par[this.npar];<br></td></tr
><tr
id=sl_svn119_2668

><td class="source">        if (par == undefined) {<br></td></tr
><tr
id=sl_svn119_2669

><td class="source">          par                 = 0;<br></td></tr
><tr
id=sl_svn119_2670

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2671

><td class="source">        this.par[this.npar]   = 10*par + (ch &amp; 0xF);<br></td></tr
><tr
id=sl_svn119_2672

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2673

><td class="source">      } else if (this.isEsc == 5 /* ESdeviceattr */) {<br></td></tr
><tr
id=sl_svn119_2674

><td class="source">        switch (ch) {<br></td></tr
><tr
id=sl_svn119_2675

><td class="source">/*c*/   case 0x63: if (this.par[0] == 0) this.respondSecondaryDA();     break;<br></td></tr
><tr
id=sl_svn119_2676

><td class="source">/*m*/   case 0x6D: /* (re)set key modifier resource values */           break;<br></td></tr
><tr
id=sl_svn119_2677

><td class="source">/*n*/   case 0x6E: /* disable key modifier resource values */           break;<br></td></tr
><tr
id=sl_svn119_2678

><td class="source">/*p*/   case 0x70: /* set pointer mode resource value */                break;<br></td></tr
><tr
id=sl_svn119_2679

><td class="source">        default:                                                        break;<br></td></tr
><tr
id=sl_svn119_2680

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2681

><td class="source">        this.isEsc            = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2682

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2683

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2684

><td class="source">        this.isEsc            = 4 /* ESgotpars */;<br></td></tr
><tr
id=sl_svn119_2685

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2686

><td class="source">      // Fall through<br></td></tr
><tr
id=sl_svn119_2687

><td class="source">    case 4 /* ESgotpars */:<br></td></tr
><tr
id=sl_svn119_2688

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2689

><td class="source">      if (this.isQuestionMark) {<br></td></tr
><tr
id=sl_svn119_2690

><td class="source">        switch (ch) {<br></td></tr
><tr
id=sl_svn119_2691

><td class="source">/*h*/   case 0x68: this.setMode(true);                                  break;<br></td></tr
><tr
id=sl_svn119_2692

><td class="source">/*l*/   case 0x6C: this.setMode(false);                                 break;<br></td></tr
><tr
id=sl_svn119_2693

><td class="source">/*c*/   case 0x63: this.setCursorAttr(this.par[2], this.par[1]);        break;<br></td></tr
><tr
id=sl_svn119_2694

><td class="source">        default:                                                        break;<br></td></tr
><tr
id=sl_svn119_2695

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2696

><td class="source">        this.isQuestionMark   = false;<br></td></tr
><tr
id=sl_svn119_2697

><td class="source">        break;<br></td></tr
><tr
id=sl_svn119_2698

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2699

><td class="source">      switch (ch) {<br></td></tr
><tr
id=sl_svn119_2700

><td class="source">/*!*/ case 0x21: this.isEsc   = 12 /* ESbang */;                                 break;<br></td></tr
><tr
id=sl_svn119_2701

><td class="source">/*&gt;*/ case 0x3E: if (!this.npar) this.isEsc  = 5 /* ESdeviceattr */;            break;<br></td></tr
><tr
id=sl_svn119_2702

><td class="source">/*G*/ case 0x47:<br></td></tr
><tr
id=sl_svn119_2703

><td class="source">/*`*/ case 0x60: this.gotoXY(this.par[0] - 1, this.cursorY);            break;<br></td></tr
><tr
id=sl_svn119_2704

><td class="source">/*A*/ case 0x41: this.gotoXY(this.cursorX,<br></td></tr
><tr
id=sl_svn119_2705

><td class="source">                             this.cursorY - (this.par[0] ? this.par[0] : 1));<br></td></tr
><tr
id=sl_svn119_2706

><td class="source">                                                                        break;<br></td></tr
><tr
id=sl_svn119_2707

><td class="source">/*B*/ case 0x42:<br></td></tr
><tr
id=sl_svn119_2708

><td class="source">/*e*/ case 0x65: this.gotoXY(this.cursorX,<br></td></tr
><tr
id=sl_svn119_2709

><td class="source">                             this.cursorY + (this.par[0] ? this.par[0] : 1));<br></td></tr
><tr
id=sl_svn119_2710

><td class="source">                                                                        break;<br></td></tr
><tr
id=sl_svn119_2711

><td class="source">/*C*/ case 0x43:<br></td></tr
><tr
id=sl_svn119_2712

><td class="source">/*a*/ case 0x61: this.gotoXY(this.cursorX + (this.par[0] ? this.par[0] : 1),<br></td></tr
><tr
id=sl_svn119_2713

><td class="source">                             this.cursorY);                             break;<br></td></tr
><tr
id=sl_svn119_2714

><td class="source">/*D*/ case 0x44: this.gotoXY(this.cursorX - (this.par[0] ? this.par[0] : 1),<br></td></tr
><tr
id=sl_svn119_2715

><td class="source">                             this.cursorY);                             break;<br></td></tr
><tr
id=sl_svn119_2716

><td class="source">/*E*/ case 0x45: this.gotoXY(0, this.cursorY + (this.par[0] ? this.par[0] :1));<br></td></tr
><tr
id=sl_svn119_2717

><td class="source">                                                                        break;<br></td></tr
><tr
id=sl_svn119_2718

><td class="source">/*F*/ case 0x46: this.gotoXY(0, this.cursorY - (this.par[0] ? this.par[0] :1));<br></td></tr
><tr
id=sl_svn119_2719

><td class="source">                                                                        break;<br></td></tr
><tr
id=sl_svn119_2720

><td class="source">/*d*/ case 0x64: this.gotoXaY(this.cursorX, this.par[0] - 1);           break;<br></td></tr
><tr
id=sl_svn119_2721

><td class="source">/*H*/ case 0x48:<br></td></tr
><tr
id=sl_svn119_2722

><td class="source">/*f*/ case 0x66: this.gotoXaY(this.par[1] - 1, this.par[0] - 1);        break;<br></td></tr
><tr
id=sl_svn119_2723

><td class="source">/*I*/ case 0x49: this.ht(this.par[0] ? this.par[0] : 1);                break;<br></td></tr
><tr
id=sl_svn119_2724

><td class="source">/*@*/ case 0x40: this.csiAt(this.par[0]);                               break;<br></td></tr
><tr
id=sl_svn119_2725

><td class="source">/*J*/ case 0x4A: this.csiJ(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2726

><td class="source">/*K*/ case 0x4B: this.csiK(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2727

><td class="source">/*L*/ case 0x4C: this.csiL(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2728

><td class="source">/*M*/ case 0x4D: this.csiM(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2729

><td class="source">/*m*/ case 0x6D: this.csim();                                           break;<br></td></tr
><tr
id=sl_svn119_2730

><td class="source">/*P*/ case 0x50: this.csiP(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2731

><td class="source">/*X*/ case 0x58: this.csiX(this.par[0]);                                break;<br></td></tr
><tr
id=sl_svn119_2732

><td class="source">/*S*/ case 0x53: this.lf(this.par[0] ? this.par[0] : 1);                break;<br></td></tr
><tr
id=sl_svn119_2733

><td class="source">/*T*/ case 0x54: this.ri(this.par[0] ? this.par[0] : 1);                break;<br></td></tr
><tr
id=sl_svn119_2734

><td class="source">/*c*/ case 0x63: if (!this.par[0]) this.respondID();                    break;<br></td></tr
><tr
id=sl_svn119_2735

><td class="source">/*g*/ case 0x67: if (this.par[0] == 0) {<br></td></tr
><tr
id=sl_svn119_2736

><td class="source">                   this.userTabStop[this.cursorX] = false;<br></td></tr
><tr
id=sl_svn119_2737

><td class="source">                 } else if (this.par[0] == 2 || this.par[0] == 3) {<br></td></tr
><tr
id=sl_svn119_2738

><td class="source">                   this.userTabStop               = [ ];<br></td></tr
><tr
id=sl_svn119_2739

><td class="source">                   for (var i = 0; i &lt; this.terminalWidth; i++) {<br></td></tr
><tr
id=sl_svn119_2740

><td class="source">                     this.userTabStop[i]          = false;<br></td></tr
><tr
id=sl_svn119_2741

><td class="source">                   }<br></td></tr
><tr
id=sl_svn119_2742

><td class="source">                 }<br></td></tr
><tr
id=sl_svn119_2743

><td class="source">                 break;<br></td></tr
><tr
id=sl_svn119_2744

><td class="source">/*h*/ case 0x68: this.setMode(true);                                    break;<br></td></tr
><tr
id=sl_svn119_2745

><td class="source">/*l*/ case 0x6C: this.setMode(false);                                   break;<br></td></tr
><tr
id=sl_svn119_2746

><td class="source">/*n*/ case 0x6E: switch (this.par[0]) {<br></td></tr
><tr
id=sl_svn119_2747

><td class="source">                 case 5: this.statusReport();                           break;<br></td></tr
><tr
id=sl_svn119_2748

><td class="source">                 case 6: this.cursorReport();                           break;<br></td></tr
><tr
id=sl_svn119_2749

><td class="source">                 default:                                               break;<br></td></tr
><tr
id=sl_svn119_2750

><td class="source">                 }<br></td></tr
><tr
id=sl_svn119_2751

><td class="source">                 break;<br></td></tr
><tr
id=sl_svn119_2752

><td class="source">/*q*/ case 0x71: // LED control not implemented<br></td></tr
><tr
id=sl_svn119_2753

><td class="source">                                                                        break;<br></td></tr
><tr
id=sl_svn119_2754

><td class="source">/*r*/ case 0x72: var t        = this.par[0] ? this.par[0] : 1;<br></td></tr
><tr
id=sl_svn119_2755

><td class="source">                 var b        = this.par[1] ? this.par[1]<br></td></tr
><tr
id=sl_svn119_2756

><td class="source">                                            : this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_2757

><td class="source">                 if (t &lt; b &amp;&amp; b &lt;= this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_2758

><td class="source">                   this.top   = t - 1;<br></td></tr
><tr
id=sl_svn119_2759

><td class="source">                   this.bottom= b;<br></td></tr
><tr
id=sl_svn119_2760

><td class="source">                   this.gotoXaY(0, 0);<br></td></tr
><tr
id=sl_svn119_2761

><td class="source">                 }<br></td></tr
><tr
id=sl_svn119_2762

><td class="source">                 break;<br></td></tr
><tr
id=sl_svn119_2763

><td class="source">/*b*/ case 0x62: var c        = this.par[0] ? this.par[0] : 1;<br></td></tr
><tr
id=sl_svn119_2764

><td class="source">                 if (c &gt; this.terminalWidth * this.terminalHeight) {<br></td></tr
><tr
id=sl_svn119_2765

><td class="source">                   c          = this.terminalWidth * this.terminalHeight;<br></td></tr
><tr
id=sl_svn119_2766

><td class="source">                 }<br></td></tr
><tr
id=sl_svn119_2767

><td class="source">                 while (c-- &gt; 0) {<br></td></tr
><tr
id=sl_svn119_2768

><td class="source">                   lineBuf   += this.lastCharacter;<br></td></tr
><tr
id=sl_svn119_2769

><td class="source">                 }<br></td></tr
><tr
id=sl_svn119_2770

><td class="source">                 break;<br></td></tr
><tr
id=sl_svn119_2771

><td class="source">/*s*/ case 0x73: this.saveCursor();                                     break;<br></td></tr
><tr
id=sl_svn119_2772

><td class="source">/*u*/ case 0x75: this.restoreCursor();                                  break;<br></td></tr
><tr
id=sl_svn119_2773

><td class="source">/*Z*/ case 0x5A: this.rt(this.par[0] ? this.par[0] : 1);                break;<br></td></tr
><tr
id=sl_svn119_2774

><td class="source">/*]*/ case 0x5D: this.settermCommand();                                 break;<br></td></tr
><tr
id=sl_svn119_2775

><td class="source">      default:                                                          break;<br></td></tr
><tr
id=sl_svn119_2776

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2777

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2778

><td class="source">    case 12 /* ESbang */:<br></td></tr
><tr
id=sl_svn119_2779

><td class="source">      if (ch == &#39;p&#39;) {<br></td></tr
><tr
id=sl_svn119_2780

><td class="source">        this.reset();<br></td></tr
><tr
id=sl_svn119_2781

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2782

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2783

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2784

><td class="source">    case 13 /* ESpercent */:<br></td></tr
><tr
id=sl_svn119_2785

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2786

><td class="source">      switch (ch) {<br></td></tr
><tr
id=sl_svn119_2787

><td class="source">/*@*/ case 0x40: this.utfEnabled = false;                               break;<br></td></tr
><tr
id=sl_svn119_2788

><td class="source">/*G*/ case 0x47:<br></td></tr
><tr
id=sl_svn119_2789

><td class="source">/*8*/ case 0x38: this.utfEnabled = true;                                break;<br></td></tr
><tr
id=sl_svn119_2790

><td class="source">      default:                                                          break;<br></td></tr
><tr
id=sl_svn119_2791

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2792

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2793

><td class="source">    case 6 /* ESfunckey */:<br></td></tr
><tr
id=sl_svn119_2794

><td class="source">      this.isEsc              = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2795

><td class="source">    case 7 /* EShash */:<br></td></tr
><tr
id=sl_svn119_2796

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2797

><td class="source">/*8*/ if (ch == 0x38) {<br></td></tr
><tr
id=sl_svn119_2798

><td class="source">        // Screen alignment test not implemented<br></td></tr
><tr
id=sl_svn119_2799

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2800

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2801

><td class="source">    case 8 /* ESsetG0 */:<br></td></tr
><tr
id=sl_svn119_2802

><td class="source">    case 9 /* ESsetG1 */:<br></td></tr
><tr
id=sl_svn119_2803

><td class="source">    case 10 /* ESsetG2 */:<br></td></tr
><tr
id=sl_svn119_2804

><td class="source">    case 11 /* ESsetG3 */:<br></td></tr
><tr
id=sl_svn119_2805

><td class="source">      var g                   = this.isEsc - 8 /* ESsetG0 */;<br></td></tr
><tr
id=sl_svn119_2806

><td class="source">      this.isEsc              = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2807

><td class="source">      switch (ch) {<br></td></tr
><tr
id=sl_svn119_2808

><td class="source">/*0*/ case 0x30: this.GMap[g] = this.VT100GraphicsMap;                  break;<br></td></tr
><tr
id=sl_svn119_2809

><td class="source">/*A*/ case 0x42:<br></td></tr
><tr
id=sl_svn119_2810

><td class="source">/*B*/ case 0x42: this.GMap[g] = this.Latin1Map;                         break;<br></td></tr
><tr
id=sl_svn119_2811

><td class="source">/*U*/ case 0x55: this.GMap[g] = this.CodePage437Map;                    break;<br></td></tr
><tr
id=sl_svn119_2812

><td class="source">/*K*/ case 0x4B: this.GMap[g] = this.DirectToFontMap;                   break;<br></td></tr
><tr
id=sl_svn119_2813

><td class="source">      default:                                                          break;<br></td></tr
><tr
id=sl_svn119_2814

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2815

><td class="source">      if (this.useGMap == g) {<br></td></tr
><tr
id=sl_svn119_2816

><td class="source">        this.translate        = this.GMap[g];<br></td></tr
><tr
id=sl_svn119_2817

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2818

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2819

><td class="source">    case 17 /* ESstatus */:<br></td></tr
><tr
id=sl_svn119_2820

><td class="source">      if (ch == 0x07) {<br></td></tr
><tr
id=sl_svn119_2821

><td class="source">        if (this.statusString &amp;&amp; this.statusString.charAt(0) == &#39;;&#39;) {<br></td></tr
><tr
id=sl_svn119_2822

><td class="source">          this.statusString   = this.statusString.substr(1);<br></td></tr
><tr
id=sl_svn119_2823

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2824

><td class="source">        try {<br></td></tr
><tr
id=sl_svn119_2825

><td class="source">          window.status       = this.statusString;<br></td></tr
><tr
id=sl_svn119_2826

><td class="source">        } catch (e) {<br></td></tr
><tr
id=sl_svn119_2827

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2828

><td class="source">        this.isEsc            = 0 /* ESnormal */;<br></td></tr
><tr
id=sl_svn119_2829

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2830

><td class="source">        this.statusString    += String.fromCharCode(ch);<br></td></tr
><tr
id=sl_svn119_2831

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2832

><td class="source">      break;<br></td></tr
><tr
id=sl_svn119_2833

><td class="source">    case 18 /* ESss2 */:<br></td></tr
><tr
id=sl_svn119_2834

><td class="source">    case 19 /* ESss3 */:<br></td></tr
><tr
id=sl_svn119_2835

><td class="source">      if (ch &lt; 256) {<br></td></tr
><tr
id=sl_svn119_2836

><td class="source">          ch                  = this.GMap[this.isEsc - 18 /* ESss2 */ + 2]<br></td></tr
><tr
id=sl_svn119_2837

><td class="source">                                         [this.toggleMeta ? (ch | 0x80) : ch];<br></td></tr
><tr
id=sl_svn119_2838

><td class="source">        if ((ch &amp; 0xFF00) == 0xF000) {<br></td></tr
><tr
id=sl_svn119_2839

><td class="source">          ch                  = ch &amp; 0xFF;<br></td></tr
><tr
id=sl_svn119_2840

><td class="source">        } else if (ch == 0xFEFF || (ch &gt;= 0x200A &amp;&amp; ch &lt;= 0x200F)) {<br></td></tr
><tr
id=sl_svn119_2841

><td class="source">          this.isEsc         = 0 /* ESnormal */;                                break;<br></td></tr
><tr
id=sl_svn119_2842

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2843

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2844

><td class="source">      this.lastCharacter      = String.fromCharCode(ch);<br></td></tr
><tr
id=sl_svn119_2845

><td class="source">      lineBuf                += this.lastCharacter;<br></td></tr
><tr
id=sl_svn119_2846

><td class="source">      this.isEsc              = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2847

><td class="source">    default:<br></td></tr
><tr
id=sl_svn119_2848

><td class="source">      this.isEsc              = 0 /* ESnormal */;                               break;<br></td></tr
><tr
id=sl_svn119_2849

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2850

><td class="source">    break;<br></td></tr
><tr
id=sl_svn119_2851

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2852

><td class="source">  return lineBuf;<br></td></tr
><tr
id=sl_svn119_2853

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2854

><td class="source"><br></td></tr
><tr
id=sl_svn119_2855

><td class="source">VT100.prototype.renderString = function(s, showCursor) {<br></td></tr
><tr
id=sl_svn119_2856

><td class="source">  // We try to minimize the number of DOM operations by coalescing individual<br></td></tr
><tr
id=sl_svn119_2857

><td class="source">  // characters into strings. This is a significant performance improvement.<br></td></tr
><tr
id=sl_svn119_2858

><td class="source">  var incX = s.length;<br></td></tr
><tr
id=sl_svn119_2859

><td class="source">  if (incX &gt; this.terminalWidth - this.cursorX) {<br></td></tr
><tr
id=sl_svn119_2860

><td class="source">    incX   = this.terminalWidth - this.cursorX;<br></td></tr
><tr
id=sl_svn119_2861

><td class="source">    if (incX &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_2862

><td class="source">      return;<br></td></tr
><tr
id=sl_svn119_2863

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2864

><td class="source">    s      = s.substr(0, incX - 1) + s.charAt(s.length - 1);<br></td></tr
><tr
id=sl_svn119_2865

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2866

><td class="source">  if (showCursor) {<br></td></tr
><tr
id=sl_svn119_2867

><td class="source">    // Minimize the number of calls to putString(), by avoiding a direct<br></td></tr
><tr
id=sl_svn119_2868

><td class="source">    // call to this.showCursor()<br></td></tr
><tr
id=sl_svn119_2869

><td class="source">    this.cursor.style.visibility = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2870

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2871

><td class="source">  this.putString(this.cursorX, this.cursorY, s, this.style);<br></td></tr
><tr
id=sl_svn119_2872

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2873

><td class="source"><br></td></tr
><tr
id=sl_svn119_2874

><td class="source">VT100.prototype.vt100 = function(s) {<br></td></tr
><tr
id=sl_svn119_2875

><td class="source">  this.cursorNeedsShowing = this.hideCursor();<br></td></tr
><tr
id=sl_svn119_2876

><td class="source">  this.respondString      = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2877

><td class="source">  var lineBuf             = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2878

><td class="source">  for (var i = 0; i &lt; s.length; i++) {<br></td></tr
><tr
id=sl_svn119_2879

><td class="source">    var ch = s.charCodeAt(i);<br></td></tr
><tr
id=sl_svn119_2880

><td class="source">    if (this.utfEnabled) {<br></td></tr
><tr
id=sl_svn119_2881

><td class="source">      // Decode UTF8 encoded character<br></td></tr
><tr
id=sl_svn119_2882

><td class="source">      if (ch &gt; 0x7F) {<br></td></tr
><tr
id=sl_svn119_2883

><td class="source">        if (this.utfCount &gt; 0 &amp;&amp; (ch &amp; 0xC0) == 0x80) {<br></td></tr
><tr
id=sl_svn119_2884

><td class="source">          this.utfChar    = (this.utfChar &lt;&lt; 6) | (ch &amp; 0x3F);<br></td></tr
><tr
id=sl_svn119_2885

><td class="source">          if (--this.utfCount &lt;= 0) {<br></td></tr
><tr
id=sl_svn119_2886

><td class="source">            if (this.utfChar &gt; 0xFFFF || this.utfChar &lt; 0) {<br></td></tr
><tr
id=sl_svn119_2887

><td class="source">              ch = 0xFFFD;<br></td></tr
><tr
id=sl_svn119_2888

><td class="source">            } else {<br></td></tr
><tr
id=sl_svn119_2889

><td class="source">              ch          = this.utfChar;<br></td></tr
><tr
id=sl_svn119_2890

><td class="source">            }<br></td></tr
><tr
id=sl_svn119_2891

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn119_2892

><td class="source">            continue;<br></td></tr
><tr
id=sl_svn119_2893

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_2894

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn119_2895

><td class="source">          if ((ch &amp; 0xE0) == 0xC0) {<br></td></tr
><tr
id=sl_svn119_2896

><td class="source">            this.utfCount = 1;<br></td></tr
><tr
id=sl_svn119_2897

><td class="source">            this.utfChar  = ch &amp; 0x1F;<br></td></tr
><tr
id=sl_svn119_2898

><td class="source">          } else if ((ch &amp; 0xF0) == 0xE0) {<br></td></tr
><tr
id=sl_svn119_2899

><td class="source">            this.utfCount = 2;<br></td></tr
><tr
id=sl_svn119_2900

><td class="source">            this.utfChar  = ch &amp; 0x0F;<br></td></tr
><tr
id=sl_svn119_2901

><td class="source">          } else if ((ch &amp; 0xF8) == 0xF0) {<br></td></tr
><tr
id=sl_svn119_2902

><td class="source">            this.utfCount = 3;<br></td></tr
><tr
id=sl_svn119_2903

><td class="source">            this.utfChar  = ch &amp; 0x07;<br></td></tr
><tr
id=sl_svn119_2904

><td class="source">          } else if ((ch &amp; 0xFC) == 0xF8) {<br></td></tr
><tr
id=sl_svn119_2905

><td class="source">            this.utfCount = 4;<br></td></tr
><tr
id=sl_svn119_2906

><td class="source">            this.utfChar  = ch &amp; 0x03;<br></td></tr
><tr
id=sl_svn119_2907

><td class="source">          } else if ((ch &amp; 0xFE) == 0xFC) {<br></td></tr
><tr
id=sl_svn119_2908

><td class="source">            this.utfCount = 5;<br></td></tr
><tr
id=sl_svn119_2909

><td class="source">            this.utfChar  = ch &amp; 0x01;<br></td></tr
><tr
id=sl_svn119_2910

><td class="source">          } else {<br></td></tr
><tr
id=sl_svn119_2911

><td class="source">            this.utfCount = 0;<br></td></tr
><tr
id=sl_svn119_2912

><td class="source">          }<br></td></tr
><tr
id=sl_svn119_2913

><td class="source">          continue;<br></td></tr
><tr
id=sl_svn119_2914

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2915

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn119_2916

><td class="source">        this.utfCount     = 0;<br></td></tr
><tr
id=sl_svn119_2917

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2918

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2919

><td class="source">    var isNormalCharacter =<br></td></tr
><tr
id=sl_svn119_2920

><td class="source">      (ch &gt;= 32 &amp;&amp; ch &lt;= 127 || ch &gt;= 160 ||<br></td></tr
><tr
id=sl_svn119_2921

><td class="source">       this.utfEnabled &amp;&amp; ch &gt;= 128 ||<br></td></tr
><tr
id=sl_svn119_2922

><td class="source">       !(this.dispCtrl ? this.ctrlAlways : this.ctrlAction)[ch &amp; 0x1F]) &amp;&amp;<br></td></tr
><tr
id=sl_svn119_2923

><td class="source">      (ch != 0x7F || this.dispCtrl);<br></td></tr
><tr
id=sl_svn119_2924

><td class="source">    <br></td></tr
><tr
id=sl_svn119_2925

><td class="source">    if (isNormalCharacter &amp;&amp; this.isEsc == 0 /* ESnormal */) {<br></td></tr
><tr
id=sl_svn119_2926

><td class="source">      if (ch &lt; 256) {<br></td></tr
><tr
id=sl_svn119_2927

><td class="source">        ch                = this.translate[this.toggleMeta ? (ch | 0x80) : ch];<br></td></tr
><tr
id=sl_svn119_2928

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2929

><td class="source">      if ((ch &amp; 0xFF00) == 0xF000) {<br></td></tr
><tr
id=sl_svn119_2930

><td class="source">        ch                = ch &amp; 0xFF;<br></td></tr
><tr
id=sl_svn119_2931

><td class="source">      } else if (ch == 0xFEFF || (ch &gt;= 0x200A &amp;&amp; ch &lt;= 0x200F)) {<br></td></tr
><tr
id=sl_svn119_2932

><td class="source">        continue;<br></td></tr
><tr
id=sl_svn119_2933

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2934

><td class="source">      if (this.needWrap || this.insertMode) {<br></td></tr
><tr
id=sl_svn119_2935

><td class="source">        if (lineBuf) {<br></td></tr
><tr
id=sl_svn119_2936

><td class="source">          this.renderString(lineBuf);<br></td></tr
><tr
id=sl_svn119_2937

><td class="source">          lineBuf         = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2938

><td class="source">        }<br></td></tr
><tr
id=sl_svn119_2939

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2940

><td class="source">      if (this.needWrap) {<br></td></tr
><tr
id=sl_svn119_2941

><td class="source">        this.cr(); this.lf();<br></td></tr
><tr
id=sl_svn119_2942

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2943

><td class="source">      if (this.insertMode) {<br></td></tr
><tr
id=sl_svn119_2944

><td class="source">        this.scrollRegion(this.cursorX, this.cursorY,<br></td></tr
><tr
id=sl_svn119_2945

><td class="source">                          this.terminalWidth - this.cursorX - 1, 1,<br></td></tr
><tr
id=sl_svn119_2946

><td class="source">                          1, 0, this.style);<br></td></tr
><tr
id=sl_svn119_2947

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2948

><td class="source">      this.lastCharacter  = String.fromCharCode(ch);<br></td></tr
><tr
id=sl_svn119_2949

><td class="source">      lineBuf            += this.lastCharacter;<br></td></tr
><tr
id=sl_svn119_2950

><td class="source">      if (this.cursorX + lineBuf.length &gt;= this.terminalWidth) {<br></td></tr
><tr
id=sl_svn119_2951

><td class="source">        this.needWrap     = this.autoWrapMode;<br></td></tr
><tr
id=sl_svn119_2952

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2953

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn119_2954

><td class="source">      if (lineBuf) {<br></td></tr
><tr
id=sl_svn119_2955

><td class="source">        this.renderString(lineBuf);<br></td></tr
><tr
id=sl_svn119_2956

><td class="source">        lineBuf           = &#39;&#39;;<br></td></tr
><tr
id=sl_svn119_2957

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2958

><td class="source">      var expand          = this.doControl(ch);<br></td></tr
><tr
id=sl_svn119_2959

><td class="source">      if (expand.length) {<br></td></tr
><tr
id=sl_svn119_2960

><td class="source">        var r             = this.respondString;<br></td></tr
><tr
id=sl_svn119_2961

><td class="source">        this.respondString= r + this.vt100(expand);<br></td></tr
><tr
id=sl_svn119_2962

><td class="source">      }<br></td></tr
><tr
id=sl_svn119_2963

><td class="source">    }<br></td></tr
><tr
id=sl_svn119_2964

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2965

><td class="source">  if (lineBuf) {<br></td></tr
><tr
id=sl_svn119_2966

><td class="source">    this.renderString(lineBuf, this.cursorNeedsShowing);<br></td></tr
><tr
id=sl_svn119_2967

><td class="source">  } else if (this.cursorNeedsShowing) {<br></td></tr
><tr
id=sl_svn119_2968

><td class="source">    this.showCursor();<br></td></tr
><tr
id=sl_svn119_2969

><td class="source">  }<br></td></tr
><tr
id=sl_svn119_2970

><td class="source">  return this.respondString;<br></td></tr
><tr
id=sl_svn119_2971

><td class="source">};<br></td></tr
><tr
id=sl_svn119_2972

><td class="source"><br></td></tr
><tr
id=sl_svn119_2973

><td class="source">VT100.prototype.Latin1Map = [<br></td></tr
><tr
id=sl_svn119_2974

><td class="source">0x0000, 0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007,<br></td></tr
><tr
id=sl_svn119_2975

><td class="source">0x0008, 0x0009, 0x000A, 0x000B, 0x000C, 0x000D, 0x000E, 0x000F,<br></td></tr
><tr
id=sl_svn119_2976

><td class="source">0x0010, 0x0011, 0x0012, 0x0013, 0x0014, 0x0015, 0x0016, 0x0017,<br></td></tr
><tr
id=sl_svn119_2977

><td class="source">0x0018, 0x0019, 0x001A, 0x001B, 0x001C, 0x001D, 0x001E, 0x001F,<br></td></tr
><tr
id=sl_svn119_2978

><td class="source">0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027,<br></td></tr
><tr
id=sl_svn119_2979

><td class="source">0x0028, 0x0029, 0x002A, 0x002B, 0x002C, 0x002D, 0x002E, 0x002F,<br></td></tr
><tr
id=sl_svn119_2980

><td class="source">0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037,<br></td></tr
><tr
id=sl_svn119_2981

><td class="source">0x0038, 0x0039, 0x003A, 0x003B, 0x003C, 0x003D, 0x003E, 0x003F,<br></td></tr
><tr
id=sl_svn119_2982

><td class="source">0x0040, 0x0041, 0x0042, 0x0043, 0x0044, 0x0045, 0x0046, 0x0047,<br></td></tr
><tr
id=sl_svn119_2983

><td class="source">0x0048, 0x0049, 0x004A, 0x004B, 0x004C, 0x004D, 0x004E, 0x004F,<br></td></tr
><tr
id=sl_svn119_2984

><td class="source">0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 0x0056, 0x0057,<br></td></tr
><tr
id=sl_svn119_2985

><td class="source">0x0058, 0x0059, 0x005A, 0x005B, 0x005C, 0x005D, 0x005E, 0x005F,<br></td></tr
><tr
id=sl_svn119_2986

><td class="source">0x0060, 0x0061, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067,<br></td></tr
><tr
id=sl_svn119_2987

><td class="source">0x0068, 0x0069, 0x006A, 0x006B, 0x006C, 0x006D, 0x006E, 0x006F,<br></td></tr
><tr
id=sl_svn119_2988

><td class="source">0x0070, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077,<br></td></tr
><tr
id=sl_svn119_2989

><td class="source">0x0078, 0x0079, 0x007A, 0x007B, 0x007C, 0x007D, 0x007E, 0x007F,<br></td></tr
><tr
id=sl_svn119_2990

><td class="source">0x0080, 0x0081, 0x0082, 0x0083, 0x0084, 0x0085, 0x0086, 0x0087,<br></td></tr
><tr
id=sl_svn119_2991

><td class="source">0x0088, 0x0089, 0x008A, 0x008B, 0x008C, 0x008D, 0x008E, 0x008F,<br></td></tr
><tr
id=sl_svn119_2992

><td class="source">0x0090, 0x0091, 0x0092, 0x0093, 0x0094, 0x0095, 0x0096, 0x0097,<br></td></tr
><tr
id=sl_svn119_2993

><td class="source">0x0098, 0x0099, 0x009A, 0x009B, 0x009C, 0x009D, 0x009E, 0x009F,<br></td></tr
><tr
id=sl_svn119_2994

><td class="source">0x00A0, 0x00A1, 0x00A2, 0x00A3, 0x00A4, 0x00A5, 0x00A6, 0x00A7,<br></td></tr
><tr
id=sl_svn119_2995

><td class="source">0x00A8, 0x00A9, 0x00AA, 0x00AB, 0x00AC, 0x00AD, 0x00AE, 0x00AF,<br></td></tr
><tr
id=sl_svn119_2996

><td class="source">0x00B0, 0x00B1, 0x00B2, 0x00B3, 0x00B4, 0x00B5, 0x00B6, 0x00B7,<br></td></tr
><tr
id=sl_svn119_2997

><td class="source">0x00B8, 0x00B9, 0x00BA, 0x00BB, 0x00BC, 0x00BD, 0x00BE, 0x00BF,<br></td></tr
><tr
id=sl_svn119_2998

><td class="source">0x00C0, 0x00C1, 0x00C2, 0x00C3, 0x00C4, 0x00C5, 0x00C6, 0x00C7,<br></td></tr
><tr
id=sl_svn119_2999

><td class="source">0x00C8, 0x00C9, 0x00CA, 0x00CB, 0x00CC, 0x00CD, 0x00CE, 0x00CF,<br></td></tr
><tr
id=sl_svn119_3000

><td class="source">0x00D0, 0x00D1, 0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6, 0x00D7,<br></td></tr
><tr
id=sl_svn119_3001

><td class="source">0x00D8, 0x00D9, 0x00DA, 0x00DB, 0x00DC, 0x00DD, 0x00DE, 0x00DF,<br></td></tr
><tr
id=sl_svn119_3002

><td class="source">0x00E0, 0x00E1, 0x00E2, 0x00E3, 0x00E4, 0x00E5, 0x00E6, 0x00E7,<br></td></tr
><tr
id=sl_svn119_3003

><td class="source">0x00E8, 0x00E9, 0x00EA, 0x00EB, 0x00EC, 0x00ED, 0x00EE, 0x00EF,<br></td></tr
><tr
id=sl_svn119_3004

><td class="source">0x00F0, 0x00F1, 0x00F2, 0x00F3, 0x00F4, 0x00F5, 0x00F6, 0x00F7,<br></td></tr
><tr
id=sl_svn119_3005

><td class="source">0x00F8, 0x00F9, 0x00FA, 0x00FB, 0x00FC, 0x00FD, 0x00FE, 0x00FF<br></td></tr
><tr
id=sl_svn119_3006

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3007

><td class="source"><br></td></tr
><tr
id=sl_svn119_3008

><td class="source">VT100.prototype.VT100GraphicsMap = [<br></td></tr
><tr
id=sl_svn119_3009

><td class="source">0x0000, 0x0001, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007,<br></td></tr
><tr
id=sl_svn119_3010

><td class="source">0x0008, 0x0009, 0x000A, 0x000B, 0x000C, 0x000D, 0x000E, 0x000F,<br></td></tr
><tr
id=sl_svn119_3011

><td class="source">0x0010, 0x0011, 0x0012, 0x0013, 0x0014, 0x0015, 0x0016, 0x0017,<br></td></tr
><tr
id=sl_svn119_3012

><td class="source">0x0018, 0x0019, 0x001A, 0x001B, 0x001C, 0x001D, 0x001E, 0x001F,<br></td></tr
><tr
id=sl_svn119_3013

><td class="source">0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027,<br></td></tr
><tr
id=sl_svn119_3014

><td class="source">0x0028, 0x0029, 0x002A, 0x2192, 0x2190, 0x2191, 0x2193, 0x002F,<br></td></tr
><tr
id=sl_svn119_3015

><td class="source">0x2588, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037,<br></td></tr
><tr
id=sl_svn119_3016

><td class="source">0x0038, 0x0039, 0x003A, 0x003B, 0x003C, 0x003D, 0x003E, 0x003F,<br></td></tr
><tr
id=sl_svn119_3017

><td class="source">0x0040, 0x0041, 0x0042, 0x0043, 0x0044, 0x0045, 0x0046, 0x0047,<br></td></tr
><tr
id=sl_svn119_3018

><td class="source">0x0048, 0x0049, 0x004A, 0x004B, 0x004C, 0x004D, 0x004E, 0x004F,<br></td></tr
><tr
id=sl_svn119_3019

><td class="source">0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 0x0056, 0x0057,<br></td></tr
><tr
id=sl_svn119_3020

><td class="source">0x0058, 0x0059, 0x005A, 0x005B, 0x005C, 0x005D, 0x005E, 0x00A0,<br></td></tr
><tr
id=sl_svn119_3021

><td class="source">0x25C6, 0x2592, 0x2409, 0x240C, 0x240D, 0x240A, 0x00B0, 0x00B1,<br></td></tr
><tr
id=sl_svn119_3022

><td class="source">0x2591, 0x240B, 0x2518, 0x2510, 0x250C, 0x2514, 0x253C, 0xF800,<br></td></tr
><tr
id=sl_svn119_3023

><td class="source">0xF801, 0x2500, 0xF803, 0xF804, 0x251C, 0x2524, 0x2534, 0x252C,<br></td></tr
><tr
id=sl_svn119_3024

><td class="source">0x2502, 0x2264, 0x2265, 0x03C0, 0x2260, 0x00A3, 0x00B7, 0x007F,<br></td></tr
><tr
id=sl_svn119_3025

><td class="source">0x0080, 0x0081, 0x0082, 0x0083, 0x0084, 0x0085, 0x0086, 0x0087,<br></td></tr
><tr
id=sl_svn119_3026

><td class="source">0x0088, 0x0089, 0x008A, 0x008B, 0x008C, 0x008D, 0x008E, 0x008F,<br></td></tr
><tr
id=sl_svn119_3027

><td class="source">0x0090, 0x0091, 0x0092, 0x0093, 0x0094, 0x0095, 0x0096, 0x0097,<br></td></tr
><tr
id=sl_svn119_3028

><td class="source">0x0098, 0x0099, 0x009A, 0x009B, 0x009C, 0x009D, 0x009E, 0x009F,<br></td></tr
><tr
id=sl_svn119_3029

><td class="source">0x00A0, 0x00A1, 0x00A2, 0x00A3, 0x00A4, 0x00A5, 0x00A6, 0x00A7,<br></td></tr
><tr
id=sl_svn119_3030

><td class="source">0x00A8, 0x00A9, 0x00AA, 0x00AB, 0x00AC, 0x00AD, 0x00AE, 0x00AF,<br></td></tr
><tr
id=sl_svn119_3031

><td class="source">0x00B0, 0x00B1, 0x00B2, 0x00B3, 0x00B4, 0x00B5, 0x00B6, 0x00B7,<br></td></tr
><tr
id=sl_svn119_3032

><td class="source">0x00B8, 0x00B9, 0x00BA, 0x00BB, 0x00BC, 0x00BD, 0x00BE, 0x00BF,<br></td></tr
><tr
id=sl_svn119_3033

><td class="source">0x00C0, 0x00C1, 0x00C2, 0x00C3, 0x00C4, 0x00C5, 0x00C6, 0x00C7,<br></td></tr
><tr
id=sl_svn119_3034

><td class="source">0x00C8, 0x00C9, 0x00CA, 0x00CB, 0x00CC, 0x00CD, 0x00CE, 0x00CF,<br></td></tr
><tr
id=sl_svn119_3035

><td class="source">0x00D0, 0x00D1, 0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6, 0x00D7,<br></td></tr
><tr
id=sl_svn119_3036

><td class="source">0x00D8, 0x00D9, 0x00DA, 0x00DB, 0x00DC, 0x00DD, 0x00DE, 0x00DF,<br></td></tr
><tr
id=sl_svn119_3037

><td class="source">0x00E0, 0x00E1, 0x00E2, 0x00E3, 0x00E4, 0x00E5, 0x00E6, 0x00E7,<br></td></tr
><tr
id=sl_svn119_3038

><td class="source">0x00E8, 0x00E9, 0x00EA, 0x00EB, 0x00EC, 0x00ED, 0x00EE, 0x00EF,<br></td></tr
><tr
id=sl_svn119_3039

><td class="source">0x00F0, 0x00F1, 0x00F2, 0x00F3, 0x00F4, 0x00F5, 0x00F6, 0x00F7,<br></td></tr
><tr
id=sl_svn119_3040

><td class="source">0x00F8, 0x00F9, 0x00FA, 0x00FB, 0x00FC, 0x00FD, 0x00FE, 0x00FF<br></td></tr
><tr
id=sl_svn119_3041

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3042

><td class="source"><br></td></tr
><tr
id=sl_svn119_3043

><td class="source">VT100.prototype.CodePage437Map = [<br></td></tr
><tr
id=sl_svn119_3044

><td class="source">0x0000, 0x263A, 0x263B, 0x2665, 0x2666, 0x2663, 0x2660, 0x2022,<br></td></tr
><tr
id=sl_svn119_3045

><td class="source">0x25D8, 0x25CB, 0x25D9, 0x2642, 0x2640, 0x266A, 0x266B, 0x263C,<br></td></tr
><tr
id=sl_svn119_3046

><td class="source">0x25B6, 0x25C0, 0x2195, 0x203C, 0x00B6, 0x00A7, 0x25AC, 0x21A8,<br></td></tr
><tr
id=sl_svn119_3047

><td class="source">0x2191, 0x2193, 0x2192, 0x2190, 0x221F, 0x2194, 0x25B2, 0x25BC,<br></td></tr
><tr
id=sl_svn119_3048

><td class="source">0x0020, 0x0021, 0x0022, 0x0023, 0x0024, 0x0025, 0x0026, 0x0027,<br></td></tr
><tr
id=sl_svn119_3049

><td class="source">0x0028, 0x0029, 0x002A, 0x002B, 0x002C, 0x002D, 0x002E, 0x002F,<br></td></tr
><tr
id=sl_svn119_3050

><td class="source">0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037,<br></td></tr
><tr
id=sl_svn119_3051

><td class="source">0x0038, 0x0039, 0x003A, 0x003B, 0x003C, 0x003D, 0x003E, 0x003F,<br></td></tr
><tr
id=sl_svn119_3052

><td class="source">0x0040, 0x0041, 0x0042, 0x0043, 0x0044, 0x0045, 0x0046, 0x0047,<br></td></tr
><tr
id=sl_svn119_3053

><td class="source">0x0048, 0x0049, 0x004A, 0x004B, 0x004C, 0x004D, 0x004E, 0x004F,<br></td></tr
><tr
id=sl_svn119_3054

><td class="source">0x0050, 0x0051, 0x0052, 0x0053, 0x0054, 0x0055, 0x0056, 0x0057,<br></td></tr
><tr
id=sl_svn119_3055

><td class="source">0x0058, 0x0059, 0x005A, 0x005B, 0x005C, 0x005D, 0x005E, 0x005F,<br></td></tr
><tr
id=sl_svn119_3056

><td class="source">0x0060, 0x0061, 0x0062, 0x0063, 0x0064, 0x0065, 0x0066, 0x0067,<br></td></tr
><tr
id=sl_svn119_3057

><td class="source">0x0068, 0x0069, 0x006A, 0x006B, 0x006C, 0x006D, 0x006E, 0x006F,<br></td></tr
><tr
id=sl_svn119_3058

><td class="source">0x0070, 0x0071, 0x0072, 0x0073, 0x0074, 0x0075, 0x0076, 0x0077,<br></td></tr
><tr
id=sl_svn119_3059

><td class="source">0x0078, 0x0079, 0x007A, 0x007B, 0x007C, 0x007D, 0x007E, 0x2302,<br></td></tr
><tr
id=sl_svn119_3060

><td class="source">0x00C7, 0x00FC, 0x00E9, 0x00E2, 0x00E4, 0x00E0, 0x00E5, 0x00E7,<br></td></tr
><tr
id=sl_svn119_3061

><td class="source">0x00EA, 0x00EB, 0x00E8, 0x00EF, 0x00EE, 0x00EC, 0x00C4, 0x00C5,<br></td></tr
><tr
id=sl_svn119_3062

><td class="source">0x00C9, 0x00E6, 0x00C6, 0x00F4, 0x00F6, 0x00F2, 0x00FB, 0x00F9,<br></td></tr
><tr
id=sl_svn119_3063

><td class="source">0x00FF, 0x00D6, 0x00DC, 0x00A2, 0x00A3, 0x00A5, 0x20A7, 0x0192,<br></td></tr
><tr
id=sl_svn119_3064

><td class="source">0x00E1, 0x00ED, 0x00F3, 0x00FA, 0x00F1, 0x00D1, 0x00AA, 0x00BA,<br></td></tr
><tr
id=sl_svn119_3065

><td class="source">0x00BF, 0x2310, 0x00AC, 0x00BD, 0x00BC, 0x00A1, 0x00AB, 0x00BB,<br></td></tr
><tr
id=sl_svn119_3066

><td class="source">0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0x2561, 0x2562, 0x2556,<br></td></tr
><tr
id=sl_svn119_3067

><td class="source">0x2555, 0x2563, 0x2551, 0x2557, 0x255D, 0x255C, 0x255B, 0x2510,<br></td></tr
><tr
id=sl_svn119_3068

><td class="source">0x2514, 0x2534, 0x252C, 0x251C, 0x2500, 0x253C, 0x255E, 0x255F,<br></td></tr
><tr
id=sl_svn119_3069

><td class="source">0x255A, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256C, 0x2567,<br></td></tr
><tr
id=sl_svn119_3070

><td class="source">0x2568, 0x2564, 0x2565, 0x2559, 0x2558, 0x2552, 0x2553, 0x256B,<br></td></tr
><tr
id=sl_svn119_3071

><td class="source">0x256A, 0x2518, 0x250C, 0x2588, 0x2584, 0x258C, 0x2590, 0x2580,<br></td></tr
><tr
id=sl_svn119_3072

><td class="source">0x03B1, 0x00DF, 0x0393, 0x03C0, 0x03A3, 0x03C3, 0x00B5, 0x03C4,<br></td></tr
><tr
id=sl_svn119_3073

><td class="source">0x03A6, 0x0398, 0x03A9, 0x03B4, 0x221E, 0x03C6, 0x03B5, 0x2229,<br></td></tr
><tr
id=sl_svn119_3074

><td class="source">0x2261, 0x00B1, 0x2265, 0x2264, 0x2320, 0x2321, 0x00F7, 0x2248,<br></td></tr
><tr
id=sl_svn119_3075

><td class="source">0x00B0, 0x2219, 0x00B7, 0x221A, 0x207F, 0x00B2, 0x25A0, 0x00A0<br></td></tr
><tr
id=sl_svn119_3076

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3077

><td class="source"><br></td></tr
><tr
id=sl_svn119_3078

><td class="source">VT100.prototype.DirectToFontMap = [<br></td></tr
><tr
id=sl_svn119_3079

><td class="source">0xF000, 0xF001, 0xF002, 0xF003, 0xF004, 0xF005, 0xF006, 0xF007,<br></td></tr
><tr
id=sl_svn119_3080

><td class="source">0xF008, 0xF009, 0xF00A, 0xF00B, 0xF00C, 0xF00D, 0xF00E, 0xF00F,<br></td></tr
><tr
id=sl_svn119_3081

><td class="source">0xF010, 0xF011, 0xF012, 0xF013, 0xF014, 0xF015, 0xF016, 0xF017,<br></td></tr
><tr
id=sl_svn119_3082

><td class="source">0xF018, 0xF019, 0xF01A, 0xF01B, 0xF01C, 0xF01D, 0xF01E, 0xF01F,<br></td></tr
><tr
id=sl_svn119_3083

><td class="source">0xF020, 0xF021, 0xF022, 0xF023, 0xF024, 0xF025, 0xF026, 0xF027,<br></td></tr
><tr
id=sl_svn119_3084

><td class="source">0xF028, 0xF029, 0xF02A, 0xF02B, 0xF02C, 0xF02D, 0xF02E, 0xF02F,<br></td></tr
><tr
id=sl_svn119_3085

><td class="source">0xF030, 0xF031, 0xF032, 0xF033, 0xF034, 0xF035, 0xF036, 0xF037,<br></td></tr
><tr
id=sl_svn119_3086

><td class="source">0xF038, 0xF039, 0xF03A, 0xF03B, 0xF03C, 0xF03D, 0xF03E, 0xF03F,<br></td></tr
><tr
id=sl_svn119_3087

><td class="source">0xF040, 0xF041, 0xF042, 0xF043, 0xF044, 0xF045, 0xF046, 0xF047,<br></td></tr
><tr
id=sl_svn119_3088

><td class="source">0xF048, 0xF049, 0xF04A, 0xF04B, 0xF04C, 0xF04D, 0xF04E, 0xF04F,<br></td></tr
><tr
id=sl_svn119_3089

><td class="source">0xF050, 0xF051, 0xF052, 0xF053, 0xF054, 0xF055, 0xF056, 0xF057,<br></td></tr
><tr
id=sl_svn119_3090

><td class="source">0xF058, 0xF059, 0xF05A, 0xF05B, 0xF05C, 0xF05D, 0xF05E, 0xF05F,<br></td></tr
><tr
id=sl_svn119_3091

><td class="source">0xF060, 0xF061, 0xF062, 0xF063, 0xF064, 0xF065, 0xF066, 0xF067,<br></td></tr
><tr
id=sl_svn119_3092

><td class="source">0xF068, 0xF069, 0xF06A, 0xF06B, 0xF06C, 0xF06D, 0xF06E, 0xF06F,<br></td></tr
><tr
id=sl_svn119_3093

><td class="source">0xF070, 0xF071, 0xF072, 0xF073, 0xF074, 0xF075, 0xF076, 0xF077,<br></td></tr
><tr
id=sl_svn119_3094

><td class="source">0xF078, 0xF079, 0xF07A, 0xF07B, 0xF07C, 0xF07D, 0xF07E, 0xF07F,<br></td></tr
><tr
id=sl_svn119_3095

><td class="source">0xF080, 0xF081, 0xF082, 0xF083, 0xF084, 0xF085, 0xF086, 0xF087,<br></td></tr
><tr
id=sl_svn119_3096

><td class="source">0xF088, 0xF089, 0xF08A, 0xF08B, 0xF08C, 0xF08D, 0xF08E, 0xF08F,<br></td></tr
><tr
id=sl_svn119_3097

><td class="source">0xF090, 0xF091, 0xF092, 0xF093, 0xF094, 0xF095, 0xF096, 0xF097,<br></td></tr
><tr
id=sl_svn119_3098

><td class="source">0xF098, 0xF099, 0xF09A, 0xF09B, 0xF09C, 0xF09D, 0xF09E, 0xF09F,<br></td></tr
><tr
id=sl_svn119_3099

><td class="source">0xF0A0, 0xF0A1, 0xF0A2, 0xF0A3, 0xF0A4, 0xF0A5, 0xF0A6, 0xF0A7,<br></td></tr
><tr
id=sl_svn119_3100

><td class="source">0xF0A8, 0xF0A9, 0xF0AA, 0xF0AB, 0xF0AC, 0xF0AD, 0xF0AE, 0xF0AF,<br></td></tr
><tr
id=sl_svn119_3101

><td class="source">0xF0B0, 0xF0B1, 0xF0B2, 0xF0B3, 0xF0B4, 0xF0B5, 0xF0B6, 0xF0B7,<br></td></tr
><tr
id=sl_svn119_3102

><td class="source">0xF0B8, 0xF0B9, 0xF0BA, 0xF0BB, 0xF0BC, 0xF0BD, 0xF0BE, 0xF0BF,<br></td></tr
><tr
id=sl_svn119_3103

><td class="source">0xF0C0, 0xF0C1, 0xF0C2, 0xF0C3, 0xF0C4, 0xF0C5, 0xF0C6, 0xF0C7,<br></td></tr
><tr
id=sl_svn119_3104

><td class="source">0xF0C8, 0xF0C9, 0xF0CA, 0xF0CB, 0xF0CC, 0xF0CD, 0xF0CE, 0xF0CF,<br></td></tr
><tr
id=sl_svn119_3105

><td class="source">0xF0D0, 0xF0D1, 0xF0D2, 0xF0D3, 0xF0D4, 0xF0D5, 0xF0D6, 0xF0D7,<br></td></tr
><tr
id=sl_svn119_3106

><td class="source">0xF0D8, 0xF0D9, 0xF0DA, 0xF0DB, 0xF0DC, 0xF0DD, 0xF0DE, 0xF0DF,<br></td></tr
><tr
id=sl_svn119_3107

><td class="source">0xF0E0, 0xF0E1, 0xF0E2, 0xF0E3, 0xF0E4, 0xF0E5, 0xF0E6, 0xF0E7,<br></td></tr
><tr
id=sl_svn119_3108

><td class="source">0xF0E8, 0xF0E9, 0xF0EA, 0xF0EB, 0xF0EC, 0xF0ED, 0xF0EE, 0xF0EF,<br></td></tr
><tr
id=sl_svn119_3109

><td class="source">0xF0F0, 0xF0F1, 0xF0F2, 0xF0F3, 0xF0F4, 0xF0F5, 0xF0F6, 0xF0F7,<br></td></tr
><tr
id=sl_svn119_3110

><td class="source">0xF0F8, 0xF0F9, 0xF0FA, 0xF0FB, 0xF0FC, 0xF0FD, 0xF0FE, 0xF0FF<br></td></tr
><tr
id=sl_svn119_3111

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3112

><td class="source"><br></td></tr
><tr
id=sl_svn119_3113

><td class="source">VT100.prototype.ctrlAction = [<br></td></tr
><tr
id=sl_svn119_3114

><td class="source">  true,  false, false, false, false, false, false, true,<br></td></tr
><tr
id=sl_svn119_3115

><td class="source">  true,  true,  true,  true,  true,  true,  true,  true,<br></td></tr
><tr
id=sl_svn119_3116

><td class="source">  false, false, false, false, false, false, false, false,<br></td></tr
><tr
id=sl_svn119_3117

><td class="source">  true,  false, true,  true,  false, false, false, false<br></td></tr
><tr
id=sl_svn119_3118

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3119

><td class="source"><br></td></tr
><tr
id=sl_svn119_3120

><td class="source">VT100.prototype.ctrlAlways = [<br></td></tr
><tr
id=sl_svn119_3121

><td class="source">  true,  false, false, false, false, false, false, false,<br></td></tr
><tr
id=sl_svn119_3122

><td class="source">  true,  false, true,  false, true,  true,  true,  true,<br></td></tr
><tr
id=sl_svn119_3123

><td class="source">  false, false, false, false, false, false, false, false,<br></td></tr
><tr
id=sl_svn119_3124

><td class="source">  false, false, false, true,  false, false, false, false<br></td></tr
><tr
id=sl_svn119_3125

><td class="source">];<br></td></tr
><tr
id=sl_svn119_3126

><td class="source"><br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn119_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn119_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/shellinabox/source/detail?spec=svn119&amp;r=119">r119</a>
 by zodiac
 on May 21, 2009
 &nbsp; <a href="/p/shellinabox/source/diff?spec=svn119&r=119&amp;format=side&amp;path=/trunk/shellinabox/vt100.js&amp;old_path=/trunk/shellinabox/vt100.js&amp;old=118">Diff</a>
 </div>
 <pre>Fixed various issues with building on
OpenBSD
</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/shellinabox/source/detail?r=119&spec=svn119';
 var publish_url = '/p/shellinabox/source/detail?r=119&spec=svn119#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/ChangeLog');
 changed_urls.push('/p/shellinabox/source/browse/trunk/ChangeLog?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/Makefile.am');
 changed_urls.push('/p/shellinabox/source/browse/trunk/Makefile.am?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/Makefile.in');
 changed_urls.push('/p/shellinabox/source/browse/trunk/Makefile.in?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/aclocal.m4');
 changed_urls.push('/p/shellinabox/source/browse/trunk/aclocal.m4?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/config.h');
 changed_urls.push('/p/shellinabox/source/browse/trunk/config.h?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/config.h.in');
 changed_urls.push('/p/shellinabox/source/browse/trunk/config.h.in?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/configure');
 changed_urls.push('/p/shellinabox/source/browse/trunk/configure?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/configure.ac');
 changed_urls.push('/p/shellinabox/source/browse/trunk/configure.ac?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/demo/vt100.js');
 changed_urls.push('/p/shellinabox/source/browse/trunk/demo/vt100.js?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/libhttp/httpconnection.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/libhttp/httpconnection.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/libhttp/ssl.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/libhttp/ssl.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/ltmain.sh');
 changed_urls.push('/p/shellinabox/source/browse/trunk/ltmain.sh?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/externalfile.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/externalfile.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/launcher.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/launcher.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/privileges.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/privileges.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/shell_in_a_box.js');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/shell_in_a_box.js?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/shellinaboxd.c');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/shellinaboxd.c?r\x3d119\x26spec\x3dsvn119');
 
 
 changed_paths.push('/trunk/shellinabox/vt100.js');
 changed_urls.push('/p/shellinabox/source/browse/trunk/shellinabox/vt100.js?r\x3d119\x26spec\x3dsvn119');
 
 var selected_path = '/trunk/shellinabox/vt100.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/shellinabox/source/browse/trunk/ChangeLog?r=119&amp;spec=svn119"
 
 >/trunk/ChangeLog</option>
 
 <option value="/p/shellinabox/source/browse/trunk/Makefile.am?r=119&amp;spec=svn119"
 
 >/trunk/Makefile.am</option>
 
 <option value="/p/shellinabox/source/browse/trunk/Makefile.in?r=119&amp;spec=svn119"
 
 >/trunk/Makefile.in</option>
 
 <option value="/p/shellinabox/source/browse/trunk/aclocal.m4?r=119&amp;spec=svn119"
 
 >/trunk/aclocal.m4</option>
 
 <option value="/p/shellinabox/source/browse/trunk/config.h?r=119&amp;spec=svn119"
 
 >/trunk/config.h</option>
 
 <option value="/p/shellinabox/source/browse/trunk/config.h.in?r=119&amp;spec=svn119"
 
 >/trunk/config.h.in</option>
 
 <option value="/p/shellinabox/source/browse/trunk/configure?r=119&amp;spec=svn119"
 
 >/trunk/configure</option>
 
 <option value="/p/shellinabox/source/browse/trunk/configure.ac?r=119&amp;spec=svn119"
 
 >/trunk/configure.ac</option>
 
 <option value="/p/shellinabox/source/browse/trunk/demo/vt100.js?r=119&amp;spec=svn119"
 
 >/trunk/demo/vt100.js</option>
 
 <option value="/p/shellinabox/source/browse/trunk/libhttp/httpconnection.c?r=119&amp;spec=svn119"
 
 >/trunk/libhttp/httpconnection.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/libhttp/ssl.c?r=119&amp;spec=svn119"
 
 >/trunk/libhttp/ssl.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/ltmain.sh?r=119&amp;spec=svn119"
 
 >/trunk/ltmain.sh</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/externalfile.c?r=119&amp;spec=svn119"
 
 >/trunk/shellinabox/externalfile.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/launcher.c?r=119&amp;spec=svn119"
 
 >/trunk/shellinabox/launcher.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/privileges.c?r=119&amp;spec=svn119"
 
 >/trunk/shellinabox/privileges.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/shell_in_a_box.js?r=119&amp;spec=svn119"
 
 >...nk/shellinabox/shell_in_a_box.js</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/shellinaboxd.c?r=119&amp;spec=svn119"
 
 >/trunk/shellinabox/shellinaboxd.c</option>
 
 <option value="/p/shellinabox/source/browse/trunk/shellinabox/vt100.js?r=119&amp;spec=svn119"
 selected="selected"
 >/trunk/shellinabox/vt100.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fp%2Fshellinabox%2Fsource%2Fbrowse%2Ftrunk%2Fshellinabox%2Fvt100.js%3Fr%3D119&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fshellinabox%2Fsource%2Fbrowse%2Ftrunk%2Fshellinabox%2Fvt100.js%3Fr%3D119"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/shellinabox/source/detail?spec=svn119&r=118">r118</a>
 by zodiac
 on Apr 28, 2009
 &nbsp; <a href="/p/shellinabox/source/diff?spec=svn119&r=118&amp;format=side&amp;path=/trunk/shellinabox/vt100.js&amp;old_path=/trunk/shellinabox/vt100.js&amp;old=117">Diff</a>
 <br>
 <pre class="ifOpened">Fixed variable expansion in service
descriptions.
</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/shellinabox/source/detail?spec=svn119&r=117">r117</a>
 by zodiac
 on Apr 27, 2009
 &nbsp; <a href="/p/shellinabox/source/diff?spec=svn119&r=117&amp;format=side&amp;path=/trunk/shellinabox/vt100.js&amp;old_path=/trunk/shellinabox/vt100.js&amp;old=115">Diff</a>
 <br>
 <pre class="ifOpened">Released version 2.7
</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/shellinabox/source/detail?spec=svn119&r=115">r115</a>
 by zodiac
 on Apr 16, 2009
 &nbsp; <a href="/p/shellinabox/source/diff?spec=svn119&r=115&amp;format=side&amp;path=/trunk/shellinabox/vt100.js&amp;old_path=/trunk/shellinabox/vt100.js&amp;old=113">Diff</a>
 <br>
 <pre class="ifOpened">- Make the code actually do, what the
comments say (i.e. skip PAM account
  management, if we don't have the
privileges to do so, anyway)
- Make ssl.h compile again, even if
...</pre>
 </div>
 
 
 <a href="/p/shellinabox/source/list?path=/trunk/shellinabox/vt100.js&start=119">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 120096 bytes,
 3126 lines</div>
 
 <div><a href="//shellinabox.googlecode.com/svn-history/r119/trunk/shellinabox/vt100.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>


<script src="http://www.gstatic.com/codesite/ph/11681492690915673504/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/11681492690915673504/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn119': '/trunk/shellinabox/vt100.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"token":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/11681492690915673504","projectHomeUrl":"/p/shellinabox","relativeBaseUrl":"","projectName":"shellinabox","loggedInUserEmail":null}, '', 'svn119', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/11681492690915673504/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/11681492690915673504/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 &copy;2011 Google -
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

