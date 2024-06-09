export declare interface Hierarchy {
  // The id is one of idProvinsi, idKabupaten, idKecamatan, idDesa.
  // The value is the name for the id.
  id2name: { [id: string]: string };

  // The id is the idDesa.
  // The value is [maxTpsNo, extBegin?, extEnd?].
  // signifying that the TPS has number from [1, maxTpsNo].
  // and optionally it has extended number from [extBegin, extEnd].
  tps: { [id: string]: number[] };
}

export class PrestineLokasi {
  public C: Record<string, string[]>;
  T: Record<string, number>;
  D: Record<string, number> = {};

  /**
   * @param {Hierarchy} H the id2name and tps detail.
   * @param {Record<string, number[]>} dpt optionally supplied.
   */
  constructor(public H: Hierarchy, private dpt?: Record<string, number[]>) {
    this.C = this.getChildrenIds(H.id2name);
    this.T = this.getTotalTps();
    if (this.dpt) this.D = this.getTotalDpt();
    console.log(
      "Loaded Hierarchy, total TPS: ",
      this.T[""],
      Object.keys(this.T).length
    );
  }

  /**
   * Returns the map of sorted children ids.
   * @param {Record<string, string>} id2name The map of idLokasi to name.
   * @return {Record<string, string[]>} The map of sorted children.
   */
  private getChildrenIds(id2name: Record<string, string>): Record<string, string[]> {
    const c: Record<string, Set<string>> = { "": new Set<string>() };
    for (const idDesa of Object.keys(id2name)) {
      if (idDesa.length != 10) continue;

      const idProvinsi = idDesa.substring(0, 2);
      c[""].add(idProvinsi);
      if (!c[idProvinsi]) c[idProvinsi] = new Set<string>();
      c[idProvinsi].add(idDesa.substring(2, 4));

      const idKabupaten = idDesa.substring(0, 4);
      if (!c[idKabupaten]) c[idKabupaten] = new Set<string>();
      c[idKabupaten].add(idDesa.substring(4, 6));

      const idKecamatan = idDesa.substring(0, 6);
      if (!c[idKecamatan]) c[idKecamatan] = new Set<string>();
      c[idKecamatan].add(idDesa.substring(6, 10));
    }
    const sortedC: Record<string, string[]> = {};
    for (const [id, set] of Object.entries(c)) {
      sortedC[id] = Array.from(set).sort((a, b) => {
        const na = id2name[id + a];
        const nb = id2name[id + b];
        return na < nb ? -1 : na > nb ? 1 : 0;
      });
    }
    return sortedC;
  }

  /**
   * Compute the total tps for each id.
   * @return {Record<string, number>} The map of total tps by id.
   */
  private getTotalTps() {
    const totalTps: Record<string, number> = {};
    /**
     * Recursive function to compute number of tps in the sub hierarchy.
     * @param {string} id the lokasi id
     * @return {number} the total number of tps for the id.
     */
    const rec = (id: string) => {
      let numTps = 0;
      if (id.length == 10 && id.startsWith("99")) {
        const [tpsNo] = this.H.tps[id];
        numTps += tpsNo > 0 ? tpsNo : 1;
      } else if (id.length == 10) {
        const [maxTpsNo, extBegin, extEnd] = this.H.tps[id];
        numTps += maxTpsNo;
        if (extBegin) numTps += extEnd - extBegin + 1;
      } else {
        for (const suffixId of this.C[id]) {
          numTps += rec(id + suffixId);
        }
      }
      return (totalTps[id] = numTps);
    };
    rec("");
    return totalTps;
  }

  /**
   * Compute the total dpt for each id.
   * @return {Record<string, number>} The map of total dpt by id.
   */
  private getTotalDpt() {
    const totalDpt: Record<string, number> = {};
    /**
     * Recursive function to compute number of dpt in the sub hierarchy.
     * @param {string} id the lokasi id
     * @return {number} the total number of dpt for the id.
     */
    const rec = (id: string) => {
      let numDpt = 0;
      if (id.length == 10) {
        for (const d of this.dpt?.[id] ?? []) {
          numDpt += d;
        }
      } else {
        for (const suffixId of this.C[id]) {
          numDpt += rec(id + suffixId);
        }
      }
      return (totalDpt[id] = numDpt);
    };
    rec("");
    return totalDpt;
  }

  /**
   * Gets the name of the wilayah based on the provided id.
   * @param {Record<string, string>} id2name The map of idLokasi to name.
   * @param {string} id The idLokasi to look up.
   * @return {string | undefined} The name of the wilayah, or undefined if not found.
   */
  getNameById(id: string): string | undefined {
    return this.H.id2name[id];
  }
}
