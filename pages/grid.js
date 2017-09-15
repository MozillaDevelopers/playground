import Layout from '../components/Layout';

export default () => (
  <Layout title="Grid Test | About">
    <div className="container">
      <div className="test col-lg-12 col-md-6">col-lg-12 col-md-6</div>
      <div className="row">
        <div className="test col-md-6">col-md-6</div>
        <div className="test col-md-6">col-md-6--last</div>
      </div>
      <div className="test col-md-6">col-md-6</div>
      <div className="test col-md-6--last">col-md-6--last</div>
      <div className="row">
        <div className="test col-md-4">col-md-4</div>
        <div className="test col-md-4">col-md-4</div>
        <div className="test col-md-4">col-md-4</div>
      </div>
      <div className="row">
        <div className="test col-md-6--center">col-md-6--center</div>
      </div>
      <div className="row">
        <div className="test col-md-6 col-md-offset-2">col-md-6 col-md-offset-2</div>
      </div>
      <div className="row">
        <div className="test gallery">gallery(4 of 12)</div>
        <div className="test gallery">gallery(4 of 12)</div>
        <div className="test gallery">gallery(4 of 12)</div>
        <div className="test gallery">gallery(4 of 12)</div>
        <div className="test gallery">gallery(4 of 12)</div>
        <div className="test gallery">gallery(4 of 12)</div>
      </div>
      <div className="row">
        <div className="test col-md-3">col-md-3</div>
        <div className="test col-md-3">col-md-3</div>
        <div className="test col-md-3">col-md-3</div>
        <div className="test col-md-3">col-md-3</div>
      </div>
      <div className="row">
        <div className="test col-md-2 col-xs-6">col-md-2 col-xs-6</div>
        <div className="test col-md-2 col-xs-6--last">col-md-2 col-xs-6--last</div>
        <div className="test col-md-2 col-xs-6">col-md-2 col-xs-6</div>
        <div className="test col-md-2 col-xs-6--last">col-md-2 col-xs-6--last</div>
        <div className="test col-md-2 col-xs-6">col-md-2 col-xs-6</div>
        <div className="test col-md-2 col-xs-6--last">col-md-2 col-xs-6--last</div>
      </div>
      <div className="row">
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
        <div className="test col-md-1">col-md-1</div>
      </div>
    </div>
  </Layout>
);
