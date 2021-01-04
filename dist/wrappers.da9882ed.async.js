(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    kizw: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a('q1tI'),
        u = a.n(n),
        r = a('9kvl'),
        c = t => {
          var e = t.children,
            a = t.auth;
          t.authLoading;
          return (
            Object(n['useEffect'])(() => {
              a();
            }, []),
            u.a.createElement('div', null, e)
          );
        },
        i = t => ({
          auth: () => {
            t({ type: 'Auth/auth' });
          },
        }),
        d = t => {
          t.loading;
          return {};
        };
      e['default'] = Object(r['a'])(d, i)(c);
    },
  },
]);
