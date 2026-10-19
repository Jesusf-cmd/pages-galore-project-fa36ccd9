/**
 * Static HTML for the estimate form so crawlers see fields without JS.
 * Mirrors the visible field set in EstimateForm (submission still needs JS).
 */
import { isKansasEstimateOrigin } from "./estimatePath.ts";
import { KANSAS_PHONE, OKLAHOMA_PHONE } from "./phones.ts";

export function renderEstimateFormHtml(opts?: { fromPath?: string }): string {
  const from = opts?.fromPath ? opts.fromPath.replace(/^\//, "") || "home" : "home";
  const kansas = isKansasEstimateOrigin(from);
  const phone = kansas ? KANSAS_PHONE : OKLAHOMA_PHONE;
  const addressPlaceholder = kansas ? "Job address in Wichita, KS" : "123 Main St, Oklahoma City, OK";
  const intro = kansas
    ? `Send your project details for a written estimate after plan review or a site visit. Call <a href="tel:${phone.tel}">${phone.display}</a>.`
    : `Fill out the form for a planning range. A written estimate follows an on-site visit. Call <a href="tel:${phone.tel}">${phone.display}</a>.`;

  const projectTypeOptions = kansas
    ? `
              <option value="commercial">Commercial concrete</option>
              <option value="industrial">Industrial concrete</option>
              <option value="retaining-walls">Retaining walls</option>
              <option value="stamped">Stamped concrete</option>
              <option value="other">Other Wichita concrete</option>`
    : `
              <option value="driveways">Driveways</option>
              <option value="patios">Patios &amp; slabs</option>
              <option value="foundations">Foundations</option>
              <option value="sidewalks">Sidewalks</option>
              <option value="retaining-walls">Retaining walls</option>
              <option value="parking-lots">Parking lots</option>
              <option value="commercial">Commercial concrete</option>
              <option value="sewer">Sewer line</option>
              <option value="other">Other</option>`;

  return `
    <section id="estimate" aria-labelledby="estimate-heading">
      <h2 id="estimate-heading">${kansas ? "Request a Wichita Estimate" : "Request a Free Estimate"}</h2>
      <p>${intro}</p>
      <form method="post" action="${kansas ? "/concrete-contractors-wichita-ks#estimate" : "/#estimate"}" data-estimate-form data-from="${from}">
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
            <select name="ownerProjectType" required>${projectTypeOptions}
            </select>
          </label>
          <label>Approximate size
            <input type="text" name="approxSize" placeholder="${kansas ? "e.g. parking area, slab size, wall length" : "e.g. 20×24 ft"}" />
          </label>
          ${
            kansas
              ? ""
              : `<label>Length (ft)
            <input type="number" name="lengthFt" min="1" value="20" />
          </label>
          <label>Width (ft)
            <input type="number" name="widthFt" min="1" value="20" />
          </label>`
          }
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
            <input type="text" name="address" autocomplete="street-address" placeholder="${addressPlaceholder}" />
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
        <button type="submit">${kansas ? "Request Wichita Estimate" : "Get Your Quote"}</button>
      </form>
    </section>
  `;
}
