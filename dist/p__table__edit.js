(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    YJA8: function(e, t, a) {
      'use strict';
      a.r(t);
      a('6UJt');
      var l = a('DFOY'),
        r = (a('miYZ'), a('tsqr')),
        n = (a('OaEy'), a('2fM7')),
        c = a('wx14'),
        s = (a('7Kak'), a('9yH6')),
        i = (a('+L6B'), a('2/Rp')),
        d = (a('iQDF'), a('+eQT')),
        o = (a('5NDa'), a('5rEg')),
        m = (a('sPJy'), a('bE4q')),
        h = (a('sRBo'), a('kaz8')),
        u = (a('y8nQ'), a('Vl3Y')),
        g = a('ODXe'),
        y = (a('Znn+'), a('ZTPi')),
        b = (a('nRaC'), a('5RzL')),
        E = (a('+BJd'), a('mr32')),
        v = a('q1tI'),
        k = a.n(v),
        p = (a('l+hh'), a('9kvl')),
        w = a('wd/R'),
        O = a.n(w),
        C =
          (E['a'].CheckableTag,
          [
            { name: '\u8fd11\u4e2a\u6708', value: 1 },
            { name: '\u8fd13\u4e2a\u6708', value: 3 },
          ]),
        j = b['a'].SHOW_PARENT,
        f =
          (b['a'].SHOW_ALL,
          {
            labelCol: { xs: { span: 24 }, sm: { span: 4 } },
            wrapperCol: { xs: { span: 24 }, sm: { span: 8 } },
          }),
        F = {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 4 },
          },
        },
        D = y['a'].TabPane;
      function S(e) {
        var t = e.userAddEdit,
          a = e.changeDi,
          E = e.userTactics,
          p = e.userDict,
          w = e.btreeData,
          S = e.btreeData1,
          V = e.btreeData2,
          I = e.btreeData3,
          x = e.catreeData,
          B = e.catreeData2,
          A = e.catreeData3,
          T = e.brtreeData1,
          _ = e.brtreeData2,
          N = e.brtreeData3,
          K = e.broptions,
          L = e.options,
          q = e.options1,
          z = (e.sendMon, e.date_type1, e.expire_date, e.dimension, e.sendDate),
          P = e.strategy,
          Y = e.strategy1,
          G = e.strategy2,
          J = e.strategy3,
          R = e.cstrategy1,
          M = e.cstrategy2,
          W = e.cstrategy3,
          H = e.bstrategy,
          Q = e.bstrategy1,
          Z = e.bstrategy2,
          U = e.bstrategy3,
          X = e.sendCheckBox,
          $ = e.sendCheckBox1,
          ee = e.sendCheckBox2,
          te = e.sendCheckBox3,
          ae = e.sendCheckBoxca,
          le = e.sendCheckBox2ca,
          re = e.sendCheckBox3ca,
          ne = e.sendCheckBoxbr,
          ce = e.sendCheckBox1br,
          se = e.sendCheckBox2br,
          ie = e.sendCheckBox3br,
          de = e.onInit,
          oe = e.editData,
          me = (e.getEdit, e.history),
          he = (e.recordDim, e.dim, me.location.query.uid);
        console.log(he);
        var ue = u['a'].useForm(),
          ge = Object(g['a'])(ue, 1),
          ye = ge[0],
          be = oe['dimension'];
        console.log(be, oe['dimension']);
        var Ee = Object(v['useState'])('default'),
          ve = Object(g['a'])(Ee, 2),
          ke = ve[0],
          pe = (ve[1], Object(v['useState'])('1')),
          we = Object(g['a'])(pe, 2),
          Oe = we[0],
          Ce = we[1],
          je = Object(v['useState'])(be),
          fe = Object(g['a'])(je, 2),
          Fe = fe[0],
          De = fe[1];
        console.log(Fe),
          Object(v['useEffect'])(() => {
            De(be);
          }, [be]);
        var Se = Object(v['useState'])([]),
          Ve = Object(g['a'])(Se, 2),
          Ie = (Ve[0], Ve[1], Object(v['useState'])([])),
          xe = Object(g['a'])(Ie, 2),
          Be = xe[0],
          Ae = xe[1],
          Te = Object(v['useState'])([]),
          _e = Object(g['a'])(Te, 2),
          Ne = _e[0],
          Ke = _e[1],
          Le = Object(v['useState'])([]),
          qe = Object(g['a'])(Le, 2),
          ze = qe[0],
          Pe = qe[1],
          Ye = Object(v['useState'])([]),
          Ge = Object(g['a'])(Ye, 2),
          Je = Ge[0],
          Re = Ge[1],
          Me = ['\u5355\u7ef4'],
          We = ['\u591a\u7ef4'],
          He = h['a'].Group,
          Qe = Object(v['useState'])([]),
          Ze = Object(g['a'])(Qe, 2),
          Ue = Ze[0],
          Xe = Ze[1],
          $e = Object(v['useState'])(!1),
          et = Object(g['a'])($e, 2),
          tt = et[0],
          at = et[1],
          lt = Object(v['useState'])([]),
          rt = Object(g['a'])(lt, 2),
          nt = rt[0],
          ct = rt[1],
          st = Object(v['useState'])(!1),
          it = Object(g['a'])(st, 2),
          dt = it[0],
          ot = it[1],
          mt = Object(v['useState'])([]),
          ht = Object(g['a'])(mt, 2),
          ut = ht[0],
          gt = ht[1],
          yt = Object(v['useState'])(!1),
          bt = Object(g['a'])(yt, 2),
          Et = bt[0],
          vt = bt[1],
          kt = Object(v['useState'])([]),
          pt = Object(g['a'])(kt, 2),
          wt = pt[0],
          Ot = pt[1],
          Ct = Object(v['useState'])(!1),
          jt = Object(g['a'])(Ct, 2),
          ft = jt[0],
          Ft = jt[1],
          Dt = Object(v['useState'])([]),
          St = Object(g['a'])(Dt, 2),
          Vt = St[0],
          It = St[1],
          xt = Object(v['useState'])(!1),
          Bt = Object(g['a'])(xt, 2),
          At = Bt[0],
          Tt = Bt[1],
          _t = Object(v['useState'])([]),
          Nt = Object(g['a'])(_t, 2),
          Kt = Nt[0],
          Lt = Nt[1],
          qt = Object(v['useState'])(!1),
          zt = Object(g['a'])(qt, 2),
          Pt = zt[0],
          Yt = zt[1],
          Gt = Object(v['useState'])([]),
          Jt = Object(g['a'])(Gt, 2),
          Rt = Jt[0],
          Mt = Jt[1],
          Wt = Object(v['useState'])(!1),
          Ht = Object(g['a'])(Wt, 2),
          Qt = Ht[0],
          Zt = Ht[1],
          Ut = Object(v['useState'])([]),
          Xt = Object(g['a'])(Ut, 2),
          $t = Xt[0],
          ea = Xt[1],
          ta = Object(v['useState'])(!1),
          aa = Object(g['a'])(ta, 2),
          la = aa[0],
          ra = aa[1],
          na = Object(v['useState'])([]),
          ca = Object(g['a'])(na, 2),
          sa = ca[0],
          ia = ca[1],
          da = Object(v['useState'])(!1),
          oa = Object(g['a'])(da, 2),
          ma = oa[0],
          ha = oa[1],
          ua = Object(v['useState'])([]),
          ga = Object(g['a'])(ua, 2),
          ya = ga[0],
          ba = ga[1],
          Ea = Object(v['useState'])(!1),
          va = Object(g['a'])(Ea, 2),
          ka = va[0],
          pa = va[1],
          wa = Object(v['useState'])([]),
          Oa = Object(g['a'])(wa, 2),
          Ca = Oa[0],
          ja = Oa[1],
          fa = Object(v['useState'])(!1),
          Fa = Object(g['a'])(fa, 2),
          Da = Fa[0],
          Sa = Fa[1];
        Object(v['useEffect'])(() => {
          E(), p(), de();
        }, []);
        var Va = () => {
          if (
            '{}' != JSON.stringify(oe) &&
            (ye.setFieldsValue({
              name1: oe['name'],
              nickname1: oe['nickname'],
              email1: oe['email'],
              password1: '',
              login_count1: oe['login_count'],
              expire_date1: O()(oe['expire_date'], 'YYYY-MM-DD'),
              tel1: oe['tel'],
              sale_master1: oe['sale_master'],
              date_type: oe.date_type,
              industry: oe['industry'].toString(),
              category: oe['category']
                ? [oe['industry'].toString(), oe['category'].toString()]
                : ['1'],
              brand: oe['brand']
                ? [oe['industry'].toString(), ...oe['brand']]
                : ['1'],
            }),
            oe['tactics'])
          ) {
            var e = Object.keys(oe['tactics'])[0],
              t = oe['tactics'][e];
            return (
              '03' === e &&
                (t['0305'] &&
                  (ye.setFieldsValue({
                    '030501':
                      '030501' === Object.keys(t['0305'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                  }),
                  vt(!0),
                  ne(['0305'])),
                t['0302'] &&
                  (ye.setFieldsValue({
                    '030201':
                      '030201' === Object.keys(t['0302'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '030202':
                      '030202' === Object.keys(t['0302'])[1] ||
                      '030202' === Object.keys(t['0302'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('030202' !== Object.keys(t['0302'])[1] &&
                    '030202' !== Object.keys(t['0302'])[0]) ||
                    ye.setFieldsValue({ brtree2: ['03020201'] }),
                  Tt(!0),
                  ce(['0302'])),
                t['0303'] &&
                  (ye.setFieldsValue({
                    '030302':
                      '030302' === Object.keys(t['0303'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  Object.keys(t['0303'])[0] &&
                    ye.setFieldsValue({
                      brtree3: t['0303']['030302']
                        ? t['0303']['030302']
                        : ['030302'],
                    }),
                  ra(!0),
                  se(['0303'])),
                t['0304'] &&
                  (ye.setFieldsValue({
                    '030401':
                      '030401' === Object.keys(t['0304'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '030402':
                      '030402' === Object.keys(t['0304'])[1] ||
                      '030402' === Object.keys(t['0304'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('030402' !== Object.keys(t['0304'])[1] &&
                    '030402' !== Object.keys(t['0304'])[0]) ||
                    ye.setFieldsValue({ brtree4: ['03040201'] }),
                  Sa(!0),
                  ie(['0304']))),
              '01' === e &&
                (t['0101'] &&
                  (ye.setFieldsValue({
                    '010101':
                      '010101' === Object.keys(t['0101'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '010102':
                      '010102' === Object.keys(t['0101'])[1] ||
                      '010102' === Object.keys(t['0101'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('010102' !== Object.keys(t['0101'])[1] &&
                    '010102' !== Object.keys(t['0101'])[0]) ||
                    ye.setFieldsValue({
                      intree1: t['0101']['010102']
                        ? t['0101']['010102']
                        : ['010102'],
                    }),
                  at(!0),
                  X(['0101'])),
                t['0102'] &&
                  (ye.setFieldsValue({
                    '010201':
                      '010201' === Object.keys(t['0102'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '010202':
                      '010202' === Object.keys(t['0102'])[1] ||
                      '010202' === Object.keys(t['0102'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('010202' !== Object.keys(t['0102'])[1] &&
                    '010202' !== Object.keys(t['0102'])[0]) ||
                    ye.setFieldsValue({ intree2: ['01020201'] }),
                  Ft(!0),
                  $(['0102'])),
                t['0103'] &&
                  (ye.setFieldsValue({
                    '010302':
                      '010302' === Object.keys(t['0103'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  Object.keys(t['0103'])[0] &&
                    ye.setFieldsValue({
                      intree3: t['0103']['010302']
                        ? t['0103']['010302']
                        : ['010302'],
                    }),
                  Yt(!0),
                  ee(['0103'])),
                t['0104'] &&
                  (ye.setFieldsValue({
                    '010401':
                      '010401' === Object.keys(t['0104'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '010402':
                      '010402' === Object.keys(t['0104'])[1] ||
                      '010402' === Object.keys(t['0104'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('010402' !== Object.keys(t['0104'])[1] &&
                    '010402' !== Object.keys(t['0104'])[0]) ||
                    ye.setFieldsValue({ intree4: ['01040201'] }),
                  ha(!0),
                  te(['0104']))),
              '02' === e &&
                (t['0201'] &&
                  (ye.setFieldsValue({
                    '020101':
                      '020101' === Object.keys(t['0201'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '020102':
                      '020102' === Object.keys(t['0201'])[1] ||
                      '020102' === Object.keys(t['0201'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('020102' !== Object.keys(t['0201'])[1] &&
                    '020102' !== Object.keys(t['0201'])[0]) ||
                    ye.setFieldsValue({
                      catree1: t['0201']['020102']
                        ? t['0201']['020102']
                        : ['020102'],
                    }),
                  ot(!0),
                  ae(['0201'])),
                t['0203'] &&
                  (ye.setFieldsValue({
                    '020302':
                      '020302' === Object.keys(t['0203'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  Object.keys(t['0203'])[0] &&
                    ye.setFieldsValue({
                      catree3: t['0203']['020302']
                        ? t['0203']['020302']
                        : ['020302'],
                    }),
                  Zt(!0),
                  le(['0203'])),
                t['0204'] &&
                  (ye.setFieldsValue({
                    '020401':
                      '020401' === Object.keys(t['0204'])[0]
                        ? ['\u5355\u7ef4']
                        : void 0,
                    '020402':
                      '020402' === Object.keys(t['0204'])[1] ||
                      '020402' === Object.keys(t['0204'])[0]
                        ? ['\u591a\u7ef4']
                        : void 0,
                  }),
                  ('020402' !== Object.keys(t['0204'])[1] &&
                    '020402' !== Object.keys(t['0204'])[0]) ||
                    ye.setFieldsValue({ catree4: ['02040201'] }),
                  pa(!0),
                  re(['0204']))),
              oe
            );
          }
        };
        Object(v['useEffect'])(() => {
          Va();
        }, [oe]);
        var Ia = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010101') &&
                ye.getFieldValue('010101').length > 0) ||
              (ye.getFieldValue('010102') &&
                ye.getFieldValue('010102').length > 0);
            a(l), r ? (X(e), t(r)) : (t(r), X([]));
          },
          xa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('020101') &&
                ye.getFieldValue('020101').length > 0) ||
              (ye.getFieldValue('020102') &&
                ye.getFieldValue('020102').length > 0);
            a(l), r ? (ae(e), t(r)) : (t(r), ae([]));
          },
          Ba = (e, t, a) => l => {
            var r =
              ye.getFieldValue('030501') &&
              ye.getFieldValue('030501').length > 0;
            a(l), r ? (ne(e), t(r)) : (t(r), ne([]));
          },
          Aa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010201') &&
                ye.getFieldValue('010201').length > 0) ||
              (ye.getFieldValue('010202') &&
                ye.getFieldValue('010202').length > 0);
            a(l), r ? ($(e), t(r)) : (t(r), $([]));
          },
          Ta = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('030201') &&
                ye.getFieldValue('030201').length > 0) ||
              (ye.getFieldValue('030202') &&
                ye.getFieldValue('030202').length > 0);
            a(l), r ? (ce(e), t(r)) : (t(r), ce([]));
          },
          _a = (e, t, a) => l => {
            var r =
              ye.getFieldValue('010302') &&
              ye.getFieldValue('010302').length > 0;
            a(l), r ? (ee(e), t(r)) : (t(r), ee([]));
          },
          Na = (e, t, a) => l => {
            var r =
              ye.getFieldValue('020302') &&
              ye.getFieldValue('020302').length > 0;
            a(l), r ? (le(e), t(r)) : (t(r), le([]));
          },
          Ka = (e, t, a) => l => {
            var r =
              ye.getFieldValue('030302') &&
              ye.getFieldValue('030302').length > 0;
            a(l), r ? (se(e), t(r)) : (t(r), se([]));
          },
          La = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('010401') &&
                ye.getFieldValue('010401').length > 0) ||
              (ye.getFieldValue('010402') &&
                ye.getFieldValue('010402').length > 0);
            a(l), r ? (te(e), t(r)) : (t(r), te([]));
          },
          qa = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('020401') &&
                ye.getFieldValue('020401').length > 0) ||
              (ye.getFieldValue('020402') &&
                ye.getFieldValue('020402').length > 0);
            a(l), r ? (re(e), t(r)) : (t(r), re([]));
          },
          za = (e, t, a) => l => {
            var r =
              (ye.getFieldValue('030401') &&
                ye.getFieldValue('030401').length > 0) ||
              (ye.getFieldValue('030402') &&
                ye.getFieldValue('030402').length > 0);
            a(l), r ? (ie(e), t(r)) : (t(r), ie([]));
          },
          Pa = e => {
            at(e.target.checked),
              e.target.checked || Xe([]),
              e.target.checked ? X(['0101']) : X([]);
          },
          Ya = e => {
            ot(e.target.checked),
              e.target.checked || ct([]),
              e.target.checked ? ae(['0201']) : ae([]);
          },
          Ga = e => {
            vt(e.target.checked),
              e.target.checked || gt([]),
              e.target.checked ? ne(['0305']) : ne([]);
          },
          Ja = e => {
            Ft(e.target.checked), e.target.checked ? $(['0102']) : $([]);
          },
          Ra = e => {
            Tt(e.target.checked), e.target.checked ? ce(['0302']) : ce([]);
          },
          Ma = e => {
            Yt(e.target.checked), e.target.checked ? ee(['0103']) : ee([]);
          },
          Wa = e => {
            Zt(e.target.checked), e.target.checked ? le(['0203']) : le([]);
          },
          Ha = e => {
            ra(e.target.checked), e.target.checked ? se(['0303']) : se([]);
          },
          Qa = e => {
            ha(e.target.checked), e.target.checked ? te(['0104']) : te([]);
          },
          Za = e => {
            pa(e.target.checked), e.target.checked ? re(['0204']) : re([]);
          },
          Ua = e => {
            Sa(e.target.checked), e.target.checked ? ie(['0304']) : ie([]);
          },
          Xa = Object(v['useState'])([]),
          $a = Object(g['a'])(Xa, 2),
          el = $a[0],
          tl = $a[1],
          al = e => {
            Ae(e);
          },
          ll = e => {
            Ke(e);
          },
          rl = e => {
            Pe(e);
          },
          nl = e => {
            Re(e);
          },
          cl = e => {
            tl(e);
          },
          sl = {
            treeData: w,
            value: Be,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 220, marginTop: 50 },
          },
          il = {
            treeData: S,
            value: Ne,
            onChange: ll,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u4f20\u64ad\u65f6\u95f4-\u5f71\u54cd\u529b',
            allowClear: !0,
            style: { width: 220, right: 100, marginTop: 40 },
          },
          dl = {
            treeData: V,
            value: ze,
            onChange: rl,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 220, right: 100 },
          },
          ol = {
            treeData: I,
            value: Je,
            onChange: nl,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u8d8b\u52bf-\u5173\u8054\u54c1\u724c\u6570',
            allowClear: !0,
            style: { width: 220, right: 100, marginTop: 40 },
          },
          ml = {
            treeData: x,
            value: Be,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          hl = {
            treeData: B,
            value: Be,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200 },
          },
          ul = {
            treeData: A,
            value: Be,
            onChange: al,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          gl = {
            treeData: T,
            value: Ne,
            onChange: ll,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u4f20\u64ad\u65f6\u95f4\u4e0e\u5f71\u54cd\u529b',
            allowClear: !0,
            style: { width: 200, marginTop: 40 },
          },
          yl = {
            treeData: _,
            value: ze,
            onChange: rl,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u5168\u90e8',
            allowClear: !0,
            style: { width: 200 },
          },
          bl = {
            treeData: N,
            value: Je,
            onChange: nl,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !0,
            placeholder: '\u54c1\u7c7b\u8d8b\u52bf',
            allowClear: !0,
            style: { width: 200, marginTop: 50 },
          },
          El = {
            treeData: K,
            value: el,
            onChange: cl,
            treeCheckable: !0,
            showCheckedStrategy: j,
            showSearch: !1,
            showArrow: !0,
            treeDefaultExpandAll: !1,
            placeholder: '\u7f8e\u5986',
            allowClear: !0,
          },
          vl = e => {
            console.log(e), a(e), De(e);
          },
          kl = e => {
            Ce(e);
          },
          pl = e => {},
          wl = e => e.join(' / '),
          Ol = e => e && e < O()().endOf('day'),
          Cl = (e, t) => {
            z(t);
          };
        return k.a.createElement(
          'div',
          { className: 'header' },
          k.a.createElement(
            m['a'],
            { style: { marginBottom: 20 } },
            k.a.createElement(
              m['a'].Item,
              {
                href: '#',
                onClick: () => {
                  me.push('/table/list');
                },
              },
              k.a.createElement('span', null, '\u4efb\u52a1\u7ba1\u7406'),
            ),
            k.a.createElement(m['a'].Item, null, '\u6dfb\u52a0\u4efb\u52a1'),
          ),
          k.a.createElement(
            y['a'],
            {
              defaultActiveKey: '1',
              type: 'card',
              size: ke,
              activeKey: Oe,
              onChange: e => {
                Ce(e);
              },
            },
            k.a.createElement(
              D,
              { tab: '\u57fa\u7840\u4fe1\u606f', key: '1' },
              k.a.createElement(
                u['a'],
                Object(c['a'])({}, f, {
                  size: ke,
                  form: ye,
                  name: 'register1',
                  scrollToFirstError: !0,
                }),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'name1',
                    label: k.a.createElement(
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
                  k.a.createElement(o['a'], null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'nickname1',
                    label: k.a.createElement(
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
                  k.a.createElement(o['a'], null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'email1',
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
                  k.a.createElement(o['a'], null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'password1',
                    label: '\u767b\u5f55\u5bc6\u7801',
                    rules: [
                      {
                        message: '\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801!',
                      },
                    ],
                    hasFeedback: !0,
                  },
                  k.a.createElement(o['a'].Password, null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'login_count1',
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
                  k.a.createElement(o['a'], null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'expire_date1',
                    label: '\u8d26\u53f7\u6709\u6548\u671f',
                    rules: [
                      {
                        required: !0,
                        message:
                          '\u8bf7\u8f93\u5165\u8d26\u53f7\u6709\u6548\u671f!',
                      },
                    ],
                  },
                  k.a.createElement(d['a'], {
                    disabledDate: Ol,
                    style: { width: '100%' },
                    placeholder: '\u5230\u671f\u65f6\u95f4',
                    onChange: Cl,
                  }),
                ),
                k.a.createElement(
                  u['a'].Item,
                  { name: 'tel1', label: '\u8054\u7cfb\u7535\u8bdd' },
                  k.a.createElement(o['a'], { style: { width: '100%' } }),
                ),
                k.a.createElement(
                  u['a'].Item,
                  {
                    name: 'sale_master1',
                    label: '\u9500\u552e\u8d1f\u8d23\u4eba',
                  },
                  k.a.createElement(o['a'], null),
                ),
                k.a.createElement(
                  u['a'].Item,
                  Object(c['a'])({}, F, { value: Oe, onChange: kl }),
                  k.a.createElement(
                    s['a'].Group,
                    { value: Oe, onChange: kl },
                    k.a.createElement(
                      i['a'],
                      {
                        onClick: () => {
                          ye.validateFields()
                            .then(e => {
                              kl('2');
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
            k.a.createElement(
              D,
              { tab: '\u5de5\u574a\u914d\u7f6e', key: '2' },
              k.a.createElement(
                u['a'],
                { form: ye, scrollToFirstError: !0 },
                k.a.createElement(
                  'div',
                  { className: 'lineOne' },
                  k.a.createElement(
                    'span',
                    { style: { fontWeight: 900 } },
                    '\u76d1\u6d4b\u65f6\u95f4',
                  ),
                  k.a.createElement(
                    u['a'].Item,
                    { name: 'date_type' },
                    k.a.createElement(
                      s['a'].Group,
                      null,
                      C.map((e, t) =>
                        k.a.createElement(
                          s['a'].Button,
                          {
                            value: e.value,
                            key: t,
                            style: { height: '30px', lineHeight: '5px' },
                          },
                          e.name,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              k.a.createElement(
                'div',
                { className: 'lineTwo' },
                k.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u6d1e\u89c1\u8303\u56f4',
                ),
                k.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u7b56\u7565\u7ec4\u5408',
                ),
                k.a.createElement(
                  'span',
                  { style: { fontWeight: 900 } },
                  '\u5206\u6790\u7ef4\u5ea6',
                ),
              ),
              k.a.createElement(
                y['a'],
                {
                  defaultActiveKey: oe['dimension']
                    ? oe['dimension'].toString()
                    : '1',
                  type: 'card',
                  size: ke,
                  tabPosition: 'left',
                  style: { height: 'auto' },
                  tabBarGutter: 75,
                  value: Fe,
                  onChange: vl,
                },
                k.a.createElement(
                  D,
                  { tab: '\u884c\u4e1a', key: '1' },
                  k.a.createElement(
                    u['a'],
                    Object(c['a'])({}, f, { size: ke, form: ye }),
                    k.a.createElement(
                      'div',
                      { className: 'industryOne' },
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'industry', style: { width: 300 } },
                          k.a.createElement(
                            n['a'],
                            { style: { width: 200 } },
                            q.map((e, t) =>
                              k.a.createElement(
                                n['a'].Option,
                                { key: t, value: e.value },
                                e.label,
                              ),
                            ),
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0101', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Pa, checked: tt },
                            '\u54c1\u724c\u6d1e\u89c1',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        { style: { width: 200 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010101', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: Ue,
                            onChange: Ia(['0101'], at, Xe),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010102', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: We,
                            value: Ue,
                            onChange: Ia(['0101'], at, Xe),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        u['a'].Item,
                        { name: 'intree1' },
                        k.a.createElement(b['a'], sl),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'industryTwo' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0102', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ja, checked: ft },
                            '\u6218\u5f79\u4e3b\u9898',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010201', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: wt,
                            onChange: Aa(['0102'], Ft, Ot),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010202', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: We,
                            value: wt,
                            onChange: Aa(['0102'], Ft, Ot),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'intree2', style: { width: 320 } },
                          k.a.createElement(b['a'], il),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'industryThree' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0103', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ma, checked: Pt },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010302', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: We,
                            value: Kt,
                            onChange: _a(['0103'], Yt, Lt),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'intree3', style: { width: 320 } },
                          k.a.createElement(b['a'], dl),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'industryFour' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0104', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Qa, checked: ma },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010401', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: sa,
                            onChange: La(['0104'], ha, ia),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '010402', style: { width: 300 } },
                          k.a.createElement(He, {
                            options: We,
                            value: sa,
                            onChange: La(['0104'], ha, ia),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'intree4' },
                          k.a.createElement(b['a'], ol),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      u['a'].Item,
                      F,
                      k.a.createElement(
                        s['a'].Group,
                        null,
                        k.a.createElement(
                          i['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  if ((console.log(e), e.date_type))
                                    if (
                                      P.length ||
                                      Y.length ||
                                      G.length ||
                                      J.length
                                    ) {
                                      if (P.length) {
                                        if (!e['010101'] && !e['010102'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          );
                                        if (e['010102'] && !e['intree1'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      if (Y.length) {
                                        if (!e['010201'] && !e['010202'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          );
                                        if (e['010202'] && !e['intree2'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      if (G.length) {
                                        if (!e['010302'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                          );
                                        if (e['010302'] && !e['intree3'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      if (J.length) {
                                        if (!e['010401'] && !e['010402'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          );
                                        if (e['010402'] && !e['intree4'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      Fe && (e['tabKey'] = Fe), t(e);
                                    } else
                                      r['a'].error(
                                        '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                      );
                                  else
                                    r['a'].error(
                                      '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                    );
                                })
                                .catch(e => {
                                  r['a'].warn(
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
                k.a.createElement(
                  D,
                  { tab: '\u54c1\u7c7b', key: '2' },
                  k.a.createElement(
                    u['a'],
                    Object(c['a'])({}, f, {
                      size: ke,
                      form: ye,
                      name: 'category',
                      scrollToFirstError: !0,
                    }),
                    k.a.createElement(
                      'div',
                      { className: 'categoryOne' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0201', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ya, checked: dt },
                            '\u54c1\u724c\u6d1e\u89c1',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '020101', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: nt,
                            onChange: xa(['0201'], ot, ct),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '020102', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: We,
                            value: nt,
                            onChange: xa(['0201'], ot, ct),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        u['a'].Item,
                        { name: 'catree1' },
                        k.a.createElement(b['a'], ml),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'categoryThree' },
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'category', style: { width: 300 } },
                          k.a.createElement(l['a'], {
                            options: L,
                            expandTrigger: 'hover',
                            displayRender: wl,
                            onChange: pl,
                            placeholder: '\u7f8e\u5986',
                            allowClear: !1,
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0203', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Wa, checked: Qt },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '020302', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: We,
                            value: Rt,
                            onChange: Na(['0203'], Zt, Mt),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'catree3' },
                          k.a.createElement(b['a'], hl),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'categoryFour' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0204', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Za, checked: ka },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '020401', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: ya,
                            onChange: qa(['0204'], pa, ba),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '020402', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: We,
                            value: ya,
                            onChange: qa(['0204'], pa, ba),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'catree4' },
                          k.a.createElement(b['a'], ul),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      u['a'].Item,
                      F,
                      k.a.createElement(
                        s['a'].Group,
                        null,
                        k.a.createElement(
                          i['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  if (date_type)
                                    if (R.length || M.length || W.length) {
                                      if (R.length) {
                                        if (!e['020101'] && !e['020102'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          );
                                        if (e['020102'] && !e['catree1'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u54c1\u724c\u6d1e\u89c1\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      if (M.length) {
                                        if (!e['020302'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                          );
                                        if (e['020302'] && !e['catree3'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      if (W.length) {
                                        if (!e['020401'] && !e['020402'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                          );
                                        if (e['020402'] && !e['catree4'])
                                          return void r['a'].error(
                                            '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                          );
                                      }
                                      Fe && (e['tabKey'] = Fe), t(e);
                                    } else
                                      r['a'].error(
                                        '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                      );
                                  else
                                    r['a'].error(
                                      '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                    );
                                })
                                .catch(e => {
                                  r['a'].warn(
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
                k.a.createElement(
                  D,
                  { tab: '\u54c1\u724c', key: '3' },
                  k.a.createElement(
                    u['a'],
                    Object(c['a'])({}, f, {
                      size: ke,
                      form: ye,
                      name: 'brandname',
                      scrollToFirstError: !0,
                    }),
                    k.a.createElement(
                      'div',
                      { className: 'brandOne' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0305', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ga, checked: Et },
                            '\u70ed\u95e8\u5185\u5bb9',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030501', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: ut,
                            onChange: Ba(['0305'], vt, gt),
                          }),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'brandTwo' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0302', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ra, checked: At },
                            '\u6218\u5f79\u4e3b\u9898',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030201', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: Vt,
                            onChange: Ta(['0302'], Tt, It),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030202', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: We,
                            value: Vt,
                            onChange: Ta(['0302'], Tt, It),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'brtree2' },
                          k.a.createElement(b['a'], gl),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'brandThree' },
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0303', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ha, checked: la },
                            '\u70ed\u95e8KOL',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030302', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: We,
                            value: $t,
                            onChange: Ka(['0303'], ra, ea),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'brtree3' },
                          k.a.createElement(b['a'], yl),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      'div',
                      { className: 'brandFour' },
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'brand', style: { width: 300 } },
                          k.a.createElement(b['a'], El),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        { style: { width: 300 } },
                        k.a.createElement(
                          u['a'].Item,
                          { name: '0304', style: { width: 300 } },
                          k.a.createElement(
                            h['a'],
                            { onChange: Ua, checked: Da },
                            '\u7279\u5f81\u8d8b\u52bf',
                          ),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030401', style: { width: 200 } },
                          k.a.createElement(He, {
                            options: Me,
                            value: Ca,
                            onChange: za(['0304'], Sa, ja),
                          }),
                        ),
                        k.a.createElement(
                          u['a'].Item,
                          { name: '030402' },
                          k.a.createElement(He, {
                            options: We,
                            value: Ca,
                            onChange: za(['0304'], Sa, ja),
                          }),
                        ),
                      ),
                      k.a.createElement(
                        'div',
                        null,
                        k.a.createElement(
                          u['a'].Item,
                          { name: 'brtree4' },
                          k.a.createElement(b['a'], bl),
                        ),
                      ),
                    ),
                    k.a.createElement(
                      u['a'].Item,
                      F,
                      k.a.createElement(
                        s['a'].Group,
                        null,
                        k.a.createElement(
                          i['a'],
                          {
                            onClick: () => {
                              ye.validateFields()
                                .then(e => {
                                  if (date_type)
                                    if (
                                      H.length ||
                                      Q.length ||
                                      Z.length ||
                                      U.length
                                    )
                                      if (!H.length || e['030501']) {
                                        if (Q.length) {
                                          if (!e['030201'] && !e['030202'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                            );
                                          if (e['030202'] && !e['brtree2'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u6218\u5f79\u4e3b\u9898\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                            );
                                        }
                                        if (Z.length) {
                                          if (!e['030302'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                            );
                                          if (e['030302'] && !e['brtree3'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u70ed\u95e8KOL\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                            );
                                        }
                                        if (U.length) {
                                          if (!e['030401'] && !e['030402'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6,\u81f3\u5c11\u9009\u62e9\u4e00\u79cd',
                                            );
                                          if (e['030402'] && !e['brtree4'])
                                            return void r['a'].error(
                                              '\u8bf7\u9009\u62e9\u7279\u5f81\u8d8b\u52bf\u4e0b\u591a\u7ef4\u7684\u9009\u9879,\u4e0d\u80fd\u4e3a\u7a7a',
                                            );
                                        }
                                        e['brand'].length > 6
                                          ? r['a'].error(
                                              '\u8bf7\u6700\u591a\u9009\u62e95\u4e2a\u54c1\u724c',
                                            )
                                          : (console.log(Fe),
                                            Fe && (e['tabKey'] = Fe),
                                            t(e));
                                      } else
                                        r['a'].error(
                                          '\u8bf7\u9009\u62e9\u70ed\u95e8\u5185\u5bb9\u4e0b\u7684\u5206\u6790\u7ef4\u5ea6',
                                        );
                                    else
                                      r['a'].error(
                                        '\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u7b56\u7565\u7ec4\u5408',
                                      );
                                  else
                                    r['a'].error(
                                      '\u8bf7\u9009\u62e9\u76d1\u6d4b\u65f6\u95f4',
                                    );
                                })
                                .catch(e => {
                                  r['a'].warn(
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
      var V = e => {
          var t = e.detail,
            a = e.edit;
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
            date_type1: a.date_type1,
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
            editData: a.editData,
            uid: a.uid,
            dim: a.dim,
          };
        },
        I = e => ({
          recordDim: t => {
            e({ type: 'edit/recordDim', dim: t });
          },
          userAddEdit: t => {
            e({ type: 'edit/userAddEdit', values: t });
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
            e({ type: 'edit/sendMon', mon: t });
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
      t['default'] = Object(p['a'])(V, I)(S);
    },
    'l+hh': function(e, t, a) {},
  },
]);
