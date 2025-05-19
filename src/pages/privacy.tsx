import React from 'react';

// 子标题组件
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginTop: 32 }}>
    <h2
      style={{
        fontSize: 22,
        fontWeight: 600,
        marginBottom: 8,
        marginLeft: 16,
        color: '#2d3a4a',
      }}
    >
      {title}
    </h2>
    <div style={{ marginLeft: 32 }}>{children}</div>
  </div>
);

// 内容缩进组件
const SubSection = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: 12, fontSize: 16, marginLeft: 8 }}>
    {children}
  </div>
);

const Privacy = () => (
  <main
    style={{
      maxWidth: 800,
      margin: '40px auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.8,
      padding: 24,
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    }}
  >
    <h1
      style={{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 700,
        marginBottom: 16,
        letterSpacing: 2,
      }}
    >
      Leep 隐私协议
    </h1>
    <p
      style={{
        textAlign: 'center',
        fontSize: 16,
        margin: 0,
        color: '#888',
      }}
    >
      <strong>协议更新日期：</strong>2025年5月15日
    </p>
    <p
      style={{
        textAlign: 'center',
        fontSize: 16,
        margin: 0,
        color: '#888',
        marginBottom: 24,
      }}
    >
      <strong>运营方：</strong>上海必辉科技有限公司（以下简称“平台”）
    </p>
    <section style={{ fontSize: 18 }}>
      <Section title="一、服务定义">
        <SubSection>
          1.1
          平台提供固定式网络摄像头租赁服务，用户付费选定设备及租期（以分钟计费），租期内可通过账号利用摄像头录制内容。
        </SubSection>
        <SubSection>
          1.2 所有拍摄内容自动上传至平台服务器，您可自行选择下载或删除视频。
        </SubSection>
      </Section>
      <Section title="二、用户责任">
        <SubSection>
          <strong>2.1 拍摄合法性承诺</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>
              用户保证内容不违反中国法律及公序良俗（如涉政敏感、色情暴力、侵权材料）；
            </li>
            <li>
              用户承诺已取得被拍摄者的完整授权（形式不限），平台不对授权真实性进行核验。因授权瑕疵引发的纠纷，用户需赔偿平台全部损失（包括但不限于律师费、行政处罚）；
            </li>
            <li>用户对租赁期间的录制内容承担全部责任。</li>
          </ul>
        </SubSection>
        <SubSection>
          <strong>2.2 设备安全义务</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>
              用户账号操作即视为本人行为，平台不对非系统漏洞导致的账户盗用承担责任；
            </li>
            <li>发现设备异常（如被劫持、数据泄露）须立即通知平台。</li>
          </ul>
        </SubSection>
      </Section>
      <Section title="三、平台责任">
        <SubSection>
          <strong>3.1 数据存储与安全</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>内容存储于中国大陆境内服务器；</li>
            <li>
              平台履行网络安全等级保护基本义务，因不可抗力、第三方攻击等导致的数据泄露，平台不承担赔偿责任。
            </li>
          </ul>
        </SubSection>
        <SubSection>
          <strong>3.2 内容审核机制</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>
              对上传内容进行AI初步筛查（如敏感画面识别），自动标记疑似违规内容；
            </li>
            <li>
              对标记内容进行人工复核，并在48小时内作出最终判定并通知用户。
            </li>
            <li>
              平台下架争议内容系基于商业判断而非法律判断，不视为对用户行为的责任认定。
            </li>
          </ul>
        </SubSection>
      </Section>
      <Section title="四、数据权属与使用">
        <SubSection>
          4.1
          用户保留拍摄内容的著作权，但授权平台为服务运营目的使用内容（包括但不限于存储、转码、生成缩略图），且在配合监管调查时无需另行通知用户。
        </SubSection>
        <SubSection>
          4.2
          未经用户同意，平台不得将内容用于商业宣传、算法训练等用途，但经技术处理无法识别特定个人的内容，平台可用于算法优化。
        </SubSection>
        <SubSection>
          4.3 租期结束后，建议用户自行下载内容，平台不承担数据丢失责任。
        </SubSection>
      </Section>
      <Section title="五、隐私保护条款">
        <SubSection>
          5.1 加密传输：摄像头至服务器的视频流经安全加密，防止中间人窃取。
        </SubSection>
        <SubSection>
          <strong>5.2 敏感信息处理：</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>
              若用户拍摄到他人生物识别信息（如人脸、声纹），需进行模糊或消音处理；
            </li>
            <li>未脱敏内容被追责的，用户需全额赔偿平台损失。</li>
          </ul>
        </SubSection>
      </Section>
      <Section title="六、免责声明">
        <SubSection>
          <strong>6.1 以下情形平台不承担责任：</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>用户未履行授权义务导致的侵权索赔；</li>
            <li>黑客攻击、电力中断等不可控因素导致的数据丢失；</li>
            <li>用户误操作删除内容；</li>
            <li>因第三方云服务商、电信运营商等关联方过错导致的服务中断。</li>
          </ul>
        </SubSection>
        <SubSection>
          6.2 因政策法规变动终止服务的，平台将按剩余租期价值折算退款。
        </SubSection>
      </Section>
      <Section title="七、资费与违约责任">
        <SubSection>
          7.1 付费规则：租金按租期一次性预扣，提前终止服务不退还已支付费用。
        </SubSection>
        <SubSection>
          <strong>7.2 违规处罚：</strong>
          <ul style={{ marginLeft: 24 }}>
            <li>
              用户录制违规内容的，平台有权立即终止服务并扣留全部费用（扣留费用用于支付平台筛查成本）；
            </li>
          </ul>
        </SubSection>
      </Section>
      <Section title="八、协议管辖">
        <SubSection>
          8.1
          本协议适用中国法律，争议需提交上海仲裁委员会按简易程序审理，仲裁费用（含平台律师费）由败诉方承担。
        </SubSection>
        <SubSection>
          8.2 平台保留的用户操作日志、授权记录等数据可作为法律证据。
        </SubSection>
      </Section>
      <Section title="附件1：《第三方拍摄授权书》要求">
        <SubSection>
          <ul style={{ marginLeft: 24 }}>
            <li>被拍摄者信息：姓名、身份证号/护照号；</li>
            <li>授权范围：允许拍摄的时间、区域及用途；</li>
            <li>
              签署方式：用户需向被拍摄者说明平台已豁免审核义务，相关风险由拍摄者自行承担。
            </li>
          </ul>
        </SubSection>
      </Section>
    </section>
  </main>
);

export default Privacy;
