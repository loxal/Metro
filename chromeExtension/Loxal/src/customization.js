/*
 * Copyright 2011 Alexander Orlov <alexander.orlov@loxal.net>. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

switch (window.location.host) {
    case "kunde.comdirect.de":
        document.getElementById("login").setAttribute("autocomplete", "on");
        break;
    case "news.google.com":
        var newsWithoutHeadlines = "http://news.google.com/?hdlOnly=1";
        if (window.location.href != newsWithoutHeadlines) {
            window.location = newsWithoutHeadlines;
        }
        break;
    default:
    {
        window.stop();
        document.getElementsByTagName("html")[0].style.display = "none";
        document.title = "Move along, Sir!";
        window.document.writeln("...waste of time!");
    }
}