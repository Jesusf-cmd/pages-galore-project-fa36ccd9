/**
 * Static HTML for the estimate form so crawlers see fields without JS.
 * Mirrors the visible field set in EstimateForm (submission still needs JS).
 */
export function renderEstimateFormHtml(opts?: { fromPath?: string }): string {
  const from = opts?.fromPath ? opts.fromPath.replace(/^\//, "") || "home" : "home";
  return `
    <section id="estimate" aria-labelledby="estimate-heading">
      <h2 id="estimate-heading">Request a Free Estimate</h2>
      <p>Fill out the form for a planning range. A written estimate follows an on-site visit. Call <a href="tel:4054584805">(405) 458-4805</a>.</p>
      <form method="post" action="/#estimate" data-estimate-form data-from="${from}">
        <fieldset>
          <legend>Project</legend>
          <label>Property type
            <select name="propertyType">
              <option value="">Select…</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>Your role
            <select name="customerRole">
              <option value="">Select…</option>
              <option value="Owner">Owner</option>
              <option value="Property manager">Property manager</option>
              <option value="General contractor">General contractor</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>Project type
            <select name="ownerProjectType" required>
              <option value="driveways">Driveways</option>
              <option value="patios">Patios &amp; slabs</option>
              <option value="foundations">Foundations</option>
              <option value="sidewalks">Sidewalks</option>
              <option value="retaining-walls">Retaining walls</option>
              <option value="parking-lots">Parking lots</option>
              <option value="commercial">Commercial concrete</option>
              <option value="sewer">Sewer line</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>Approximate size
            <input type="text" name="approxSize" placeholder="e.g. 20×24 ft" />
          </label>
          <label>Length (ft)
            <input type="number" name="lengthFt" min="1" value="20" />
          </label>
          <label>Width (ft)
            <input type="number" name="widthFt" min="1" value="20" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Contact</legend>
          <label>Your name
            <input type="text" name="name" required autocomplete="name" />
          </label>
          <label>Phone
            <input type="tel" name="phone" required autocomplete="tel" />
          </label>
          <label>Email
            <input type="email" name="email" required autocomplete="email" />
          </label>
          <label>Project address
            <input type="text" name="address" autocomplete="street-address" />
          </label>
          <label>Project details
            <textarea name="details" rows="3"></textarea>
          </label>
        </fieldset>
        <!-- Honeypot: leave empty. TODO(FDZ): enable photo upload when submit-quote supports files. -->
        <label style="position:absolute;left:-9999px;height:1px;width:1px;overflow:hidden" aria-hidden="true">
          Company website
          <input type="text" name="company_website" tabindex="-1" autocomplete="off" />
        </label>
        <input type="hidden" name="from" value="${from}" />
        <input type="hidden" name="form_started_at" value="" />
        <button type="submit">Get Your Quote</button>
      </form>
    </section>
  `;
}
