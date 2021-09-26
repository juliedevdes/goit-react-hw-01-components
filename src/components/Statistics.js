import PropTypes from "prop-types";

export default function Statistics({ stats, title }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">
        {stats.default.map((el) => (
          <li class="item">
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.bool,
};
