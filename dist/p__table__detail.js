(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '1b0M': function(e, t, a) {
      'use strict';
      a.r(t);
      a('miYZ');
      var l = a('tsqr'),
        r = (a('6UJt'), a('DFOY')),
        n = a('wx14'),
        c = (a('7Kak'), a('9yH6')),
        s = (a('+L6B'), a('2/Rp')),
        o = (a('5NDa'), a('5rEg')),
        d = (a('sPJy'), a('bE4q')),
        m = (a('sRBo'), a('kaz8')),
        i = (a('y8nQ'), a('Vl3Y')),
        h = a('ODXe'),
        g = (a('Znn+'), a('ZTPi')),
        u = (a('nRaC'), a('5RzL')),
        E = (a('iQDF'), a('+eQT')),
        y = (a('+BJd'), a('mr32')),
        b = (a('OaEy'), a('2fM7')),
        w = a('q1tI'),
        p = a.n(w),
        C = (a('l+hh'), a('9kvl')),
        v = a('wd/R'),
        k = a.n(v),
        O = (b['a'].Option, y['a'].CheckableTag),
        j = ['\u8fd1\u4e00\u4e2a\u6708', '\u8fd1\u4e09\u4e2a\u6708'],
        D = (E['a'].MonthPicker, E['a'].RangePicker, u['a'].SHOW_PARENT),
        x = u['a'].SHOW_ALL,
        I = {
          labelCol: { xs: { span: 24 }, sm: { span: 4 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 8 } },
        },
        F = {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 4 },
          },
        },
        S = g['a'].TabPane;
      function V(e) {
        var t = e.userAdd,
          a = (e.dimension, e.changeDi),
          y = e.userTactics,
          b = e.userDict,
          C = e.btreeData,
          v = e.btreeData1,
          V = e.btreeData2,
          f = e.btreeData3,
          B = e.catreeData,
          A = e.catreeData2,
          T = e.catreeData3,
          N = e.brtreeData1,
          _ = e.brtreeData2,
          z = e.brtreeData3,
          P = e.broptions,
          L = e.options,
          q = e.options1,
          K = e.sendMon,
          R = e.date_type,
          W = (e.expire_date, e.sendDate),
          M = e.strategy,
          Y = e.strategy1,
          Z = e.strategy2,
          $ = e.strategy3,
          G = e.cstrategy1,
          J = e.cstrategy2,
          H = e.cstrategy3,
          Q = e.bstrategy,
          U = e.bstrategy1,
          X = e.bstrategy2,
          ee = e.bstrategy3,
          te = e.sendCheckBox,
          ae = e.sendCheckBox1,
          le = e.sendCheckBox2,
          re = e.sendCheckBox3,
          ne = e.sendCheckBoxca,
          ce = e.sendCheckBox2ca,
          se = e.sendCheckBox3ca,
          oe = e.sendCheckBoxbr,
          de = e.sendCheckBox1br,
          me = e.sendCheckBox2br,
          ie = e.sendCheckBox3br,
          he = e.onInit,
          ge = e.history,
          ue = i['a'].useForm(),
          Ee = Object(h['a'])(ue, 1),
          ye = Ee[0],
          be = Object(w['useState'])('default'),
          we = Object(h['a'])(be, 2),
          pe = we[0],
          Ce = (we[1], Object(w['useState'])('1')),
          ve = Object(h['a'])(Ce, 2),
          ke = ve[0],
          Oe = ve[1],
          je = Object(w['useState'])([]),
          De = Object(h['a'])(je, 2),
          xe = De[0],
          Ie = De[1],
          Fe = (e, t) => {
            var a = t ? [e] : xe;
            Ie(a), console.log(a), K(a);
          };
        Object(w['useEffect'])(() => {
          y(), b(), he();
        }, []);
        var Se = Object(w['useState'])([]),
          Ve = Object(h['a'])(Se, 2),
          fe = Ve[0],
          Be = Ve[1],
          Ae = Object(w['useState'])([]),
          Te = Object(h['a'])(Ae, 2),
          Ne = Te[0],
          _e = Te[1],
          ze = Object(w['useState'])([]),
          Pe = Object(h['a'])(ze, 2),
          Le = Pe[0],
          qe = Pe[1],
          Ke = Object(w['useState'])([]),
          Re = Object(h['a'])(Ke, 2),
          We = Re[0],
          Me = Re[1],
          Ye = ['\u5355\u7ef4'],
          Ze = ['\u591a\u7ef4'],
          $e = m['a'].Group,
          Ge = Object(w['useState'])([]),
          Je = Object(h['a'])(Ge, 2),
          He = Je[0],
          Qe = Je[1],
          Ue = Object(w['useState'])(!1),
          Xe = Object(h['a'])(Ue, 2),
          et = Xe[0],
          tt = Xe[1],
          at = Object(w['useState'])([]),
          lt = Object(h['a'])(at, 2),
          rt = lt[0],
          nt = lt[1],
          ct = Object(w['useState'])(!1),
          st = Object(h['a'])(ct, 2),
          ot = st[0],
          dt = st[1],
          mt = Object(w['useState'])([]),
          it = Object(h['a'])(mt, 2),
          ht = it[0],
          gt = it[1],
          ut = Object(w['useState'])(!1),
          Et = Object(h['a'])(ut, 2),
          yt = Et[0],
          bt = Et[1],
          wt = Object(w['useState'])([]),
          pt = Object(h['a'])(wt, 2),
          Ct = pt[0],
          vt = pt[1],
          kt = Object(w['useState'])(!1),
          Ot = Object(h['a'])(kt, 2),
          jt = Ot[0],
          Dt = Ot[1],
          xt = Object(w['useState'])([]),
          It = Object(h['a'])(xt, 2),
          Ft = It[0],
          St = It[1],
          Vt = Object(w['useState'])(!1),
          ft = Object(h['a'])(Vt, 2),
          Bt = ft[0],
          At = ft[1],
          Tt = Object(w['useState'])([]),
          Nt = Object(h['a'])(Tt, 2),
          _t = Nt[0],
          zt = Nt[1],
          Pt = Object(w['useState'])(!1),
          Lt = Object(h['a'])(Pt, 2),
          qt = Lt[0],
          Kt = Lt[1],
          Rt = Object(w['useState'])([]),
          Wt = Object(h['a'])(Rt, 2),
          Mt = Wt[0],
          Yt = Wt[1],
          Zt = Object(w['useState'])(!1),
          $t = Object(h['a'])(Zt, 2),
          Gt = $t[0],
          Jt = $t[1],
          Ht = Object(w['useState'])([]),
          Qt = Object(h['a'])(Ht, 2),
          Ut = Qt[0],
          Xt = Qt[1],
          ea = Object(w['useState'])(!1),
          ta = Object(h['a'])(ea, 2),
          aa = ta[0],
          la = ta[1],
          ra = Object(w['useState'])([]),
          na = Object(h['a'])(ra, 2),
          ca = na[0],
          sa = na[1],
          oa = Object(w['useState'])(!1),
          da = Object(h['a'])(oa, 2),
          ma = da[0],
          ia = da[1],
          ha = Object(w['useState'])([]),
          ga = Object(h['a'])(ha, 2),
          ua = ga[0],
          Ea = ga[1],
          ya = Object(w['useState'])(!1),
          ba = Object(h['a'])(ya, 2),
          wa = ba[0],
          pa = ba[1],
          Ca = Object(w['useState'])([]),
          va = Object(h['a'])(Ca, 2),
          ka = va[0],
          Oa = va[1],
          ja = Object(w['useState'])(!1),
          Da = Object(h['a'])(ja, 2),
          xa = Da[0],
          Ia = Da[1],
          Fa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010101') &&
                ye.getFieldValue('010101').length > 0) ||
              (ye.getFieldValue('010102') &&
                ye.getFieldValue('010102').length > 0);
            a(l), console.log(l), r ? (te(e), t(r)) : (t(r), te([]));
          },
          Sa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('020101') &&
                ye.getFieldValue('020101').length > 0) ||
              (ye.getFieldValue('020102') &&
                ye.getFieldValue('020102').length > 0);
            a(l), r ? (ne(e), t(r)) : (t(r), ne([]));
          },
          Va = (e, t, a) => l => {
            var r =
              ye.getFieldValue('030501') &&
              ye.getFieldValue('030501').length > 0;
            a(l), r ? (oe(e), t(r)) : (t(r), oe([]));
          },
          fa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010201') &&
                ye.getFieldValue('010201').length > 0) ||
              (ye.getFieldValue('010202') &&
                ye.getFieldValue('010202').length > 0);
            a(l), r ? (ae(e), t(r)) : (t(r), ae([]));
          },
          Ba = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('030201') &&
                ye.getFieldValue('030201').length > 0) ||
              (ye.getFieldValue('030202') &&
                ye.getFieldValue('030202').length > 0);
            a(l), r ? (de(e), t(r)) : (t(r), de([]));
          },
          Aa = (e, t, a) => l => {
            var r =
              ye.getFieldValue('010302') &&
              ye.getFieldValue('010302').length > 0;
            a(l), r ? (le(e), t(r)) : (t(r), le([]));
          },
          Ta = (e, t, a) => l => {
            var r =
              ye.getFieldValue('020302') &&
              ye.getFieldValue('020302').length > 0;
            a(l), r ? (ce(e), t(r)) : (t(r), ce([]));
          },
          Na = (e, t, a) => l => {
            var r =
              ye.getFieldValue('030302') &&
              ye.getFieldValue('030302').length > 0;
            a(l), r ? (me(e), t(r)) : (t(r), me([]));
          },
          _a = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010401') &&
                ye.getFieldValue('010401').length > 0) ||
              (ye.getFieldValue('010402') &&
                ye.getFieldValue('010402').length > 0);
            a(l), r ? (re(e), t(r)) : (t(r), re([]));
          },
          za = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('020401') &&
                ye.getFieldValue('020401').length > 0) ||
              (ye.getFieldValue('020402') &&
                ye.getFieldValue('020402').length > 0);
            a(l), r ? (se(e), t(r)) : (t(r), se([]));
          },
          Pa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('030401') &&
                ye.getFieldValue('030401').length > 0) ||
              (ye.getFieldValue('030402') &&
                ye.getFieldValue('030402').length > 0);
            a(l), r ? (ie(e), t(r)) : (t(r), ie([]));
          },
          La = e => {
            tt(e.target.checked),
              e.target.checked || Qe([]),
              e.target.checked ? te(['0101']) : te([]);
          },
          qa = e => {
            dt(e.target.checked),
              e.target.checked || nt([]),
              e.target.checked ? ne(['0201']) : ne([]);
          },
          Ka = e => {
            bt(e.target.checked),
              e.target.checked || gt([]),
              e.target.checked ? oe(['0305']) : oe([]);
          },
          Ra = e => {
            Dt(e.target.checked), e.target.checked ? ae(['0102']) : ae([]);
          },
          Wa = e => {
            At(e.target.checked), e.target.checked ? de(['0302']) : de([]);
          },
          Ma = e => {
            Kt(e.target.checked), e.target.checked ? le(['0103']) : le([]);
          },
          Ya = e => {
            Jt(e.target.checked), e.target.checked ? ce(['0203']) : ce([]);
          },
          Za = e => {
            la(e.target.checked), e.target.checked ? me(['0303']) : me([]);
          },
          $a = e => {
            ia(e.target.checked), e.target.checked ? re(['0104']) : re([]);
          },
          Ga = e => {
            pa(e.target.checked), e.target.checked ? se(['0204']) : se([]);
          },
          Ja = e => {
            Ia(e.target.checked), e.target.checked ? ie(['0304']) : ie([]);
          },
          Ha = Object(w['useState'])([]),
          Qa = Object(h['a'])(Ha, 2),
          Ua = Qa[0],
          Xa = Qa[1],
          el = e => {
            Be(e);
          },
          tl = e => {
            _e(e);
          },
          al = e => {
            qe(e);
          },
          ll = e => {
            Me(e);
          },
          rl = e => {
            Xa(e);
          },
          nl = {
            treeData: C,
            value: fe,
            onChange: el,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { marginTop: 50, width: 220 },
          },
          cl = {
            treeData: v,
            value: Ne,
            onChange: tl,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u4f20\u64ad\u65f6\u95f4-\u5f71\u54cd\u529b',
            allowClear: !0,
            style: { width: 220, right: 100, marginTop: 40 },
          },
          sl = {
            treeData: V,
            value: Le,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 220, right: 100 },
          },
          ol = {
            treeData: f,
            value: We,
            onChange: ll,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u8d8b\u52bf-\u5173\u8054\u54c1\u724c\u6570',
            allowClear: !0,
            style: { width: 220, right: 100, marginTop: 40 },
          },
          dl = {
            treeData: B,
            value: fe,
            onChange: el,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          ml = {
            treeData: A,
            value: fe,
            onChange: el,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200 },
          },
          il = {
            treeData: T,
            value: fe,
            onChange: el,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          hl = {
            treeData: N,
            value: Ne,
            onChange: tl,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u4f20\u64ad\u65f6\u95f4\u4e0e\u5f71\u54cd\u529b',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          gl = {
            treeData: _,
            value: Le,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200 },
          },
          ul = {
            treeData: z,
            value: We,
            onChange: ll,
            treeCheckable: !0,
            showCheckedStrategy: D,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u54c1\u7c7b\u8d8b\u52bf',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          El = {
            treeData: P,
            value: Ua,
            onChange: rl,
            treeCheckable: !0,
            showCheckedStrategy: x,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !1,
            placeholder: '\u7f8e\u5986',
            allowClear: !0,
          },
          yl = e => {
            a(e);
          },
          bl = e => {
            Oe(e);
          },
          wl = e => {
            console.log(e);
          },
          pl = e => e.join(' / '),
          Cl = e => e && e < k()().endOf('day'),
          vl = '',
          kl = 'YYYY-MM-DD',
          Ol = (e, t) => {
            W(t), console.log(e, t);
          };
        return p.a.createElement(
          'div',
          { className: 'header' },
          p.a.createElement(
            d['a'],
            { style: { marginBottom: 20 } },
            p.a.createElement(
              d['a'].Item,
              {
                href: '#',
                onClick: () => {
                  ge.push('/table/list');
                },
              },
              p.a.createElement('span', null, '\u4efb\u52a1\u7ba1\u7406'),
            ),
            p.a.createElement(d['a'].Item, null, '\u6dfb\u52a0\u4efb\u52a1'),
          ),
          p.a.createElement(
            g['a'],
            {
              defaultActiveKey: '1',
              type: 'card',
              size: pe,
              activeKey: ke,
              onChange: e => {
                Oe(e);
              },
            },
            p.a.createElement(
              S,
              { tab: '\u57fa\u7840\u4fe1\u606f', key: '1' },
              p.a.createElement(
                i['a'],
                Object(n['a'])({}, I, {
                  size: pe,
                  form: ye,
                  name: 'register',
                  initialValues: {
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                  },
                  scrollToFirstError: !0,
                }),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'name',
                    label: p.a.createElement(
                      'span',
                      null,
                      '\u5ba2\u6237\u540d\u79f0',
                    ),
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u5ba2\u6237\u540d\u79f0!',
                        whitespace: !0,
                      },
                    ],
                  },
                  p.a.createElement(o['a'], null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'nickname',
                    label: p.a.createElement(
                      'span',
                      null,
                      '\u7528\u6237\u6635\u79f0',
                    ),
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0!',
                        whitespace: !0,
                      },
                    ],
                  },
                  p.a.createElement(o['a'], null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'email',
                    label: '\u767b\u5f55\u90ae\u7bb1',
                    rules: [
                      {
                        type: 'email',
                        message:
                          '\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u8d26\u53f7!',
                      },
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u767b\u5f55\u8d26\u53f7!',
                      },
                    ],
                  },
                  p.a.createElement(o['a'], null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'password',
                    label: '\u767b\u5f55\u5bc6\u7801',
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801!',
                      },
                      e => {
                        e.getFieldValue;
                        return {
                          validator(e, t) {
                            var a = new RegExp(
                              /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/g,
                            );
                            return a.test(t)
                              ? Promise.resolve()
                              : Promise.reject(
                                  '\u767b\u5f55\u5bc6\u7801\u987b\u7b26\u5408\u957f\u5ea6\u4e3a8~16\u4f4d\uff0c\u8bf7\u4ece\u82f1\u6587\u5b57\u6bcd\u5927\u3001\u5c0f\u5199\u3001\u7b26\u53f7\u3001\u6570\u5b57\u7b49\u60c5\u5f62\u4e2d\uff0c\u4efb\u9009\u4e09\u79cd\u8fdb\u884c\u7ec4\u5408\u3002',
                                );
                          },
                        };
                      },
                    ],
                    hasFeedback: !0,
                  },
                  p.a.createElement(o['a'].Password, null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'confirm',
                    label: '\u786e\u8ba4\u5bc6\u7801',
                    dependencies: ['password'],
                    hasFeedback: !0,
                    rules: [
                      {
                        required: !0,
                        message: '\u8bf7\u786e\u8ba4\u767b\u5f55\u5bc6\u7801!',
                      },
                      e => {
                        var t = e.getFieldValue;
                        return {
                          validator(e, a) {
                            return a && t('password') !== a
                              ? Promise.reject(
                                  '\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4!',
                                )
                              : Promise.resolve();
                          },
                        };
                      },
                    ],
                  },
                  p.a.createElement(o['a'].Password, null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'login_count',
                    label: '\u540c\u65f6\u767b\u5f55\u8bbe\u5907\u6570',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8bf7\u8f93\u5165\u767b\u5f55\u8bbe\u5907\u7684\u6570\u91cf',
                      },
                      e => {
                        e.getFieldValue;
                        return {
                          validator(e, t) {
                            return t && parseInt(t).toString() != t
                              ? Promise.reject(
                                  '\u767b\u5f55\u8bbe\u5907\u6570\u5fc5\u987b\u662f\u7eaf\u6570\u5b57',
                                )
                              : Promise.resolve();
                          },
                        };
                      },
                    ],
                  },
                  p.a.createElement(o['a'], null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'expire_date',
                    label: '\u8d26\u53f7\u6709\u6548\u671f',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8bf7\u8f93\u5165\u8d26\u53f7\u7684\u6709\u6548\u671f!',
                      },
                    ],
                  },
                  p.a.createElement(E['a'], {
                    disabledDate: Cl,
                    value: void 0 === vl ? null : [k()(vl, kl)],
                    style: { width: '100%' },
                    placeholder: '\u5230\u671f\u65f6\u95f4',
                    onChange: Ol,
                  }),
                ),
                p.a.createElement(
                  i['a'].Item,
                  { name: 'tel', label: '\u8054\u7cfb\u7535\u8bdd' },
                  p.a.createElement(o['a'], { style: { width: '100%' } }),
                ),
                p.a.createElement(
                  i['a'].Item,
                  {
                    name: 'sale_master',
                    label: '\u9500\u552e\u8d1f\u8d23\u4eba',
                  },
                  p.a.createElement(o['a'], null),
                ),
                p.a.createElement(
                  i['a'].Item,
                  Object(n['a'])({}, F, { value: ke, onChange: bl }),
                  p.a.createElement(
                    c['a'].Group,
                    { value: ke, onChange: bl },
                    p.a.createElement(
                      s['a'],
                      {
                        onClick: () => {
                          ye.validateFields()
                            .then(e => {
                              bl('2');
                            })
                            .catch(e => {
                              console.log('Validate Failed:', e);
                            });
                        },
                        value: '2',
                        style: { width: '200px' },
                      },
                      '\u786e\u8ba4',
                    ),
                  ),
                ),
              ),
            ),
            p.a.createElement(
              S,
              {
                tab: '\u5de5\u574a\u914d\u7f6e',
                key: '2',
                style: { height: 'auto' },
              },
              p.a.createElement(
                i['a'],
                Object(n['a'])({}, I, {
                  size: pe,
                  form: ye,
                  name: 'monitor',
                  scrollToFirstError: !0,
                }),
                p.a.createElement(
                  'div',
                  { className: 'lineOne' },
                  p.a.createElement(
                    'span',
                    { style: { fontWeight: 900 } },
                    '\u76d1\u6d4b\u65f6\u95f4',
                  ),
                  j.map(e =>
                    p.a.createElement(
                      i['a'].Item,
                      { name: 'date_type', style: { width: 250 }, key: e },
                      p.a.createElement(
                        O,
                        {
                          key: e,
                          checked: xe.indexOf(e) > -1,
                          onChange: t => Fe(e, t),
                          style: {
                            paddingLeft: '25px',
                            cursor: 'pointer',
                            width: 100,
                          },
                        },
                        e,
                      ),
                    ),
                  ),
                ),
              ),
              p.a.createElement(
                'div',
                { className: 'lineTwo' },
                p.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u6d1e\u89c1\u8303\u56f4',
                ),
                p.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u7b56\u7565\u7ec4\u5408',
                ),
                p.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u5206\u6790\u7ef4\u5ea6',
                ),
              ),
              p.a.createElement(
                g['a'],
                {
                  defaultActiveKey: '1',
                  type: 'card',
                  size: pe,
                  tabPosition: 'left',
                  style: { height: 'auto' },
                  tabBarGutter: 75,
                  value: ke,
                  onChange: yl,
                },
                p.a.createElement(
                  S,
                  { tab: '\u884c\u4e1a', key: '1' },
                  p.a.createElement(
                    i['a'],
                    Object(n['a'])({}, I, {
                      size: pe,
                      form: ye,
                      name: 'industry',
                      scrollToFirstError: !0,
                      initialValues: {
                        industry: ['1'],
                        intree1: ['010102'],
                        intree2: ['01020201'],
                        intree3: ['010302'],
                        intree4: ['01040201'],
                      },
                    }),
                    p.a.createElement(
                      'div',
                      { className: 'industryOne' },
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'industry', style: { width: 300 } },
                          p.a.createElement(r['a'], {
                            options: q,
                            expandTrigger: 'hover',
                            displayRender: pl,
                            onChange: wl,
                            placeholder: '\u7f8e\u5986',
                            allowClear: !1,
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0101', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: La, checked: et },
                            '\u54c1\u724c\u6d1e\u89c1',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        { style: { width: 200 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010101', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: He,
                            onChange: Fa(['0101'], tt, Qe),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010102', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: He,
                            onChange: Fa(['0101'], tt, Qe),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        i['a'].Item,
                        { name: 'intree1' },
                        p.a.createElement(u['a'], nl),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'industryTwo' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0102', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ra, checked: jt },
                            '\u6218\u5f79\u4e3b\u9898',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010201', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: Ct,
                            onChange: fa(['0102'], Dt, vt),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010202', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: Ct,
                            onChange: fa(['0102'], Dt, vt),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'intree2', style: { width: 320 } },
                          p.a.createElement(u['a'], cl),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'industryThree' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0103', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ma, checked: qt },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010302', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: _t,
                            onChange: Aa(['0103'], Kt, zt),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'intree3', style: { width: 320 } },
                          p.a.createElement(u['a'], sl),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'industryFour' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0104', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: $a, checked: ma },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010401', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: ca,
                            onChange: _a(['0104'], ia, sa),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '010402', style: { width: 300 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: ca,
                            onChange: _a(['0104'], ia, sa),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'intree4' },
                          p.a.createElement(u['a'], ol),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      i['a'].Item,
                      F,
                      p.a.createElement(
                        c['a'].Group,
                        null,
                        p.a.createElement(
                          s['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  R
                                    ? M.length ||
                                      Y.length ||
                                      Z.length ||
                                      $.length
                                      ? !M.length || e['010101'] || e['010102']
                                        ? !Y.length ||
                                          e['010201'] ||
                                          e['010202']
                                          ? !Z.length || e['010302']
                                            ? !$.length ||
                                              e['010401'] ||
                                              e['010402']
                                              ? (console.log(e), t(e))
                                              : l['a'].error(
                                                  '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                                )
                                            : l['a'].error(
                                                '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                              )
                                          : l['a'].error(
                                              '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                            )
                                        : l['a'].error(
                                            '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          )
                                      : l['a'].error(
                                          '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                        )
                                    : l['a'].error(
                                        '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                      );
                                })
                                .catch(e => {
                                  l['a'].warn(
                                    '\u8bf7\u60a8\u5148\u586b\u5199\u5b8c\u6574\u57fa\u7840\u4fe1\u606f',
                                  ),
                                    console.log('Validate Failed:', e);
                                });
                            },
                            style: { width: '200px' },
                          },
                          '\u786e\u8ba4',
                        ),
                      ),
                    ),
                  ),
                ),
                p.a.createElement(
                  S,
                  { tab: '\u54c1\u7c7b', key: '2' },
                  p.a.createElement(
                    i['a'],
                    Object(n['a'])({}, I, {
                      size: pe,
                      form: ye,
                      name: 'category',
                      scrollToFirstError: !0,
                      initialValues: {
                        category: ['1'],
                        catree1: ['020102'],
                        catree3: ['020302'],
                        catree4: ['02040201'],
                      },
                    }),
                    p.a.createElement(
                      'div',
                      { className: 'categoryOne' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0201', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: qa, checked: ot },
                            '\u54c1\u724c\u6d1e\u89c1',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '020101', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: rt,
                            onChange: Sa(['0201'], dt, nt),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '020102', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: rt,
                            onChange: Sa(['0201'], dt, nt),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        i['a'].Item,
                        { name: 'catree1' },
                        p.a.createElement(u['a'], dl),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'categoryThree' },
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'category', style: { width: 300 } },
                          p.a.createElement(r['a'], {
                            options: L,
                            expandTrigger: 'hover',
                            displayRender: pl,
                            onChange: wl,
                            placeholder: '\u7f8e\u5986',
                            allowClear: !1,
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0203', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ya, checked: Gt },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '020302', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: Mt,
                            onChange: Ta(['0203'], Jt, Yt),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'catree3' },
                          p.a.createElement(u['a'], ml),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'categoryFour' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0204', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ga, checked: wa },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '020401', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: ua,
                            onChange: za(['0204'], pa, Ea),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '020402', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: ua,
                            onChange: za(['0204'], pa, Ea),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'catree4' },
                          p.a.createElement(u['a'], il),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      i['a'].Item,
                      F,
                      p.a.createElement(
                        c['a'].Group,
                        null,
                        p.a.createElement(
                          s['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  console.log(e),
                                    R
                                      ? G.length || J.length || H.length
                                        ? !G.length ||
                                          e['020101'] ||
                                          e['020102']
                                          ? !J.length || e['020302']
                                            ? !H.length ||
                                              e['020401'] ||
                                              e['020402']
                                              ? t(e)
                                              : l['a'].error(
                                                  '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                                )
                                            : l['a'].error(
                                                '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                              )
                                          : l['a'].error(
                                              '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                            )
                                        : l['a'].error(
                                            '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                          )
                                      : l['a'].error(
                                          '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                        );
                                })
                                .catch(e => {
                                  l['a'].warn(
                                    '\u8bf7\u60a8\u5148\u586b\u5199\u5b8c\u6574\u57fa\u7840\u4fe1\u606f',
                                  ),
                                    console.log('Validate Failed:', e);
                                });
                            },
                            style: { width: '200px' },
                          },
                          '\u786e\u8ba4',
                        ),
                      ),
                    ),
                  ),
                ),
                p.a.createElement(
                  S,
                  { tab: '\u54c1\u724c', key: '3' },
                  p.a.createElement(
                    i['a'],
                    Object(n['a'])({}, I, {
                      size: pe,
                      form: ye,
                      name: 'brandname',
                      scrollToFirstError: !0,
                      initialValues: {
                        brand: ['1'],
                        brtree2: ['03020201'],
                        brtree3: ['030302'],
                        brtree4: ['03040201'],
                      },
                    }),
                    p.a.createElement(
                      'div',
                      { className: 'brandOne' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0305', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ka, checked: yt },
                            '\u70ed\u95e8\u5185\u5bb9',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030501', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: ht,
                            onChange: Va(['0305'], bt, gt),
                          }),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'brandTwo' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0302', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Wa, checked: Bt },
                            '\u6218\u5f79\u4e3b\u9898',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030201', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: Ft,
                            onChange: Ba(['0302'], At, St),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030202', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: Ft,
                            onChange: Ba(['0302'], At, St),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'brtree2' },
                          p.a.createElement(u['a'], hl),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'brandThree' },
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0303', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Za, checked: aa },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030302', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ze,
                            value: Ut,
                            onChange: Na(['0303'], la, Xt),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'brtree3' },
                          p.a.createElement(u['a'], gl),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      'div',
                      { className: 'brandFour' },
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'brand', style: { width: 300 } },
                          p.a.createElement(u['a'], El),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        p.a.createElement(
                          i['a'].Item,
                          { name: '0304', style: { width: 300 } },
                          p.a.createElement(
                            m['a'],
                            { onChange: Ja, checked: xa },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030401', style: { width: 200 } },
                          p.a.createElement($e, {
                            options: Ye,
                            value: ka,
                            onChange: Pa(['0304'], Ia, Oa),
                          }),
                        ),
                        p.a.createElement(
                          i['a'].Item,
                          { name: '030402' },
                          p.a.createElement($e, {
                            options: Ze,
                            value: ka,
                            onChange: Pa(['0304'], Ia, Oa),
                          }),
                        ),
                      ),
                      p.a.createElement(
                        'div',
                        null,
                        p.a.createElement(
                          i['a'].Item,
                          { name: 'brtree4' },
                          p.a.createElement(u['a'], ul),
                        ),
                      ),
                    ),
                    p.a.createElement(
                      i['a'].Item,
                      F,
                      p.a.createElement(
                        c['a'].Group,
                        null,
                        p.a.createElement(
                          s['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  console.log(e),
                                    R
                                      ? Q.length ||
                                        U.length ||
                                        X.length ||
                                        ee.length
                                        ? !Q.length || e['030501']
                                          ? !U.length ||
                                            e['030201'] ||
                                            e['030202']
                                            ? !X.length || e['030302']
                                              ? !ee.length ||
                                                e['030401'] ||
                                                e['030402']
                                                ? e['brand'].length > 6
                                                  ? l['a'].error(
                                                      '\u8bf7\u6700\u591a\u9009\u62e95\u4e2a\u54c1\u724c',
                                                    )
                                                  : t(e)
                                                : l['a'].error(
                                                    '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                                  )
                                              : l['a'].error(
                                                  '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                                )
                                            : l['a'].error(
                                                '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                              )
                                          : l['a'].error(
                                              '\u8bf7\u9009\u62e9\u70ed\u95e8\u5185\u5bb9\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                            )
                                        : l['a'].error(
                                            '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                          )
                                      : l['a'].error(
                                          '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                        );
                                })
                                .catch(e => {
                                  l['a'].warn(
                                    '\u8bf7\u60a8\u5148\u586b\u5199\u5b8c\u6574\u57fa\u7840\u4fe1\u606f',
                                  ),
                                    console.log('Validate Failed:', e);
                                });
                            },
                            style: { width: '200px' },
                          },
                          '\u786e\u8ba4',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      var f = e => {
          var t = e.detail;
          return {
            dimension: t.dimension,
            dataSource: t.dataSource,
            intree: t.intree,
            btreeData: t.btreeData,
            btreeData1: t.btreeData1,
            btreeData2: t.btreeData2,
            btreeData3: t.btreeData3,
            catreeData: t.catreeData,
            catreeData2: t.catreeData2,
            catreeData3: t.catreeData3,
            brtreeData1: t.brtreeData1,
            brtreeData2: t.brtreeData2,
            brtreeData3: t.brtreeData3,
            broptions: t.broptions,
            options1: t.options1,
            options: t.options,
            date_type: t.date_type,
            expire_date: t.expire_date,
            strategy: t.strategy,
            strategy1: t.strategy1,
            strategy2: t.strategy2,
            strategy3: t.strategy3,
            cstrategy1: t.cstrategy1,
            cstrategy2: t.cstrategy2,
            cstrategy3: t.cstrategy3,
            bstrategy: t.bstrategy,
            bstrategy1: t.bstrategy1,
            bstrategy2: t.bstrategy2,
            bstrategy3: t.bstrategy3,
          };
        },
        B = e => ({
          userAdd: t => {
            e({ type: 'detail/userAdd', values: t });
          },
          changeDi: t => {
            e({ type: 'detail/changeDi', e: t });
          },
          userTactics: () => {
            e({ type: 'detail/userTactics' });
          },
          userDict: () => {
            e({ type: 'detail/userDict' });
          },
          sendMon: t => {
            e({ type: 'detail/sendMon', mon: t });
          },
          sendDate: t => {
            e({ type: 'detail/sendDate', date: t });
          },
          sendCheckBox: t => {
            e({ type: 'detail/sendCheckBox', st: t });
          },
          sendCheckBox1: t => {
            e({ type: 'detail/sendCheckBox1', st: t });
          },
          sendCheckBox2: t => {
            e({ type: 'detail/sendCheckBox2', st: t });
          },
          sendCheckBox3: t => {
            e({ type: 'detail/sendCheckBox3', st: t });
          },
          sendCheckBoxca: t => {
            e({ type: 'detail/sendCheckBoxca', st: t });
          },
          sendCheckBox2ca: t => {
            e({ type: 'detail/sendCheckBox2ca', st: t });
          },
          sendCheckBox3ca: t => {
            e({ type: 'detail/sendCheckBox3ca', st: t });
          },
          sendCheckBoxbr: t => {
            e({ type: 'detail/sendCheckBoxbr', st: t });
          },
          sendCheckBox1br: t => {
            e({ type: 'detail/sendCheckBox1br', st: t });
          },
          sendCheckBox2br: t => {
            e({ type: 'detail/sendCheckBox2br', st: t });
          },
          sendCheckBox3br: t => {
            e({ type: 'detail/sendCheckBox3br', st: t });
          },
          onInit: () => {
            e({ type: 'detail/onInit' });
          },
        });
      t['default'] = Object(C['a'])(f, B)(V);
    },
    'l+hh': function(e, t, a) {},
  },
]);
